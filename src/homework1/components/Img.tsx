import React from 'react'
import styled from 'styled-components'

type ImgProps = {
  src: string
  className?: string
}

export const Img = (props: ImgProps) => {
  return <StyledImg src={props.src} className={props.className} />
}

const StyledImg = styled.img`
  &.home-img {
    width: 40%;
    max-width: 350px;
  }
  &.logo-img {
    width: 35px;
    &:hover {
      transform: scale(1.2);
    }
  }
`
