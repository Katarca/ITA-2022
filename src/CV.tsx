import { H_Heading, H_SubHeading } from './components/Heading'
import { P_BodyText, P_BodyTextXs } from './components/BodyText'
import { breakpoint, smTextStyles, styles } from './helpers/theme'
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
      <P_CvText>CSS, Sass, Styled Components</P_CvText>
      <P_CvText>HTML, Git</P_CvText>
      <H_CvSubHeading>Education</H_CvSubHeading>
      <Div_CvBox>
        <P_CvTextBold>Mendel university Brno</P_CvTextBold>
        <P_CvTextXs>Master&apos;s degree, Faculty of AgriSciences</P_CvTextXs>
        <P_CvTextXs>2016-2018</P_CvTextXs>
      </Div_CvBox>
      <P_CvTextBold>Slovak university of agriculture, Nitra</P_CvTextBold>
      <P_CvTextXs>Bachelor&apos;s degree, Faculty of Agrobiology and Food Resources</P_CvTextXs>
      <P_CvTextXs>2013-2016</P_CvTextXs>
      <H_CvSubHeadingWhite>Courses</H_CvSubHeadingWhite>
      <Div_CvBox>
        <P_CvTextBold>SmartBrains IT absolvent</P_CvTextBold>
        <P_CvTextXs>6/2022 - 9/2022</P_CvTextXs>
        <P_CvTextXs>Frontend development using React and Typescript</P_CvTextXs>
      </Div_CvBox>
      <Div_CvBox>
        <P_CvTextBold>Modern JavaScript, Udemy</P_CvTextBold>
        <P_CvTextXs>2021</P_CvTextXs>
      </Div_CvBox>
      <P_CvTextBold>Advanced CSS and Sass, Udemy</P_CvTextBold>
      <P_CvTextXs>2021</P_CvTextXs>
      <H_CvSubHeading>Employment history</H_CvSubHeading>
      <P_CvTextBold>Research worker, Mendel university Brno</P_CvTextBold>
      <P_CvTextXs>9/2019 - 6/2022</P_CvTextXs>
      <H_CvSubHeading>Language Skills</H_CvSubHeading>
      <P_CvText>Slovak - native language</P_CvText>
      <P_CvText>English - level B2</P_CvText>
      <P_CvText>Russian - level A1</P_CvText>
    </Div_CvContainer>
  )
}

const Div_CvContainer = styled.div`
  width: 70vw;
  padding: ${styles.spacing.md} ${styles.spacing.sm};
  margin: auto;
  ${breakpoint.phone} {
    width: 100vw;
  }
`

const H_CvHeading = styled(H_Heading)`
  text-align: left;
  color: ${styles.colors.white};
  padding: ${styles.spacing.sm} ${styles.spacing.xs};
  ${breakpoint.phone} {
    font-size: ${styles.fontSize.md};
  }
`

const H_CvSubHeading = styled(H_SubHeading)`
  text-align: left;
  padding: ${styles.spacing.sm} ${styles.spacing.xs};
  color: ${styles.colors.grey300};
  font-weight: bold;
`

const H_CvSubHeadingWhite = styled(H_SubHeading)`
  text-align: left;
  padding: ${styles.spacing.xs};
  color: ${styles.colors.white};
  font-weight: bold;
`

const P_CvText = styled(P_BodyText)`
  padding: ${styles.spacing.xxs} ${styles.spacing.sm};
`
const A_CvLink = styled.a`
  ${smTextStyles}
  color: ${styles.colors.orangeTransparent};
  padding: ${styles.spacing.xs} ${styles.spacing.sm};
  text-decoration: none;
`
const P_CvTextBold = styled(P_CvText)`
  font-weight: bold;
`
const P_CvTextXs = styled(P_BodyTextXs)`
  padding: 0 ${styles.spacing.sm};
  line-height: 1.5;
`
const Div_CvBox = styled.div`
  padding-bottom: ${styles.spacing.sm};
`
