import { Div_Container } from '../components/Container'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { idGenerator } from '../utils/idGenerator'
import { shuffleArray } from '../utils/shuffleArray'
import React, { useState } from 'react'

const cardPics = ['🤠', '🐎', '🦅', '🐻', '🪕', '👢', '💰', '🧨']

type Card = {
  id: string
  value: string
}

const createBoard = (): Card[] =>
  shuffleArray(
    [...cardPics, ...cardPics].map(cardPic => ({
      id: idGenerator(),
      value: cardPic,
    }))
  )

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>(createBoard())

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Memory Game</title>
      </Helmet>
      <Div_Container>MemoryGame</Div_Container>
    </HelmetProvider>
  )
}
