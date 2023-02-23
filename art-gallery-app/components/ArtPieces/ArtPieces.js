import React from 'react'
import ArtPiecePrev from '../ArtPiecePrev/ArtPiecePrev';
import styled from "styled-components";
import {SpotlightTitle} from '../styles';

const ArtPieces = ({pieces, handleToggleFavorite}) => {
  console.log('art pieces')
    return (

      <>  
    
        <h1>Our gallery</h1>  
        <PiecesList>
          {
            pieces.map((piece, id) => { 
              return (
                <ArtPiecePrev
                  key={id}
                  source = {piece.imageSource}
                  artist = {piece.artist}
                  width = {piece.dimensions.width} 
                  height = {piece.dimensions.height}
                  title = {piece.name}
                  slug = {piece.slug}
                  handleToggleFavorite = {handleToggleFavorite}
                  onClick ={() => router.push(`${piece.slug}`)}
                />
              )
            })
          }

        </PiecesList>
      </>
    )
}


const PiecesList = styled.div`

  display: grid;
  grid-template-columns: auto auto auto;

`;

export default ArtPieces;