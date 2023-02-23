import React from 'react';
import Image from 'next/image';
import styled from "styled-components";
import { resizeImage } from '../utils/utils';
import Animated from '../animate/Animated';
import {SpotLightTitleArtist, SpotLightTitlePiece, SpotlightInfo, StyledSpotLight, SpotlightTitle} from '../styles'
const Spotlight = ({ width, height, source, title, artist}) => {


    
  return (
    <StyledSpotLight>
        <SpotlightTitle>Spotlight</SpotlightTitle>
      
        <SpotlightInfo>

          <SpotLightTitlePiece>{title}</SpotLightTitlePiece>
          <SpotLightTitleArtist>{artist}</SpotLightTitleArtist>
        <Image
            src = {`${source}`}
            alt = {`This ${title} is a creation of: ${artist}`}
            width = {resizeImage(width - 45)}
            height = {resizeImage(height - 45)}
        />

        </SpotlightInfo>
        

    </StyledSpotLight>
  )
}








export default Spotlight;