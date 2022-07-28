import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

type LinkProps = {
  to: string
  target?: string
  children: JSX.Element | JSX.Element[]
}

export const RouterLink = (props: LinkProps) => {
  return (
    <StyledLink to={props.to} target={props.target}>
      {props.children}
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
`
