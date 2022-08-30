import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const LoadingJSX = (text: string) => (
  <Div_LoadingContainer>
    <P_LoadingText>{text}</P_LoadingText>
  </Div_LoadingContainer>
)

const Div_LoadingContainer = styled.div`
  margin: ${styles.spacing.xs};
  text-align: center;
`

const P_LoadingText = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.grey300};
`
