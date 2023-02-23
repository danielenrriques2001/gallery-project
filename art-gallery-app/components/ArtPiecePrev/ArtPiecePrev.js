import React from 'react'
import Image from 'next/image';
import { resizeImage } from '../utils/utils';
import Button from '../Button/Button';
import {SpotlightTitle, SpotLightTitleArtist, SpotLightTitlePiece} from '../styles';
import styled from "styled-components";

const ArtPiecePrev = ({title, artist, source, width, height, onClick, slug, handleToggleFavorite, isSlug}) => {
  return (

    <Wrapper>
        <Title>{title}</Title>
        <SpotLightTitleArtist>{artist}</SpotLightTitleArtist>

      <Wrapper>
      <StyledImage
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
      </Wrapper>
       
    </Wrapper>
   
  )
}

export default ArtPiecePrev;


const Title = styled(SpotLightTitlePiece)`

color: gray;
font-size: 25px;
text-transform: uppercase;
text-align: center;

`;

const StyledImage = styled(Image)`

  border-radius: 45px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`

    margin-top: 15px;
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

