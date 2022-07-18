import { breakpoint } from '../../../../helpers/consts'
import { centralPart } from '../../../page-style/StyledPage'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  ${centralPart}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 50px 0;
  ${breakpoint.phone} {
    flex-direction: column;
    gap: 20px;
  }
`

export const HomeTextContainer = styled.div`
  padding-right: 50px;
  ${breakpoint.phone} {
    width: 100%;
    padding-right: unset;
    text-align: center;
  }
`

export const LogoContainer = styled.div`
  ${centralPart}
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  ${breakpoint.phone} {
    justify-content: space-between;
  }
`
export const NavGap = styled.div`
  height: 120px;
`
