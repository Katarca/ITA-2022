import { Div_TextContainer } from '../components/TextContainer'
import { H_Heading } from '../components/Heading'
import { P_BodyTextGrey, P_BodyTextWhite } from '../components/BodyText'
import { styles } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const History = () => {
  return (
    <HistorySection id='history'>
      <Div_TextContainer>
        <H_Heading>History</H_Heading>
        <P_BodyTextWhite>
          JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape and
          Eich designed JavaScript as a scripting language for use with the company&apos;s flagship
          web browser, Netscape Navigator. Initially known as LiveScript, Netscape changed the name
          to JavaScript so they could position it as a companion for the Java language, a product of
          their partner, Sun Microsystems. Apart from some superficial syntactic similarities,
          though, JavaScript is in no way related to the Java programming language.
        </P_BodyTextWhite>
        <P_BodyTextGrey>
          After its release, more and more browsers started adding JavaScript support. Still, for
          much of its history JavaScript was not regarded as a serious programming language. Its
          earliest releases suffered from notable performance and security issues, but developers
          had no alternatives. If they wanted to run programs in the browser, they had to use
          JavaScript.
        </P_BodyTextGrey>
        <P_BodyTextGrey>
          In 2008, the creation of Google&apos;s open-source Chrome V8, a high-performance
          JavaScript engine, provided a crucial turning point for JavaScript. The subsequent
          proliferation of fast JavaScript engines made it possible for developers to build
          sophisticated browser-based applications with performance that competed with desktop and
          mobile applications.
        </P_BodyTextGrey>
        <P_BodyTextGrey>
          Soon after, Ryan Dahl released an open-source, cross-platform environment called Node.js.
          It provided a way to run JavaScript code from outside a browser. It freed JavaScript from
          the browser&apos;s confines and led directly to JavaScript&apos;s current popularity.
          Today, you can use JavaScript to write all kinds of applications, including browser,
          server, mobile, and desktop applications. Most major online companies today, including
          Facebook, Twitter, Netflix, and Google, all use JavaScript in their products.
        </P_BodyTextGrey>
      </Div_TextContainer>
    </HistorySection>
  )
}

export const HistorySection = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: ${styles.colors.black};
  color: ${styles.colors.white};
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: ${styles.spacing.xl} 0 ${styles.spacing.md} 0;
`
