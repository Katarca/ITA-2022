import { Link } from 'react-router-dom'
import { breakpoint, styles } from '../helpers/theme'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const MainNavbar = () => {
  return (
    <Nav_MainNav>
      <Ul_NavList>
        <Li_NavItem>
          <Link_NavLink to={urls.homePage}>Projects</Link_NavLink>
        </Li_NavItem>
        <Li_NavItem>
          <Link_NavLink to={urls.homePage}>CV</Link_NavLink>
        </Li_NavItem>
        <Li_NavItem>
          <Link_NavLink to={urls.homePage}>Contact</Link_NavLink>
        </Li_NavItem>
      </Ul_NavList>
    </Nav_MainNav>
  )
}

const Nav_MainNav = styled.nav`
  width: 70vw;
  margin: auto;
  padding: ${styles.spacing.md};
  border-bottom: 1px solid ${styles.colors.orangeTransparent};
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

const Link_NavLink = styled(Link)`
  text-decoration: none;
  color: ${styles.colors.white};
  font-size: ${styles.fontSize.sm};
  padding: 0 ${styles.spacing.sm};
  &:hover {
    color: ${styles.colors.orange300};
  }
`
