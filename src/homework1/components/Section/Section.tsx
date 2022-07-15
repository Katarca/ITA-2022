import { StyledSection } from './Styles/StyledSection'
import React from 'react'

export interface SectionProps {
  id: string
  name: string
  className: string
  children: JSX.Element | JSX.Element[]
}

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <StyledSection id={id} className={className}>
      {children}
    </StyledSection>
  )
}

export default Section
