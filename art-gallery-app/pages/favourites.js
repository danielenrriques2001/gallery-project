import React, {useEffect} from 'react'
import Image from 'next/image';
import { Loading } from '../components/utils/utils'; 
import styled from "styled-components";

import ArtPiecePrev from '../components/ArtPiecePrev/ArtPiecePrev';
const favourites = ({artPiecesInfo, handleToggleFavorite, pieces, resize, router }) => {

  


  if(pieces === undefined) {

    return (
      <Loading 
      type={'spin'} 
      color={'#000000'}
      width={550}
      height={550}
      />
    )

    } else {


      const favorites = pieces.filter((piece) => {
        return artPiecesInfo.find(
          (info) => info.slug === piece.slug && info.isFavorite
        );
      });
     
      if(favorites.length < 1) {
        return (<Loading type={'spin'} 
        color={'#000000'}
        width={550}
        height={550}/>)
      }
      
      return (
        <>
          <Title>My Favorites</Title>
          {favorites.map((piece, id) => {
              return (
                <Wrapper>
                   <ArtPiecePrev
                      onClick={() => router.push(`/gallery`)}
                      title = {piece.title}
                      artist = {piece.artist}
                      width={resize(piece.dimensions.width)}
                      height={resize(piece.dimensions.height)}
                      source={piece.imageSource}
                      handleToggleFavorite = {handleToggleFavorite}
        />
                </Wrapper>
              );
            })}
        </>
      )

    }
  }

export default favourites;

const Wrapper = styled.div`
  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const Title = styled.h1`

color: gray;
font-size: 25px;
text-transform: uppercase;
text-align: center;

`;