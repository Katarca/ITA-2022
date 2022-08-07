import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
`
export const P_LinkBodyText = styled(P_BodyText)`
  &:hover {
    color: ${styles.colors.orange300};
  }
`
