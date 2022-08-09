import { Div_Container } from '../components/Container'
import { DummyCode } from './DummyCode'
import { H_Heading } from '../components/Heading'
import { P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled from 'styled-components'

const CODE = DummyCode
const CODE_SEGMENT = 5

export const HackerTyper = () => {
  const [hackerCode, setHackerCode] = useState('')
  const [index, setIndex] = useState(0)

  const handleKeyDown = () => {
    setIndex(index + CODE_SEGMENT)
    setHackerCode(CODE.substring(0, index))
    if (index === CODE.length) {
      setIndex(0)
    }
  }

  return (
    <Div_Container>
      <H_HackHeading>Hacker Typer</H_HackHeading>
      <TA_TextArea
        value={!hackerCode ? 'Start typing...' : hackerCode}
        onKeyDown={handleKeyDown}
        autoFocus={true}
      />
      <RouterLink to={urls.homePage}>
        <P_LinkBodyText>Return home</P_LinkBodyText>
      </RouterLink>
    </Div_Container>
  )
}

const H_HackHeading = styled(H_Heading)`
  font-size: ${styles.fontSize.md};
`
const TA_TextArea = styled.textarea`
  width: 100%;
  height: 65vh;
  border: 2px solid ${styles.colors.orange300};
  border-radius: 8px;
  background: transparent;
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.orange300};
  padding: ${styles.spacing.xs};
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
