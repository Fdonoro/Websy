import React from 'react'
import "./style.css"

const Seccion = (props) => {
  return (
    <div className={`seccion${props.esColorida === true ? " seccionColorida" : ""}`} >{props.children}</div>
  )
}

export default Seccion