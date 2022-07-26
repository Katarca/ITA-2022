import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

export interface LinkProps {
  to: string
  target?: string
  children?: JSX.Element | JSX.Element[]
}

const RouterLink = ({ to, target, children }: LinkProps) => {
  return (
    <StyledLink to={to} target={target}>
      {children}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
`
export default RouterLink
