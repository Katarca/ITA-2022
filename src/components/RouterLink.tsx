import { Link } from 'react-router-dom'
import { styles } from '../helpers/theme'
import React from 'react'
import styled from 'styled-components'

type LinkProps = {
  to: string
  children: React.ReactNode
}

export const RouterLink = (props: LinkProps) => {
  return <StyledLink to={props.to}>{props.children}</StyledLink>
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: ${styles.spacing.xs};
  &:hover {
    transform: scale(1.1);
  }
`
