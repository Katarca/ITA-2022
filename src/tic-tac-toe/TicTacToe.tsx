import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, styles } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

const cell = ' ' as ' ' | 'x' | 'o'

type Board = ReturnType<typeof createBoard>

const boardSize = 10
const winLength = 5

const createBoard = () => {
  return Array.from({ length: boardSize }, () => Array.from({ length: boardSize }, () => cell))
}

// Code borrowed from https://www.codegrepper.com/search.php?q=diagonal%20matrix%20javascript
const getDiagonals = (grid: Board) => {
  let result: Board = []
  let temp: typeof cell[]
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
  let temp: typeof cell[]
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

const checkSymbols = (direction: typeof cell[], turn: 'x' | 'o') =>
  direction.join('').includes(turn.repeat(winLength))

const checkSymbolsRow = (board: Board, row: number, turn: 'x' | 'o') =>
  checkSymbols(board[row], turn)

const checkSymbolsColumn = (board: Board, column: number, turn: 'x' | 'o') =>
  checkSymbols(
    board.map(x => x[column]),
    turn
  )

const checkSymbolsDiagonal = (board: Board, row: number, column: number, turn: 'x' | 'o') =>
  checkSymbols(getDiagonals(board)[row + column], turn)
// in getDiagonals function row = iteration - column
// to get the right diagonal: iteration = row + column

const checkSymbolsReverseDiagonal = (board: Board, row: number, column: number, turn: 'x' | 'o') =>
  checkSymbols(getReverseDiagonals(board)[row - column + (boardSize - 1)], turn)
// in getReverseDiagonals function row = iteration + column - (boardSize - 1)
// to get the right reverse diagonal: iteration = row - column + (boardSize - 1)

const checkForWinner = (board: Board, row: number, column: number, turn: 'x' | 'o') => {
  if (
    checkSymbolsRow(board, row, turn) ||
    checkSymbolsColumn(board, column, turn) ||
    checkSymbolsDiagonal(board, row, column, turn) ||
    checkSymbolsReverseDiagonal(board, row, column, turn)
  ) {
    return turn
  } else {
    return null
  }
}

export const TicTacToe = () => {
  const [turn, setTurn] = useState('x' as 'x' | 'o')
  const [board, setBoard] = useState(createBoard())
  const [winner, setWinner] = useState(null as null | 'x' | 'o')

  const handlePlayerMove = (row: number, column: number) => {
    setBoard(board =>
      board.map((x, i) => (row === i ? x.map((y, i) => (column === i ? turn : y)) : x))
    )
    return board.map((x, i) => (row === i ? x.map((y, i) => (column === i ? turn : y)) : x))
  }

  const handleClick = (row: number, column: number) => {
    if (board[row][column] !== cell) return
    setWinner(checkForWinner(handlePlayerMove(row, column), row, column, turn))
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
