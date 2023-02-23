import ReactLoading from 'react-loading';


export const fetcher = url => fetch(url).then(r => r.json())


export const resizeImage = size => size / 4; 

export const random = (maxNumber) => {
   return Math.floor((Math.random() * maxNumber) * 1)
}

export const URL = `https://example-apis.vercel.app/api/art`;


export const Loading = ({ type, color, height, width}) => (
   <ReactLoading type={type} color={color} height={height} width={height} />
);