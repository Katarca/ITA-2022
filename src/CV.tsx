import { H_Heading, H_SubHeading } from './components/Heading'
import { P_BodyText } from './components/BodyText'
import { styles } from './helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const CV = () => {
  return (
    <Div_CvContainer>
      <H_CvHeading>Katarína Soušková</H_CvHeading>
      <P_CvText>Software developer</P_CvText>
      <H_CvSubHeading>Contact</H_CvSubHeading>
      <A_CvLink href='mailto: souskovakatarina@gmail.com'>souskovakatarina@gmail.com</A_CvLink>
      <P_CvText>+ 420 607 678 694</P_CvText>
      <P_CvText>Brno, Czech Republic</P_CvText>
      <A_CvLink href='https://github.com/Katarca' target='_blank' rel='noreferrer'>
        Github
      </A_CvLink>
      <H_CvSubHeading>Professional Skills</H_CvSubHeading>
      <P_CvText>Javascript, React.js, Typescript, Node.js</P_CvText>
      <P_CvText>HTML, CSS, Sass, Styled Components</P_CvText>
      <P_CvText>Git</P_CvText>
    </Div_CvContainer>
  )
}

const Div_CvContainer = styled.div`
  width: 70vw;
  padding: ${styles.spacing.md} ${styles.spacing.sm};
  margin: auto;
`

const H_CvHeading = styled(H_Heading)`
  text-align: left;
  color: ${styles.colors.white};
  padding: ${styles.spacing.sm} ${styles.spacing.xs};
`

const H_CvSubHeading = styled(H_SubHeading)`
  text-align: left;
  padding: ${styles.spacing.sm} ${styles.spacing.xs};
  color: ${styles.colors.grey300};
  font-weight: bold;
`

const P_CvText = styled(P_BodyText)`
  padding: ${styles.spacing.xs};
`
const A_CvLink = styled.a`
  font-size: ${styles.fontSize.sm};
  color: ${styles.colors.orangeTransparent};
  padding: ${styles.spacing.xs};
  text-decoration: none;
`
