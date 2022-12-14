import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { P_BodyText } from '../components/BodyText'
import { TransparentButtonBorder } from '../components/Button'
import { breakpoint, styles } from '../helpers/theme'
import { delay } from '../utils/delay'
import { idGenerator } from '../utils/idGenerator'
import { shuffleArray } from '../utils/shuffleArray'
import React, { useState } from 'react'
import styled from 'styled-components'

const cardPics = ['๐ค ', '๐', '๐ฆ', '๐ป', '๐ช', '๐ข', '๐ฐ', '๐งจ']

type Card = {
  id: string
  value: string
  frozen: boolean
  flipped: boolean
}

const createBoard = () =>
  shuffleArray(
    [...cardPics, ...cardPics].map(
      cardPic =>
        ({
          id: idGenerator(),
          value: cardPic,
          frozen: false,
          flipped: false,
        } as Card)
    )
  )

export const MemoryGame = () => {
  const [cards, setCards] = useState(createBoard())
  const [selectedCard, setSelectedCard] = useState(null as Card | null)
  const [matches, setMatches] = useState(0)
  const [moves, setMoves] = useState(0)

  const handleCardClick = (clickedCard: Card) => {
    if (!clickedCard.frozen) cardClick(clickedCard)
  }

  const cardClick = (clickedCard: Card) => {
    setCards(
      cards.map(card =>
        card.id === clickedCard.id ? { ...card, frozen: true, flipped: true } : card
      )
    )
    if (!selectedCard) {
      setSelectedCard(clickedCard)
      return
    } else if (clickedCard.value === selectedCard.value) {
      setMatches(prevMatches => prevMatches + 1)
      setMoves(prevMoves => prevMoves + 1)
      setCards(
        cards.map(card =>
          card.id === clickedCard.id || card.id === selectedCard.id
            ? { ...card, frozen: true, flipped: true }
            : card
        )
      )
      setSelectedCard(null)
      return
    } else if (selectedCard && clickedCard.value !== selectedCard.value) {
      setMoves(prevMoves => prevMoves + 1)
      const flipBack = async () => {
        setCards(
          cards.map(card =>
            card.id === clickedCard.id || card.id === selectedCard.id
              ? { ...card, flipped: true, frozen: true }
              : { ...card, frozen: true }
          )
        )
        await delay(500)
        setCards(
          cards.map(card =>
            card.id === clickedCard.id || card.id === selectedCard.id
              ? { ...card, frozen: false, flipped: false }
              : card
          )
        )
        setSelectedCard(null)
      }
      flipBack()
    }
  }

  const handleReset = () => {
    setCards(createBoard())
    setMatches(0)
    setMoves(0)
  }

  return (
    <>
      <Helmet>
        <title>Katarรญna Souลกkovรก | Memory Game</title>
      </Helmet>
      <Div_Container>
        <H_Heading>
          {matches === cards.length / 2 ? 'Congrats partner!' : 'Find all pairs ๐ค '}
        </H_Heading>
        <Div_TextContainer>
          <P_BodyTextOrange>
            moves: {moves} | pairs: {matches}
          </P_BodyTextOrange>
        </Div_TextContainer>
        <Div_BoardBox>
          <Div_BoardWrapper>
            <Div_Board>
              {cards.map(card => (
                <Div_Card
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  flipped={card.flipped}
                >
                  <P_EmojiText>{card.flipped ? card.value : 'โ'}</P_EmojiText>
                </Div_Card>
              ))}
            </Div_Board>
          </Div_BoardWrapper>
        </Div_BoardBox>
        <Div_ButtonContainer>
          <TransparentButtonBorder onClick={() => handleReset()}>
            <P_BodyText>Reset</P_BodyText>
          </TransparentButtonBorder>
        </Div_ButtonContainer>
      </Div_Container>
    </>
  )
}

const Div_BoardBox = styled.div`
  width: 35%;
  background-color: ${styles.colors.whiteTransparent};
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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`
const Div_Card = styled.div<{ flipped: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => (props.flipped === false ? 'pointer' : 'context-menu')};
  transition: 0.1s;
  &:hover {
    transform: ${props => props.flipped === false && 'scale(1.05)'};
  }
`

const P_EmojiText = styled.p`
  font-size: ${styles.fontSize.xl};
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.lg};
  }
  ${breakpoint.miniPhone} {
    font-size: ${styles.fontSize.md};
  }
`

const Div_TextContainer = styled.div`
  padding-bottom: ${styles.spacing.sm};
`

const Div_ButtonContainer = styled.div`
  padding: ${styles.spacing.sm} 0;
`

const P_BodyTextOrange = styled(P_BodyText)`
  color: ${styles.colors.orangeTransparent};
`
