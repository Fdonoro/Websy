import React from 'react'
import "./style.css"

const Parrafo = (props) => {
  return (
    //para separar clases por espacio
    <p className={props.classes?.join(" ")} style={props.style}>{props.children}</p>
  )
}

export default Parrafo