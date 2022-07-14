import { Bar, BurgerMenu, NavItem, NavItems, StyledNavbar } from './Styles/StyledNavbar'
import { NavText } from '../typo/BodyText'
import Link from '../Link/Link'
import React from 'react'

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
        <NavItem>
          <Link to='#'>
            <NavText>Home</NavText>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='#'>
            <NavText>About JS</NavText>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='#'>
            <NavText>History</NavText>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='#'>
            <NavText>Time Line</NavText>
          </Link>
        </NavItem>
        <NavItem>
          <Link to='#'>
            <NavText>JS Today</NavText>
          </Link>
        </NavItem>
      </NavItems>
      <BurgerMenu>
        <Bar />
        <Bar />
        <Bar />
      </BurgerMenu>
    </StyledNavbar>
  )
}

export default Navbar
