import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import Navigator from "../components/Navigator/Navigator";

const fetcher = async (url) => {
  
  const res = await fetch(url)

  if(!res.ok) {
    const error = new Error('There is a error, more details');

    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

const resizeImage = size =>  size / 4;

const random = (number) => Math.floor(Math.random() * (number + 1));

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component 
        {...pageProps} 
        random={random}
        resize = {resizeImage} />
        <Navigator />
      </SWRConfig>
    </>
  );
}
