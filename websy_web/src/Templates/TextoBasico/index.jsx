import React from 'react'
import Contenedor from '../../Componentes/Contenedor'
import Parrafo from '../../Componentes/Parrafo'
import Seccion from '../../Componentes/Seccion'

const TextoBasico = (props) => {
  return (
    <Seccion esColorida={props.esColorida}>
        <Contenedor>
            <Parrafo classes={["alinearCentro"]}>{props.children}</Parrafo>
        </Contenedor>
    </Seccion>
  )
}

export default TextoBasico