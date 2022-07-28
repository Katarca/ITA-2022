import React from 'react'
import styled from 'styled-components'

interface ImgProps {
  src: string
  className?: string
}

export const Img = ({ src, className }: ImgProps) => {
  return <StyledImg src={src} className={className} />
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
