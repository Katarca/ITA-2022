import { BodyTextGrey } from '../typo/BodyText'
import { ExternalLink } from 'react-external-link'
import { HomeContainer, HomeTextContainer, LogoContainer, NavGap } from './Styles/StyledHome'
import { MainHeading } from '../typo/Heading'
import Img from '../Img/Img'
import React from 'react'
import Section from '../Section/Section'
import angularLogo from '../../assets/images/angular.svg'
import jsImg from '../../assets/images/js.png'
import nodeLogo from '../../assets/images/nodejs.png'
import reactLogo from '../../assets/images/react.png'
import svelteLogo from '../../assets/images/svelte.svg'
import typescriptLogo from '../../assets/images/typescript.png'

const Home = () => {
  return (
    <Section id='home' name='home' className='home-section'>
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
        <Img src={jsImg} />
      </HomeContainer>
      <LogoContainer>
        <ExternalLink href='https://reactjs.org/'>
          <Img src={reactLogo} />
        </ExternalLink>
        <ExternalLink href='https://nodejs.org/en/'>
          <Img src={nodeLogo} />
        </ExternalLink>
        <ExternalLink href='https://www.typescriptlang.org/'>
          <Img src={typescriptLogo} />
        </ExternalLink>
        <ExternalLink href='https://angular.io/'>
          <Img src={angularLogo} />
        </ExternalLink>
        <ExternalLink href='https://svelte.dev/'>
          <Img src={svelteLogo} />
        </ExternalLink>
      </LogoContainer>
    </Section>
  )
}

export default Home
