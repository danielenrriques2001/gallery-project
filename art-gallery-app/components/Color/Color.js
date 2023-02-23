import React from 'react'
import styled from "styled-components";

const Color = ({color}) => {
  return (
    <StyledColor style={{backgroundColor: `${color}`}} >
        <p>{color}</p>
    </StyledColor>
  )
}

export default Color;


const StyledColor = styled.div`

  border-radius: 45px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

`;