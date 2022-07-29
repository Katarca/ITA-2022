import { Link } from 'react-scroll'
import { breakpoint, colors, fontSize, space } from '../../helpers/theme'
import { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'
import styled from 'styled-components'

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
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

const StyledNavbar = styled.div`
  width: 85vw;
  background-color: ${colors.grey900};
  padding: ${space.small} 0 ${space.small} 0;
  border-radius: 0 0 8px 8px;
  position: fixed;
  top: 0;
  z-index: 1;
  left: 7.5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const NavItems = styled.ul`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${space.big};
  border-radius: 0 0 8px 8px;
  list-style: none;
  &.open {
    left: 7.5%;
  }
  ${breakpoint.tabletPortrait} {
    position: fixed;
    left: -100%;
    top: ${space.big};
    width: 85vw;
    flex-direction: column;
    align-items: center;
    gap: ${space.extraSmall};
    background-color: #1b1b1b;
    padding-bottom: ${space.small};
  }
`

const NavItem = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`

const HamburgerContainer = styled.div`
  padding: 0 ${space.small};
`

const StyledLink = styled(Link)`
  cursor: pointer;
  padding: ${space.extraSmall};
  text-decoration: none;
  font-size: ${fontSize.small};
  color: ${colors.grey300};
  &:hover {
    color: ${colors.yellow300};
  }
  &.active {
    color: ${colors.orange300};
  }
`
