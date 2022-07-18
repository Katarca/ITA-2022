import { StyledLink } from './Styles/StyledLink'
import React from 'react'

export interface LinkProps {
  to: any
  target?: string
  children?: JSX.Element | JSX.Element[]
}

const Link = ({ to, target, children }: LinkProps) => {
  return (
    <StyledLink to={to} target={target}>
      {children}
    </StyledLink>
  )
}

export default Link
