import { StyledLink } from './Styles/StyledLink'
import React from 'react'

export interface LinkProps {
  to: string
  children?: JSX.Element
}

const Link = ({ to, children }: LinkProps) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

export default Link
