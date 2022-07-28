import { BodyTextGrey, BodyTextWhite } from './typo/BodyText'
import { Heading } from './typo/Heading'
import { TextContainer } from './StyledPage'
import { colors } from '../../helpers/theme'
import React from 'react'
import styled from 'styled-components'

export const History = () => {
  return (
    <HistorySection id='history'>
      <TextContainer>
        <Heading>History</Heading>
        <BodyTextWhite>
          JavaScript was created at Netscape Communications by Brendan Eich in 1995. Netscape and
          Eich designed JavaScript as a scripting language for use with the company&apos;s flagship
          web browser, Netscape Navigator. Initially known as LiveScript, Netscape changed the name
          to JavaScript so they could position it as a companion for the Java language, a product of
          their partner, Sun Microsystems. Apart from some superficial syntactic similarities,
          though, JavaScript is in no way related to the Java programming language.
        </BodyTextWhite>
        <BodyTextGrey>
          After its release, more and more browsers started adding JavaScript support. Still, for
          much of its history JavaScript was not regarded as a serious programming language. Its
          earliest releases suffered from notable performance and security issues, but developers
          had no alternatives. If they wanted to run programs in the browser, they had to use
          JavaScript.
        </BodyTextGrey>
        <BodyTextGrey>
          In 2008, the creation of Google&apos;s open-source Chrome V8, a high-performance
          JavaScript engine, provided a crucial turning point for JavaScript. The subsequent
          proliferation of fast JavaScript engines made it possible for developers to build
          sophisticated browser-based applications with performance that competed with desktop and
          mobile applications.
        </BodyTextGrey>
        <BodyTextGrey>
          Soon after, Ryan Dahl released an open-source, cross-platform environment called Node.js.
          It provided a way to run JavaScript code from outside a browser. It freed JavaScript from
          the browser&apos;s confines and led directly to JavaScript&apos;s current popularity.
          Today, you can use JavaScript to write all kinds of applications, including browser,
          server, mobile, and desktop applications. Most major online companies today, including
          Facebook, Twitter, Netflix, and Google, all use JavaScript in their products.
        </BodyTextGrey>
      </TextContainer>
    </HistorySection>
  )
}

export const HistorySection = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 120px 0 50px 0;
`
