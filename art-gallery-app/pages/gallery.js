import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Error from "../components/Error/Error";

const gallery = ({ resize }) => {
  const URL = `https://example-apis.vercel.app/api/art`;

  const { data, error, isLoading } = useSWR(URL);

  if (!data) {
    return <Error error={"the Api is being Fetched"} />;
  }

  if (data) {
    return (
      <div>
        {data.map((piece) => {
         return (
           <>
             <Image
               width={resize(piece.dimensions.width)}
               height={resize(piece.dimensions.height)}
               src={piece.imageSource}
               alt={`This is ${piece.name} from ${piece.artist}`}
             ></Image>
             <div>
               <h4>{`${piece.name}`}</h4>
               <h3>{`${piece.artist}`}</h3>
             </div>
           </>
         );

        })}
       
      </div>
    );
  }
};

export default gallery;
