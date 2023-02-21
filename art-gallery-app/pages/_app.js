import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from 'swr';
import Navigator from "../components/Navigator/Navigator";

const fetcher = (url) => fetch(url).then(res => res.json())

const random = number => Math.floor(Math.random() * (number + 1));


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{fetcher}}>
        <Component 
        {...pageProps}
        random = {random} 
        />
        <Navigator/>
      </SWRConfig>
     
    </>
  );
}
