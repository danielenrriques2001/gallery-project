import React from 'react'

const Color = ({color}) => {
  return (
    <div style={{backgroundColor: `${color}`}} >
        <p>{color}</p>
    </div>
  )
}

export default Color;

