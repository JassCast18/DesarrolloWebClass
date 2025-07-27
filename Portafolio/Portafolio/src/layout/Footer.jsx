import React from 'react'

export const Footer = () => {
    //Obtener el year actual
    const anioActual= new Date().getFullYear();
  return (
    <footer className='footer'>
        Portafolio Jaser Castellanos &copy; - {anioActual}
    </footer>
  )
}
