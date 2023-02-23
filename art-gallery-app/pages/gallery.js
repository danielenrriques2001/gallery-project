import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Error from "../components/Error/Error";
import { useRouter } from "next/router";
import { Loading } from '../components/utils/utils'; 
import Button from '../components/Button/Button';
import ArtPieces from "../components/ArtPieces/ArtPieces";
const gallery = ({ resize, pieces, handleToggleFavorite, router }) => {

  
  
  if(pieces){
    return (
      <>
        <ArtPieces pieces = {pieces} router = {router} handleToggleFavorite = {handleToggleFavorite}/>
      </>

    )} else { 
        return (
          <Loading 
          type={'spin'} 
          color={'#000000'}
          width={550}
          height={550}
          />
        )
      }
      

  
};

export default gallery;
