import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Slug({ resize }) {
  const URL = `https://example-apis.vercel.app/api/art`;
  const { data, error, isLoading } = useSWR(URL);

  const router = useRouter();
  const { slug } = router.query;
  const piece = data.find((pieceAlt) => slug === pieceAlt.slug);

  let isFavourite = false;

  function handleToggleFavourite(slug) {
    if (data.find((pieceAlt) => slug === pieceAlt.slug)) {
      console.log("toogle works");
      isFavourite = !isFavourite;
      console.log(isFavourite);
    }
  }

  if (piece)
    return (
      <>
        <button
          alt="favourite"
          onClick={() => {
            handleToggleFavourite(slug);
          }}
        >
          *
        </button>
        <Image
          onClick={() => router.push(`/gallery`)}
          width={resize(piece.dimensions.width)}
          height={resize(piece.dimensions.height)}
          src={piece.imageSource}
          alt={`This is ${piece.name} from ${piece.artist}`}
        ></Image>
        <div>
          <h3>{`${piece.name}`}</h3>
          <h4>{`${piece.artist}`}</h4>
          <h5>{`${piece.year}`}</h5>
          <h5>{`${piece.genre}`}</h5>
        </div>
      </>
    );

  if (isLoading) return <h1>Is Loading...</h1>;
}
