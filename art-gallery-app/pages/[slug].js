import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import ArtPiecePrev from "../components/ArtPiecePrev/ArtPiecePrev";
import Button from "../components/Button/Button";
import Color from '../components/Color/Color';
import styled from "styled-components";


export default function Slug({ resize, data, handleToggleFavorite, pieces, router }) {
  
  if(pieces){
      
      const { slug } = router.query;
      
      const piece = pieces.find((pieceAlt) => slug === pieceAlt.slug);

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
          isSlug = {true}
        />
       
        <ColorWraper>
          {
            piece.colors.map((color) => {
              return (
                <Color color = {color}></Color>
              )
            })
          }
        </ColorWraper>
       
      </Wrapper>
    )} else {
      return( <h1>Is Loading...</h1>);
}
    }

 
  const ColorWraper = styled.div`
  
  display: flex;
  gap: 15px;
  justify-content: center;
  `;

  const Wrapper = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  `;