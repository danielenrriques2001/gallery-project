import useSWR from 'swr';

export default function HomePage({random}) {

  const URL = `https://example-apis.vercel.app/api/art`;

  const { data, error, isLoading } = useSWR(URL);

  if(data) {
    let randomNumber = random(data.length);
    console.log(randomNumber)
  }
  



  if(error) return <h1>{error}</h1>
  if(isLoading) return <h1>{'isLoading...'}</h1>
  
  
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
