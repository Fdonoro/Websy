import React from 'react'
import "./style.css"

const Contenedor = (props) => {
  return (
    <div className='contenedor'>{props.children}</div>
  )
}

export default Contenedor