import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, styles } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type Board = ('' | 'x' | 'o')[][]

const boardSize = 10
const winLength = 5

const createBoard = () => {
  return [...Array(boardSize)].map(_ => Array(boardSize).fill(''))
}

// Code borrowed from https://www.codegrepper.com/search.php?q=diagonal%20matrix%20javascript
const getDiagonals = (grid: Board) => {
  let result: Board = []
  let temp: Array<'' | 'x' | 'o'>
  for (let k = 0; k <= 2 * (boardSize - 1); ++k) {
    temp = []
    for (let y = boardSize - 1; y >= 0; --y) {
      let x = k - y
      if (x >= 0 && x < boardSize) {
        temp.push(grid[x][y])
      }
    }
    if (temp.length > 0) {
      result.push(temp)
    }
  }
  return result
}

const getReverseDiagonals = (grid: Board) => {
  let result: Board = []
  let temp: Array<'' | 'x' | 'o'>
  for (let k = 0; k <= 2 * (boardSize - 1); ++k) {
    temp = []
    for (let y = boardSize - 1; y >= 0; --y) {
      let x = k + y - (boardSize - 1)
      if (x >= 0 && x < boardSize) {
        temp.push(grid[x][y])
      }
    }
    if (temp.length > 0) {
      result.push(temp)
    }
  }
  return result
}

const checkSymbols = (direction: Array<'' | 'x' | 'o'>, turn: 'x' | 'o') =>
  direction.join('').includes(turn.repeat(winLength))

export const TicTacToe = () => {
  const [turn, setTurn] = useState('x' as 'x' | 'o')
  const [board, setBoard] = useState<Board>(createBoard())
  const [winner, setWinner] = useState(null as null | 'x' | 'o')

  const checkForWinner = (board: Board, row: number, column: number) => {
    if (
      checkSymbols(board[row], turn) ||
      checkSymbols(
        board.map(x => x[column]),
        turn
      ) ||
      checkSymbols(getDiagonals(board)[row + column], turn) ||
      checkSymbols(getReverseDiagonals(board)[row - column + (boardSize - 1)], turn)
    ) {
      setWinner(turn)
    }
  }

  const handlePlayerMove = (row: number, column: number) => {
    setBoard(board =>
      board.map((x, i) => (row === i ? x.map((y, i) => (column === i ? turn : y)) : x))
    )
    return board.map((x, i) => (row === i ? x.map((y, i) => (column === i ? turn : y)) : x))
  }

  const handleClick = (row: number, column: number) => {
    if (board[row][column] !== '') return
    checkForWinner(handlePlayerMove(row, column), row, column)
    if (turn === 'x') {
      setTurn('o')
    } else {
      setTurn('x')
    }
  }

  const handleReset = () => {
    setBoard(createBoard())
    setWinner(null)
  }

  return (
    <>
      <Helmet>
        <title>Katarína Soušková | Tic Tac Toe</title>
      </Helmet>
      <Div_Container>
        <P_BodyTextOrange>{!winner && `${winLength} symbols win the game`}</P_BodyTextOrange>
        <H_Heading>{winner ? `Winner is ${winner}` : `Player: ${turn}`}</H_Heading>
        <Div_BoardBox>
          <Div_BoardWrapper>
            <Div_Board>
              {!winner ? (
                board.map((row, x) =>
                  row.map((col, y) => (
                    <Div_BoardItem
                      key={x.toString() + y.toString()}
                      onClick={() => handleClick(x, y)}
                    >
                      <P_BodyText>{col}</P_BodyText>
                    </Div_BoardItem>
                  ))
                )
              ) : (
                <Div_ResetContainer onClick={() => handleReset()}>
                  <H_Heading>Reset Game</H_Heading>
                </Div_ResetContainer>
              )}
            </Div_Board>
          </Div_BoardWrapper>
        </Div_BoardBox>
        <Div_ButtonContainer>
          {!winner && (
            <TransparentButtonBorder onClick={() => handleReset()}>
              <P_BodyText>Reset</P_BodyText>
            </TransparentButtonBorder>
          )}
        </Div_ButtonContainer>
      </Div_Container>
    </>
  )
}

const Div_BoardBox = styled.div`
  width: 35%;
  border: ${styles.border.orange};
  border-radius: 8px;
  ${breakpoint.smallNotebook} {
    width: 50%;
  }
  ${breakpoint.tabletLandscape} {
    width: 60%;
  }
  ${breakpoint.tabletPortrait} {
    width: 90%;
  }
  ${breakpoint.phone} {
    width: 100%;
  }
`

const Div_BoardWrapper = styled.div`
  position: relative;
  padding-top: 100%;
`

const Div_Board = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(${boardSize}, 1fr);
  grid-template-rows: repeat(${boardSize}, 1fr);
`
const Div_BoardItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${styles.colors.orangeTransparent};
`
const Div_ResetContainer = styled.div`
  grid-column: 1 / ${boardSize + 1};
  grid-row: 1 / ${boardSize + 1};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const P_BodyTextOrange = styled(P_BodyText)`
  color: ${styles.colors.orangeTransparent};
`
const Div_ButtonContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`
