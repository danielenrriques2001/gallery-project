import React from "react";
import useSWR from "swr";
import Image from "next/image";
import Error from "../components/Error/Error";
import { useRouter } from "next/router";

const gallery = ({ resize }) => {
  const URL = `https://example-apis.vercel.app/api/art`;

  const router = useRouter();
  console.log(router.query);

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
                onClick={() => router.push(`${piece.slug}`)}
                width={resize(piece.dimensions.width)}
                height={resize(piece.dimensions.height)}
                src={piece.imageSource}
                alt={`This is ${piece.name} from ${piece.artist}`}
              ></Image>
              <div>
                <h3>{`${piece.name}`}</h3>
                <h4>{`${piece.artist}`}</h4>
              </div>
            </>
          );
        })}
      </div>
    );
  }
};

export default gallery;
