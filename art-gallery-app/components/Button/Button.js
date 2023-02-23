import React from 'react'
import styled from "styled-components";


const Button = ({name, onClick}) => {
  return (
    <Button
    onClick={onClick}
    
    >{name}</Button>
  )
}

export default Button
