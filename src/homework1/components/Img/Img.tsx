import { StyledImg } from './Styles/StyledImg'
import React from 'react'

interface ImgProps {
  src: string
}

const Img = ({ src }: ImgProps) => {
  return <StyledImg src={src} />
}

export default Img
