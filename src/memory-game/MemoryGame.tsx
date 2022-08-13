import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { idGenerator } from '../utils/idGenerator'
import { shuffleArray } from '../utils/shuffleArray'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

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

  //   console.log(cars)

  return (
    <HelmetProvider>
      <Helmet>
        <title>Katarína Soušková | Memory Game</title>
      </Helmet>
      <Div_Container>
        <H_MgHeading>Wild West Memory Game 🤠</H_MgHeading>
        <Div_BoardBox>
          <Div_BoardWrapper>
            <Div_Board>
              {cards.map(card => (
                <Div_Card key={card.id}>
                  <P_EmojiText>{card.value}</P_EmojiText>
                </Div_Card>
              ))}
            </Div_Board>
          </Div_BoardWrapper>
        </Div_BoardBox>
        <RouterLink to={urls.homePage}>
          <P_LinkBodyText>Return home</P_LinkBodyText>
        </RouterLink>
      </Div_Container>
    </HelmetProvider>
  )
}

const H_MgHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.md};
  text-align: center;
`

const Div_BoardBox = styled.div`
  width: 35%;
  border: 2px solid ${styles.colors.orange300};
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
const Div_Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const P_EmojiText = styled.p`
  font-size: ${styles.fontSize.xxl};
  ${breakpoint.tabletPortrait} {
    font-size: ${styles.fontSize.xl};
  }
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.lg};
  }
  ${breakpoint.miniPhone} {
    font-size: ${styles.fontSize.md};
  }
`
