import React from 'react'
import Contenedor from '../../Componentes/Contenedor'
import Titulo from '../../Componentes/Titulo'
import Seccion from '../../Componentes/Seccion'
import Parrafo from '../../Componentes/Parrafo'

const TituloTexto = (props) => {
  return (
    <Seccion esColorida={props.esColorida}>
        <Contenedor> 
            <Titulo classes={["alinearCentro"]}>{props.titulo}</Titulo>
            <Parrafo classes={["alinearCentro","marginTop40"]}>{props.contenido}</Parrafo>
        </Contenedor>
    </Seccion>
  )
}

export default TituloTexto