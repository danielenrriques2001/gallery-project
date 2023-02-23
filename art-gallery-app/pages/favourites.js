import React, {useEffect} from 'react'
import Image from 'next/image';
import { Loading } from '../components/utils/utils'; 
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
        return (<h1>Ey jude...</h1>)
      }
      
      return (
        <>
          <h2>My Favorites</h2>
          {favorites.map((piece, id) => {
              return (
                <>
                   <ArtPiecePrev
                      onClick={() => router.push(`/gallery`)}
                      title = {piece.title}
                      artist = {piece.artist}
                      width={resize(piece.dimensions.width)}
                      height={resize(piece.dimensions.height)}
                      source={piece.imageSource}
                      handleToggleFavorite = {handleToggleFavorite}
        />
                </>
              );
            })}
        </>
      )

    }
  }

export default favourites;