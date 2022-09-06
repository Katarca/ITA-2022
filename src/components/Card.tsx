import { Link } from 'react-router-dom'
import { P_BodyText } from './BodyText'
import { breakpoint, styles } from '../helpers/theme'
import { ReactComponent as githubLogo } from '../images/github.svg'
import React from 'react'
import styled from 'styled-components'

type CardProps = {
  text: string
  to: string
  src: string
  githubUrl: string
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
    </Div_ProjectCard>
  )
}

const Div_ProjectCard = styled.div`
  width: 350px;
  border-radius: 8px;
  border: 1px solid ${styles.colors.orangeTransparent};
  justify-self: center;
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
