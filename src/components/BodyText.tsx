import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.white};
  &[aria-checked='true'] {
    text-decoration: line-through;
    text-decoration-color: ${styles.colors.orange300};
  }
`
export const P_LinkBodyText = styled(P_BodyText)`
  &:hover {
    color: ${styles.colors.orange300};
  }
`
