import React from 'react'
import "./style.css"

const Titulo = (props) => {
  return (
    <h1 className={props.classes?.join(" ")} style={props.style}>{props.children}</h1>
  )
}

export default Titulo