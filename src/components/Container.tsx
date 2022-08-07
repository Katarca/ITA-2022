import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const Div_Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${styles.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${styles.spacing.md};
`
