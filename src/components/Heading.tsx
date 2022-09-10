import { breakpoint, styles } from '../helpers/theme'
import styled from 'styled-components'

export const H_Heading = styled.h1`
  text-align: center;
  font-size: ${styles.fontSize.md};
  color: ${styles.colors.orange300};
  font-weight: normal;
  padding: ${styles.spacing.sm};
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.sm};
  }
`

export const H_SubHeading = styled.h2`
  text-align: center;
  font-size: ${styles.fontSize.md};
  padding: ${styles.spacing.sm};
  color: ${styles.colors.orangeTransparent};
`
