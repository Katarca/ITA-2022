import { colors } from '../../../../helpers/consts'
import styled from 'styled-components'

export const StyledSection = styled.section`
  &.home-section {
    min-height: 100vh;
    background-color: ${colors.black};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
