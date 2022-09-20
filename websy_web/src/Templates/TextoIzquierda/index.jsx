import React from 'react'
import Contenedor from '../../Componentes/Contenedor'
import Parrafo from '../../Componentes/Parrafo'
import Seccion from '../../Componentes/Seccion'

const TextoIzquierda = (props) => {
  return (
    <Seccion esColorida={props.esColorida}>
        <Contenedor> 
            <Parrafo classes={["alinearIzquierda","marginTop40"]}>{props.children}</Parrafo>
        </Contenedor>
    </Seccion>
  )
}

export default TextoIzquierda