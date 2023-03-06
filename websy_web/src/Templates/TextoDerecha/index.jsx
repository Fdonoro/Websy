import React from 'react'
import Contenedor from '../../Componentes/Contenedor'
import Titulo from '../../Componentes/Titulo'
import Parrafo from '../../Componentes/Parrafo'
import Seccion from '../../Componentes/Seccion'

const TextoDerecha = (props) => {
  return (
    <Seccion esColorida={props.esColorida}>
        <Contenedor> 
            <Titulo classes={["alinearDerecha"]}>{props.titulo}</Titulo>
            <Parrafo classes={["alinearDerecha","marginTop40"]}>{props.contenido}</Parrafo>
        </Contenedor>
    </Seccion>
  )
}

export default TextoDerecha