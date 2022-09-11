import { CustomTextarea } from '../components/Textarea'
import { Div_Container } from '../components/Container'
import { Helmet } from 'react-helmet-async'
import { dummyCode } from './dummyCode'
import { styles } from '../helpers/theme'
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
        {message && (
          <div>
            {message === 'Access denied' ? (
              <Div_DeniedContainer>
                <H_MsgHeading>{message}</H_MsgHeading>
              </Div_DeniedContainer>
            ) : (
              <Div_GrantedContainer>
                <H_MsgHeading>{message}</H_MsgHeading>
              </Div_GrantedContainer>
            )}
          </div>
        )}
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
`

const MsgContainerStyles = css`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${styles.colors.black};
`

const Div_GrantedContainer = styled.div`
  ${MsgContainerStyles};
  border: 2px solid ${styles.colors.matrixGreen};
  color: ${styles.colors.matrixGreen};
`

const Div_DeniedContainer = styled.div`
  ${MsgContainerStyles};
  border: 2px solid ${styles.colors.red};
  color: ${styles.colors.red};
`

const H_MsgHeading = styled.h2`
  text-transform: uppercase;
  font-size: ${styles.fontSize.md};
  padding: ${styles.spacing.md};
`
