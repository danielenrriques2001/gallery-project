import Error from '../components/Error/Error';
import Image from "next/image";
import useSWR from "swr";
import { Loading } from '../components/utils/utils'; 
import Spotlight from '../components/Spotlight/Spotlight';
import styled from "styled-components";

export default function HomePage({ random, resize, pieces, isLoading }) {



    if(pieces){
      const art = pieces[random(pieces.length)];

      return (
          <Spotlight
            source = {art.imageSource}
            artist = {art.artist}
            width = {art.dimensions.width} 
            height = {art.dimensions.height}
            title = {art.name}
          />
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
 }
  
   

   

    
    
  

  


