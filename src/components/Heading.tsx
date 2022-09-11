import { breakpoint, styles } from '../helpers/theme'
import styled, { css } from 'styled-components'

const headingStyles = css`
  text-align: center;
  font-size: ${styles.fontSize.md};
  font-weight: normal;
  padding: ${styles.spacing.sm};
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.sm};
  }
`

export const H_Heading = styled.h1`
  ${headingStyles}
  color: ${styles.colors.orange300};
`

export const H_SubHeading = styled.h2`
  ${headingStyles}
  color: ${styles.colors.orangeTransparent};
`
