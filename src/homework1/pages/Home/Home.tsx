import { ExternalLink } from 'react-external-link'
import { P_BodyTextGrey } from '../../components/BodyText'
import { breakpoint, colors, fontSize, space } from '../../../helpers/theme'
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
          <P_BodyTextGrey>
            JavaScript is a scripting language that enables you to create dynamically updating
            content, control multimedia, animate images, and pretty much everything else.(Okay, not
            everything, but it is amazing what you can achieve with a few lines of JavaScript code.)
          </P_BodyTextGrey>
        </HomeTextContainer>
        <HomeImg src={jsImg} />
      </HomeContainer>
      <LogoContainer>
        <ExternalLink href='https://reactjs.org/'>
          <LogoImg src={reactLogo} />
        </ExternalLink>
        <ExternalLink href='https://nodejs.org/en/'>
          <LogoImg src={nodeLogo} />
        </ExternalLink>
        <ExternalLink href='https://www.typescriptlang.org/'>
          <LogoImg src={typescriptLogo} />
        </ExternalLink>
        <ExternalLink href='https://angular.io/'>
          <LogoImg src={angularLogo} />
        </ExternalLink>
        <ExternalLink href='https://svelte.dev/'>
          <LogoImg src={svelteLogo} />
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
const NavGap = styled.div`
  height: ${space.extraBig};
`

const HomeContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${space.medium} 0 ${space.medium} 0;
  ${breakpoint.phone} {
    width: 80%;
    flex-direction: column;
    gap: ${space.small};
  }
`
const HomeTextContainer = styled.div`
  padding-right: ${space.medium};
  ${breakpoint.phone} {
    width: 100%;
    padding-right: unset;
    text-align: center;
  }
`

const MainHeading = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: ${fontSize.big};
  padding-bottom: ${space.small};
`
const HomeImg = styled.img`
  width: 40%;
  max-width: 350px;
`

const LogoImg = styled.img`
  width: 35px;
  &:hover {
    transform: scale(1.2);
  }
`

const LogoContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-bottom: ${space.medium};
  display: flex;
  justify-content: space-evenly;
  ${breakpoint.phone} {
    width: 80%;
    justify-content: space-between;
  }
`
