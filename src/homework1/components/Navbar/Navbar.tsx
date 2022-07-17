import { HamburgerContainer, NavItem, NavItems, StyledNavbar } from './Styles/StyledNavbar'
import { StyledLink } from '../../page-style/StyledPage'
import { colors } from '../../../helpers/consts'
import { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <StyledNavbar>
      <NavItems className={`${isOpen ? 'open' : ''}`}>
        <NavItem>
          <StyledLink to='home' activeClass='active' spy={true} smooth={true}>
            Home
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='about' activeClass='active' spy={true} smooth={true}>
            About JS
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='history' activeClass='active' spy={true} smooth={true}>
            History
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='timeline' activeClass='active' spy={true} smooth={true}>
            Timeline
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to='today' activeClass='active' spy={true} smooth={true}>
            JS Today
          </StyledLink>
        </NavItem>
      </NavItems>
      {width <= 900 && (
        <HamburgerContainer>
          <Hamburger toggled={isOpen} toggle={setOpen} color={colors.grey300} size={25} />
        </HamburgerContainer>
      )}
    </StyledNavbar>
  )
}

export default Navbar
