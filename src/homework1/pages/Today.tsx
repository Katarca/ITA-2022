import { Div_TextContainer } from '../components/TextContainer'
import { H_Heading } from '../components/Heading'
import { P_BodyTextGrey, P_BodyTextWhite } from '../components/BodyText'
import { RouterLink } from '../../components/RouterLink'
import { styles } from '../../helpers/theme'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Today = () => {
  return (
    <TodaySection id='today'>
      <Div_TextContainer>
        <H_Heading>JS Today</H_Heading>
        <P_BodyTextWhite>
          JavaScript has come a long way since its original implementation: it took a mere 10 days
          to write it. The JavaScript standard, proposed for the first time as ECMAScript 1 in 1997,
          is, as of late 2018, in its 9th iteration (ES 2018). The differences between the
          specifications described in ECMAScript 1 and ES 2018 are immense: they seem to describe
          different languages. In the intervening years, JavaScript has undergone massive changes.
          Not everyone agreed with every change, but, taken together, they made JavaScript a more
          robust, secure, and expressive language.
        </P_BodyTextWhite>
        <P_BodyTextGrey>
          The JavaScript community of today is arguably the most active community in programming. It
          sometimes seems that every week sees releases of new tools, frameworks, and libraries.
          There are preprocessors and transpilers of all sorts available, ranging from programs that
          translate modern JavaScript programs so older JavaScript engines can run them, to
          compiling entirely new languages with JavaScript. The JavaScript standard itself is a
          continuously evolving document, with improvements introduced at a rapid rate. JavaScript
          engines incorporate the changes almost as rapidly. New operating systems under development
          (e.g., Google&apos;s Fuchsia) are adding support for the development of native
          applications in JavaScript. All of this means that JavaScript has an exciting future.
          It&apos;s a great time to learn JavaScript!
        </P_BodyTextGrey>
      </Div_TextContainer>
      <ReturnContainer>
        <TextWhite>Return home</TextWhite>
        <RouterLink to={urls.homeUrl}>
          <ArrowIcon xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path d='M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z' />
          </ArrowIcon>
        </RouterLink>
      </ReturnContainer>
    </TodaySection>
  )
}

const TodaySection = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: ${styles.colors.grey500};
  color: ${styles.colors.white};
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: ${styles.spacing.xl} 0 ${styles.spacing.md} 0;
`

const ArrowIcon = styled.svg`
  fill: ${styles.colors.white};
  transform: rotate(180deg);
`

const TextWhite = styled.span`
  font-size: ${styles.fontSize.xs};
  color: ${styles.colors.white};
`

const ReturnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${styles.spacing.xs};
  padding: ${styles.spacing.sm};
`
