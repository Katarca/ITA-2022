import { Link } from 'react-router-dom'
import { P_BodyText } from './BodyText'
import { breakpoint, hoverStyles, styles } from '../helpers/theme'
import { ReactComponent as githubLogo } from '../images/github.svg'
import { ReactComponent as nodeLogo } from '../images/nodejs.svg'
import { ReactComponent as reactLogo } from '../images/react.svg'
import { ReactComponent as reduxLogo } from '../images/redux.svg'
import { ReactComponent as scLogo } from '../images/styled-components.svg'
import { ReactComponent as tsLogo } from '../images/typescript.svg'
import React from 'react'
import styled, { css } from 'styled-components'

type CardProps = {
  text: string
  to: string
  src: string
  githubUrl: string
  redux?: boolean
  node?: boolean
}

export const Card = (props: CardProps) => {
  return (
    <Div_ProjectCard>
      <Div_CardHeader>
        <P_CardText>{props.text}</P_CardText>
        <a href={props.githubUrl} target='_blank' rel='noreferrer'>
          <GithubLogo />
        </a>
      </Div_CardHeader>
      <Link_CardLink to={props.to}>
        <Img_ProjectImg src={props.src} />
      </Link_CardLink>
      <Div_LogoContainer>
        <ReactLogo />
        <TypescriptLogo />
        <ScLogo />
        {props.redux && <ReduxLogo />}
        {props.node && <NodeLogo />}
      </Div_LogoContainer>
    </Div_ProjectCard>
  )
}

const Div_ProjectCard = styled.div`
  width: 350px;
  border-radius: 8px;
  border: 1px solid ${styles.colors.orangeTransparent};
  justify-self: center;
  position: relative;
  ${hoverStyles}
  ${breakpoint.phone} {
    width: 250px;
  }
`

const Img_ProjectImg = styled.img`
  width: 100%;
  border-radius: 8px;
  filter: grayscale(60%);
  opacity: 0.4;
`

const Link_CardLink = styled(Link)`
  text-decoration: none;
`

const P_CardText = styled(P_BodyText)`
  font-size: ${styles.fontSize.sm};
  text-align: center;
`
const Div_CardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const GithubLogo = styled(githubLogo)`
  width: 40px;
`
const Div_LogoContainer = styled.div`
  display: flex;
  padding: ${styles.spacing.xs};
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`

const logoStyles = css`
  width: 30px;
  height: 30px;
`
const NodeLogo = styled(nodeLogo)`
  ${logoStyles}
`

const ReactLogo = styled(reactLogo)`
  ${logoStyles}
`

const ReduxLogo = styled(reduxLogo)`
  ${logoStyles}
`

const TypescriptLogo = styled(tsLogo)`
  ${logoStyles}
`

const ScLogo = styled(scLogo)`
  ${logoStyles}
  fill: ${styles.colors.pinkStyledComponents};
`
