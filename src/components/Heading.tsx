import { styles } from '../helpers/theme'
import styled from 'styled-components'

export const H_Heading = styled.h1`
  text-align: center;
  font-size: ${styles.fontSize.lg};
  padding: ${styles.spacing.sm};
  color: ${styles.colors.orange300};
`

export const H_SubHeading = styled.h2`
  text-align: center;
  font-size: ${styles.fontSize.md};
  padding: ${styles.spacing.sm};
  color: ${styles.colors.orangeTransparent};
`
