import React from "react";
import Image from "next/image";
import Button from '../components/Button/Button';
import ArtPieces from "../components/ArtPieces/ArtPieces";
import { Loading } from "../components/utils/utils";

const gallery = ({ resize, pieces, handleToggleFavorite, router }) => {

    if(pieces) {
      return (
        <>
          <ArtPieces pieces = {pieces} handleToggleFavorite = {handleToggleFavorite} router={router}/>
        </>
      )
    } else {
          return (
            <Loading 
            type={'spin'} 
            color={'#000000'}
            width={550}
            height={550}
            />
          )
        }
     
    }
   


export default gallery;

