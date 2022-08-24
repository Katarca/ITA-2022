import { breakpoint, styles } from '../helpers/theme'
import styled from 'styled-components'

export const MarkdownStyles = styled.div`
  & > h1 {
    font-size: ${styles.fontSize.lg};
    color: ${styles.colors.orange300};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.md};
    }
  }
  & > h2 {
    font-size: ${styles.fontSize.lg};
    color: ${styles.colors.orangeTransparent};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.md};
    }
  }
  & > h3 {
    font-size: ${styles.fontSize.md};
    color: ${styles.colors.orange300};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.sm};
    }
  }
  & > h4 {
    font-size: ${styles.fontSize.md};
    color: ${styles.colors.orangeTransparent};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.sm};
    }
  }
  & > h5 {
    font-size: ${styles.fontSize.sm};
    color: ${styles.colors.orange300};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.xs};
    }
  }
  & > h6 {
    font-size: ${styles.fontSize.xs};
    color: ${styles.colors.orangeTransparent};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.xs};
    }
  }
  & > p {
    font-size: ${styles.fontSize.sm};
    color: ${styles.colors.grey300};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.xs};
    }
  }
  & > ul {
    font-size: ${styles.fontSize.sm};
    color: ${styles.colors.grey300};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.xs};
    }
  }
  & > ol {
    font-size: ${styles.fontSize.sm};
    color: ${styles.colors.grey300};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.xs};
    }
  }
  & > table {
    width: 100%;
    font-size: ${styles.fontSize.sm};
    color: ${styles.colors.grey300};
    text-align: center;
    padding: ${styles.spacing.xs};
    ${breakpoint.phone} {
      font-size: ${styles.fontSize.xs};
    }
  }
  img {
    width: 100%;
  }
  a {
    color: ${styles.colors.yellow300};
  }
`
