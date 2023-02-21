import Error from '../components/Error/Error';
import Image from "next/image";
import useSWR from "swr";

export default function HomePage({ random, resize }) {

  
  

  

  const URL = `https://example-apis.vercel.app/api/art`;

  const { data, error, isLoading } = useSWR(URL);

  if (!data) {return (<Error error = {'the Api is being Fetched'}/>)}
   
  if(data) {
    
    let randomNumber = random(data.length);

    let art = data[randomNumber];

    const {artist, name, imageSource, dimensions: {width, height}} = art;
    
    return (
      <div>
        <h1>{name}</h1>
        <Image width={resize(width)} height={resize(height)} src={imageSource} alt={`This is ${name} from ${artist}`}></Image>
      </div>
    );

   }

    
    
  

  if (error) return <h1>{error}</h1>;
  if (isLoading) return <h1>{"isLoading..."}</h1>;

}
