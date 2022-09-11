import { Link } from 'react-router-dom'
import { breakpoint, smTextStyles, styles } from '../helpers/theme'
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
  ${smTextStyles}
  text-decoration: none;
  color: ${styles.colors.white};
  padding: 0 ${styles.spacing.sm};
  cursor: pointer;
  &:hover {
    color: ${styles.colors.orange300};
  }
`
