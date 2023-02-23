import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPiecePrev from "../components/ArtPiecePrev/ArtPiecePrev";
import Button from "../components/Button/Button";
import Color from '../components/Color/Color';

export default function Slug({ resize, data, handleToggleFavorite, pieces, router }) {
  
  if(pieces){
      
      const { slug } = router.query;
      
      const piece = pieces.find((pieceAlt) => slug === pieceAlt.slug);
      console.log(piece)
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
          isSlug = {true}
        />
       
        <div>
          {
            piece.colors.map((color) => {
              return (
                <Color color = {color}></Color>
              )
            })
          }
        </div>
       
      </>
    )} else {
      return( <h1>Is Loading...</h1>);
}
    }

 
