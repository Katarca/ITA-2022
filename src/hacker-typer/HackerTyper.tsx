import { CustomTextarea } from '../components/Textarea'
import { Div_Container } from '../components/Container'
import { H_SubHeading } from '../components/Heading'
import { Helmet } from 'react-helmet-async'
import { breakpoint, styles } from '../helpers/theme'
import { dummyCode } from './dummyCode'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const CODE_SEGMENT = 5

export const HackerTyper = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [message, setMessage] = useState<'Access denied' | 'Access granted' | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey) {
      setMessage('Access denied')
    } else if (e.key === 'Enter') {
      setMessage('Access granted')
    } else if (e.key === 'Escape') {
      setMessage(null)
    }
  }

  const runCode = () => {
    const step = currentIndex + CODE_SEGMENT
    setCurrentIndex(step >= dummyCode.length ? 0 : step)
  }

  return (
    <>
      <Div_Container>
        <Helmet>
          <title>Katarína Soušková | Hacker Typer</title>
        </Helmet>
        {message ? (
          <Div_HackMsg message={message}>
            <H_MsgHeading>{message}</H_MsgHeading>
          </Div_HackMsg>
        ) : null}
        <HackTextArea
          value={
            currentIndex === 0
              ? 'Start typing on your keyboard to run the code. Hit CTRL for Access Denied and ENTER for Access Granted message. Hit ESCAPE to clear Access Denied/Granted. Happy Hacking!'
              : dummyCode.substring(0, currentIndex)
          }
          onChange={!message ? runCode : undefined}
          autoFocus={true}
          onKeyDown={handleKeyDown}
          spellCheck={false}
        />
      </Div_Container>
    </>
  )
}

const HackTextArea = styled(CustomTextarea)`
  width: 100%;
  height: 65vh;
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.orange300};
  padding: ${styles.spacing.xs};
  border: none;
  background-color: ${styles.colors.whiteTransparent};
  &:focus {
    outline: none;
  }
`

const Div_HackMsg = styled.div<{ message: 'Access denied' | 'Access granted' | null }>`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${styles.colors.black};
  border: 2px solid
    ${props => (props.message === 'Access granted' ? styles.colors.matrixGreen : styles.colors.red)};
  color: ${props =>
    props.message === 'Access granted' ? styles.colors.matrixGreen : styles.colors.red};
  & > h2 {
    color: ${props =>
      props.message === 'Access granted' ? styles.colors.matrixGreen : styles.colors.red};
    white-space: nowrap;
  }
`

const H_MsgHeading = styled(H_SubHeading)`
  text-transform: uppercase;
  padding: ${styles.spacing.md};
`
