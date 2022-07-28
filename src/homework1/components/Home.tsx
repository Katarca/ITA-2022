import { BodyTextGrey } from './typo/BodyText'
import { ExternalLink } from 'react-external-link'
import { Img } from './Img'
import { MainHeading } from './typo/Heading'
import { breakpoint, colors } from '../../helpers/consts'
import { centralPart } from './StyledPage'
import React from 'react'
import angularLogo from './Images/angular.svg'
import jsImg from './Images/js.png'
import nodeLogo from './Images/nodejs.png'
import reactLogo from './Images/react.png'
import styled from 'styled-components'
import svelteLogo from './Images/svelte.svg'
import typescriptLogo from './Images/typescript.png'

export const Home = () => {
  return (
    <HomeSection id='home'>
      <NavGap />
      <HomeContainer>
        <HomeTextContainer>
          <MainHeading>JavaScript</MainHeading>
          <BodyTextGrey>
            JavaScript is a scripting language that enables you to create dynamically updating
            content, control multimedia, animate images, and pretty much everything else.(Okay, not
            everything, but it is amazing what you can achieve with a few lines of JavaScript code.)
          </BodyTextGrey>
        </HomeTextContainer>
        <Img src={jsImg} className='home-img' />
      </HomeContainer>
      <LogoContainer>
        <ExternalLink href='https://reactjs.org/'>
          <Img src={reactLogo} className='logo-img' />
        </ExternalLink>
        <ExternalLink href='https://nodejs.org/en/'>
          <Img src={nodeLogo} className='logo-img' />
        </ExternalLink>
        <ExternalLink href='https://www.typescriptlang.org/'>
          <Img src={typescriptLogo} className='logo-img' />
        </ExternalLink>
        <ExternalLink href='https://angular.io/'>
          <Img src={angularLogo} className='logo-img' />
        </ExternalLink>
        <ExternalLink href='https://svelte.dev/'>
          <Img src={svelteLogo} className='logo-img' />
        </ExternalLink>
      </LogoContainer>
    </HomeSection>
  )
}

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: ${colors.black};
  color: ${colors.white};
  flex-direction: column;
  justify-content: space-between;
`

const HomeContainer = styled.div`
  ${centralPart}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 50px 0;
  ${breakpoint.phone} {
    flex-direction: column;
    gap: 20px;
  }
`

const HomeTextContainer = styled.div`
  padding-right: 50px;
  ${breakpoint.phone} {
    width: 100%;
    padding-right: unset;
    text-align: center;
  }
`

const LogoContainer = styled.div`
  ${centralPart}
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  ${breakpoint.phone} {
    justify-content: space-between;
  }
`
const NavGap = styled.div`
  height: 120px;
`
