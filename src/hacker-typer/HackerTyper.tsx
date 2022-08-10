import { Div_Container } from '../components/Container'
import { H_Heading } from '../components/Heading'
import { P_LinkBodyText } from '../components/BodyText'
import { RouterLink } from '../components/RouterLink'
import { dummyCode } from './dummyCode'
import { styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const CODE_SEGMENT = 5

export const HackerTyper = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [message, setMessage] = useState<'Access denied' | 'Access granted' | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.ctrlKey) {
      setMessage('Access denied')
    }
    if (e.key === 'Enter') {
      setMessage('Access granted')
    }
    if (e.key === 'Escape') {
      setMessage(null)
    }
  }

  const runCode = () => {
    setCurrentIndex(currentIndex + CODE_SEGMENT)
    if (currentIndex + CODE_SEGMENT >= dummyCode.length) {
      setCurrentIndex(0)
    }
  }

  return (
    <Div_Container>
      {message ? (
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
      ) : (
        ''
      )}
      <H_HackHeading>Hacker Typer</H_HackHeading>
      <TA_TextArea
        value={
          currentIndex === 0
            ? 'Start typing on your keyboard to run the code. Hit CTRL for Access Denied and ENTER for Access Granted message. Hit ESCAPE to clear Access Denied/Granted. Happy Hacking!'
            : dummyCode.substring(0, currentIndex)
        }
        onChange={!message ? runCode : () => {}}
        autoFocus={true}
        onKeyDown={handleKeyDown}
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
