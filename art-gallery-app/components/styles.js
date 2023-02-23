import styled from "styled-components";


export const StyledSpotLight = styled.div`
  width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;

`;

export const SpotlightTitle = styled.h2`

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 100px;
  transition:  all ease-in-out .1s;
  margin: 0;
  padding: 0;

  &:hover {
    border-bottom: 10px red solid;
    cursor: pointer;
    animation: 2s linear infinite;
  }
`;

export const SpotlightInfo = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin: 15px;
  border-radius: 45px;
  padding: 15px;

`;

export const SpotLightTitlePiece = styled.h3`
  margin: 0 auto;
  font-size: 45px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 200;
  text-align: center;
`;

export const SpotLightTitleArtist = styled.h3`
text-align: center;
font-weight: 400;
letter-spacing: 15px;
`;

export const ButtonC = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props => props.fontSize ? css`
          font-size: props.fontSize;             
`: ''}
`