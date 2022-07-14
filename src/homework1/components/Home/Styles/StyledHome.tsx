import { centralPart } from '../../../page-style/StyledPage'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  ${centralPart}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 50px 0;
`

export const HomeTextContainer = styled.div`
  padding-right: 50px;
`

export const LogoContainer = styled.div`
  ${centralPart}
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
`
