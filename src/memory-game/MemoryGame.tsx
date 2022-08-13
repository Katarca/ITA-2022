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

  return <div>MemoryGame</div>
}
