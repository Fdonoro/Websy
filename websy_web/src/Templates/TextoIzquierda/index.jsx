import React from 'react'
import Contenedor from '../../Componentes/Contenedor'
import Titulo from '../../Componentes/Titulo'
import Parrafo from '../../Componentes/Parrafo'
import Seccion from '../../Componentes/Seccion'

const TextoIzquierda = (props) => {
  return (
    <Seccion esColorida={props.esColorida}>
        <Contenedor> 
            <Titulo classes={["alinearIzquierda"]}>{props.titulo}</Titulo>
            <Parrafo classes={["alinearIzquierda","marginTop40"]}>{props.contenido}</Parrafo>
        </Contenedor>
    </Seccion>
  )
}

export default TextoIzquierda