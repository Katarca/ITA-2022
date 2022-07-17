import { colors } from '../../../../helpers/consts'
import styled from 'styled-components'

export const StyledNavbar = styled.div`
  width: 85vw;
  background-color: ${colors.grey900};
  padding: 25px 0 25px 0;
  border-radius: 0 0 8px 8px;
  position: fixed;
  top: 0px;
  z-index: 1;
  left: 7.5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const NavItems = styled.ul`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  border-radius: 0 0 8px 8px;
  list-style: none;
  &.open {
    left: 7.5%;
  }
  @media (max-width: 900px) {
    position: fixed;
    left: -100%;
    top: 70px;
    width: 85vw;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: #1b1b1b;
    padding-bottom: 20px;
  }
`

export const NavItem = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`

export const HamburgerContainer = styled.div`
  padding: 0 20px; ;
`
