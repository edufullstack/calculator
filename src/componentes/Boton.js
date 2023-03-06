import React from 'react'
import '../stylesheets/Boton.css'

function Boton(props) {
  const esOperador = (valor) => {
    return valor !== '.' && valor !== '=' && isNaN(valor)
  }
  return (
    <button
      className={`boton-contenedor ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  )
}

export default Boton
