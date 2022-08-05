export const styles = {
  colors: {
    white: '#ffffff',
    yellow300: '#f7df1c',
    orange300: '#f77f1c',
    grey300: '#9c9c9c',
    grey500: '#2f363e',
    grey900: '#1b1b1b',
    blue900: '#04001C',
    black: '#000000',
  },
  spacing: {
    xs: '10px',
    sm: '20px',
    md: '50px',
    lg: '70px',
    xl: '120px',
  },
  fontSize: {
    xs: '1.4rem',
    sm: '2rem',
    md: '3rem',
    lg: '4rem',
    xl: '8rem',
  },
}

// export const colors = {
//   white: '#ffffff',
//   yellow300: '#f7df1c',
//   orange300: '#f77f1c',
//   grey300: '#9c9c9c',
//   grey500: '#2f363e',
//   grey900: '#1b1b1b',
//   blue900: '#04001C',
//   black: '#000000',
// }

// export const space = {
//   extraSmall: '10px',
//   small: '20px',
//   medium: '50px',
//   big: '70px',
//   extraBig: '120px',
// }

// export const fontSize = {
//   small: '1.4rem',
//   medium: '2rem',
//   big: '4rem',
//   extraBig: '8rem',
// }

export const device = {
  miniPhone: 350,
  phone: 650,
  tabletPortrait: 900,
  tabletLandscape: 1250,
  smallNotebook: 1400,
  notebook: 1600,
  largeNotebook: 1920,
  monitor: 1921,
}

export const breakpoint = {
  miniPhone: `@media (max-width: ${device.miniPhone}px)`,
  phone: `@media (max-width: ${device.phone}px)`,
  tabletPortrait: `@media (max-width: ${device.tabletPortrait}px)`,
  tabletLandscape: `@media (max-width: ${device.tabletLandscape}px)`,
  smallNotebook: `@media (max-width: ${device.smallNotebook}px)`,
  notebook: `@media (max-width: ${device.notebook}px)`,
  largeNotebook: `@media (max-width: ${device.largeNotebook}px)`,
  monitor: `@media (min-width: ${device.monitor}px)`,
}
