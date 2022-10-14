import { smTextStyles, styles, xsTextStyles } from '../helpers/theme'
import styled from 'styled-components'

export const P_BodyText = styled.p`
  ${smTextStyles}
  color: ${styles.colors.white};
  &[aria-checked='true'] {
    text-decoration: line-through;
    text-decoration-color: ${styles.colors.orangeTransparent};
    color: ${styles.colors.orangeTransparent};
  }
`
export const P_LinkBodyText = styled(P_BodyText)`
  text-align: center;
  &:hover {
    color: ${styles.colors.orange300};
  }
`
export const P_BodyTextXs = styled(P_BodyText)`
  ${xsTextStyles}
`

export const P_BodyTextGrey = styled(P_BodyText)`
  color: ${styles.colors.grey300};
`

export const P_BodyTextXsGrey = styled(P_BodyTextXs)`
  color: ${styles.colors.grey300};
`
