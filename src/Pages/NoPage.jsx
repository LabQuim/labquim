import React from 'react'

const NoPage = () => {
  return (
    <div className='text-center sm:text-center my-28 sm:my-28 sm:text-2xl p-5'>
        <p className='font-bold'>Error 404</p>
        <h1 className='font-bold sm:font-bold sm:text-2xl mt-20 sm:mt-40'>PAGE NOT FOUND</h1>
        <h3 className='mt-5 '>La página que estás buscando no existe o ha sido eliminada</h3>
        <h4>Porfavor verifica la URL o dirección.</h4>
    </div>
  )
}

export default NoPage