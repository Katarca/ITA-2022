import { breakpoint, styles } from '../helpers/theme'
import styled from 'styled-components'

export const Div_Container = styled.div`
  width: 100vw;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${styles.spacing.md};
  ${breakpoint.phone} {
    padding: ${styles.spacing.sm};
  }
`
export const Div_FlexContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs};
`
