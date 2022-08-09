import { styles } from '../../helpers/theme'
import styled from 'styled-components'

export const P_BodyTextGrey = styled.p`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.grey300};
  &:not(:last-child) {
    padding-bottom: ${styles.spacing.sm};
  }
`

export const P_BodyTextWhite = styled.p`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.white};
  padding-bottom: ${styles.spacing.sm};
`

export const P_BodyTextBlack = styled.p`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.black};
  font-weight: 600;
  padding-bottom: ${styles.spacing.sm};
`

export const P_BodyTextDarkGrey = styled.p`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.grey900};
  &:not(:last-child) {
    padding-bottom: ${styles.spacing.sm};
  }
`
