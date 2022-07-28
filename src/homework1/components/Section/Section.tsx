import { colors } from '../../../helpers/consts'
import React from 'react'
import styled from 'styled-components'

type SectionProps = {
  id: string
  name: string
  className: string
  children: JSX.Element | JSX.Element[]
}

export const Section = (props: SectionProps) => {
  return (
    <StyledSection id={props.id} className={props.className}>
      {props.children}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  &.home-section {
    background-color: ${colors.black};
    color: ${colors.white};
    flex-direction: column;
    justify-content: space-between;
  }
  &.about-section {
    background-color: ${colors.yellow300};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding: 120px 0 50px 0;
  }
  &.history-section {
    background-color: ${colors.black};
    color: ${colors.white};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding: 120px 0 50px 0;
  }
  &.timeline-section {
    background-color: ${colors.yellow300};
    padding: 120px 0 50px 0;
  }
  &.today-section {
    background-color: ${colors.grey500};
    color: ${colors.white};
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding: 120px 0 50px 0;
  }
`
