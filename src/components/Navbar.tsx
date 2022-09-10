import { RouterLink } from './RouterLink'
import { breakpoint, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <Nav_MainNav>
      <Ul_NavList>
        <Li_NavItem>
          <RouterLink to={urls.homePage}>Home</RouterLink>
        </Li_NavItem>
        <Li_NavItem>
          <RouterLink to={urls.projects}>Projects</RouterLink>
        </Li_NavItem>
        <Li_NavItem>
          <RouterLink to={urls.cv}>CV</RouterLink>
        </Li_NavItem>
      </Ul_NavList>
    </Nav_MainNav>
  )
}

const Nav_MainNav = styled.nav`
  width: 70vw;
  margin: auto;
  padding: ${styles.spacing.md};
  border-bottom: ${styles.border.orangeTransparent};
  ${breakpoint.tabletPortrait} {
    width: 90vw;
  }
`

const Ul_NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  ${breakpoint.tabletPortrait} {
    justify-content: space-evenly;
  }
`

const Li_NavItem = styled.li`
  &:hover {
    transform: scale(1.1);
  }
`
