import React from 'react'
import Image from 'next/image';
import { resizeImage } from '../utils/utils';
import Button from '../Button/Button';
import {SpotlightTitle, SpotLightTitleArtist, SpotLightTitlePiece} from '../styles';
import styled from "styled-components";

const ArtPiecePrev = ({title, artist, source, width, height, onClick, slug, handleToggleFavorite, isSlug}) => {
  return (

    <div>
        <Title>{title}</Title>
        <SpotLightTitleArtist>{artist}</SpotLightTitleArtist>

      <div>
      <Image
            src = {source}
            alt = {`This ${title} is a creation of: ${artist}`}
            width = {resizeImage(width)}
            height = {resizeImage(height)}
        />
        <Button
          name = {`${isSlug ? 'Back to Gallery' : 'Read More'}`} 
          onClick = {onClick}
          />
        <Button 
          name={'I like ❤️'}
          onClick = {() => {handleToggleFavorite(slug)}}
          />
      </div>
       
    </div>
   
  )
}

export default ArtPiecePrev;


const Title = styled(SpotLightTitlePiece)`

color: gray;
font-size: 25px;

`;


