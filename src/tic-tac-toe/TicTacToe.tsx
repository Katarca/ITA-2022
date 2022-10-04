import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { breakpoint, styles } from '../helpers/theme'
import React, { useState } from 'react'
import styled from 'styled-components'

const boardSize = 10
const winLength = 5

const createBoard = (n: number) => {
  return [...Array(n)].map(_ => Array(n).fill(''))
}

// Code borrowed from https://www.codegrepper.com/search.php?q=diagonal%20matrix%20javascript
const getDiagonals = (grid: Array<Array<'' | 'x' | 'o'>>) => {
  let result = []
  let temp
  for (let k = 0; k <= 2 * (boardSize - 1); ++k) {
    temp = []
    for (let y = boardSize - 1; y >= 0; --y) {
      let x = k - y
      if (x >= 0 && x < boardSize) {
        temp.push(grid[y][x])
      }
    }
    if (temp.length > 0) {
      result.push(temp)
    }
  }
  return result
}

export const TicTacToe = () => {
  const [turn, setTurn] = useState('x' as 'x' | 'o')
  const [board, setBoard] = useState<Array<Array<'' | 'x' | 'o'>>>(createBoard(boardSize))
  const [winner, setWinner] = useState(null as null | 'x' | 'o')

  const handlePlayerMove = (row: number, column: number) => {
    setBoard(board.map((x, i) => (row === i ? x.map((y, i) => (column === i ? turn : y)) : x)))
    return board.map((x, i) => (row === i ? x.map((y, i) => (column === i ? turn : y)) : x))
  }

  const checkForWinner = (board: Array<Array<'' | 'x' | 'o'>>, row: number, column: number) => {
    if (
      board[row].join('').includes(turn.repeat(winLength)) ||
      board
        .map(x => x[column])
        .join('')
        .includes(turn.repeat(winLength)) ||
      getDiagonals(board)
        .map(diagonal => diagonal.join(''))
        .some(diagonal => diagonal.includes(turn.repeat(winLength)))
    ) {
      setWinner(turn)
    }
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
    setBoard(createBoard(boardSize))
    setWinner(null)
  }

  return (
    <>
      <Helmet>
        <title>Katarína Soušková | Tic Tac Toe</title>
      </Helmet>
      <Div_Container>
        <H_Heading>{!winner && turn}</H_Heading>
        <Div_BoardBox>
          <Div_BoardWrapper>
            <Div_Board>
              {!winner ? (
                board.map((row, y) =>
                  row.map((col, x) => (
                    <Div_Card
                      key={(x + 1).toString() + (y + 1).toString()}
                      onClick={() => handleClick(y, x)}
                    >
                      <P_BodyText>{col}</P_BodyText>
                    </Div_Card>
                  ))
                )
              ) : (
                <Div_ResetContainer onClick={() => handleReset()}>
                  <H_Heading>Reset Game {winner}</H_Heading>
                </Div_ResetContainer>
              )}
            </Div_Board>
          </Div_BoardWrapper>
        </Div_BoardBox>
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
const Div_Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${styles.colors.orangeTransparent};
`
const Div_ResetContainer = styled.div`
  grid-column: 1/5;
  grid-row: 1/5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
