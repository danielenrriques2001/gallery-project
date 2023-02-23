import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Navigator from "../components/Navigator/Navigator";
import { useState, useEffect } from "react";
import { useImmer } from "use-immer";
import { resizeImage, random, fetcher, URL } from "../components/utils/utils";
import {useImmerLocalStorageState} from '../components/utils/localstorageimmer';
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {


  
 const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState("art-pieces-info",{ defaultValue: [] });

 useEffect(() => {localStorage.setItem('fav_art',JSON.stringify(artPiecesInfo)) }, [artPiecesInfo])

 const { data, error, isLoading } = useSWR(URL, fetcher);

 const router = useRouter();

 const pieces = data; 

  if (error) return <h1>{error}</h1>;

  function handleToggleFavorite(slug) {

    updateArtPiecesInfo((draft) => {
      const artPieceLike = draft.find((piece) => piece.slug === slug);
     
      if (!artPieceLike) {
        return [
          ...draft,
          {
            slug,
            isFavorite: true,
            comments: [],
          },
        ];
      } else {
        artPieceLike.isFavorite = !artPieceLike.isFavorite;
        return draft;
      }
    });

   
  }
 
  return (
    <>
      <GlobalStyle />
      <SWRConfig>
        <Component 
        {...pageProps} 
        random={random}
        resize = {resizeImage} 
        pieces = {pieces}
        isLoading =  {isLoading}
        handleToggleFavorite  = {handleToggleFavorite}
        artPiecesInfo = {artPiecesInfo}
        router = {router}
        />
        <Navigator />
      </SWRConfig>
    </>
  );
  }
