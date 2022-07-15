import { Bar, BurgerMenu, NavItem, NavItems, StyledNavbar } from './Styles/StyledNavbar'
import { StyledLink } from '../../page-style/StyledPage'

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavItems>
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
      <BurgerMenu>
        <Bar />
        <Bar />
        <Bar />
      </BurgerMenu>
    </StyledNavbar>
  )
}

export default Navbar
