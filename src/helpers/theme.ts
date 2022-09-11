import { css } from 'styled-components'

export const styles = {
  colors: {
    white: '#ffffff',
    yellow300: '#f7df1c',
    orange300: '#f77f1c',
    orangeTransparent: 'rgba(247, 127, 28, 0.5)',
    grey300: '#9c9c9c',
    grey500: '#2f363e',
    grey800: '#1b1b1b',
    grey900: 'rgba(0, 0, 0, 0.35)',
    blue900: '#0A0048',
    black: '#000000',
    matrixGreen: '#03A062',
    red: '#FF0000',
    pinkStyledComponents: '#9e5685',
  },
  spacing: {
    xxs: '5px',
    xs: '10px',
    sm: '20px',
    md: '50px',
    lg: '70px',
    xl: '120px',
  },
  fontSize: {
    xxs: '1.2rem',
    xs: '1.4rem',
    sm: '2rem',
    md: '3rem',
    lg: '4rem',
    xl: '6rem',
    xxl: '8rem',
  },
  border: {
    white: '1px solid #ffffff',
    orange: '1px solid #f77f1c',
    orangeTransparent: '1px solid rgba(247, 127, 28, 0.5)',
    grey300: '1px solid #9c9c9c',
  },
} as const

export const device = {
  miniPhone: 380,
  phone: 650,
  tabletPortrait: 900,
  tabletLandscape: 1250,
  smallNotebook: 1400,
  notebook: 1600,
  largeNotebook: 1920,
  monitor: 1921,
} as const

export const breakpoint = {
  miniPhone: `@media (max-width: ${device.miniPhone}px)`,
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px)`,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px)`,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  notebook: `@media (max-width: ${device.notebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px)`,
} as const

export const hoverStyles = css`
  transition: 0.1s;
  &:hover {
    transform: scale(1.05);
    box-shadow: ${styles.colors.grey900} 0px 5px 15px;
  }
`

export const smTextStyles = css`
  font-size: ${styles.fontSize.sm};
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.xs};
  }
`

export const xsTextStyles = css`
  font-size: ${styles.fontSize.xs};
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.xxs};
  }
`
