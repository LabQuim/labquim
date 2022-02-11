import React from 'react'

const NoPage = () => {
  return (
    <div className='sm:text-center sm:my-10 text-center'>
        <p>Error 404</p>
        <h1 className='font-bold sm:font-bold sm:text-2xl sm:mt-20 font='>Page not found</h1>
        <h3>La pagina que estas buscando no existe o ha sido eliminada</h3>
        <h4>Porfavor verifica la URL o dirección.</h4>
    </div>
  )
}

export default NoPage