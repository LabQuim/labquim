
import Banner from 'Components/Banner'
import Navbar from 'Components/Navbar'
import React from 'react'
import Agro from 'Media/Agro.jpg'
import Footer from 'Components/Footer'
import Logo from 'Components/Logo'


const Agronomia = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
      <Logo/>
            <div className='w-2/4 h-0.5 p-1 m-auto text-center'>
                <hr className='justify-center w-full p-1 bg-gradient-to-r from-green-700 to-orange-600'/>
            </div>
      <Navbar/>
      <Banner
                title='Producción Agrícola'
                text='Todo fabricante o distribuidor de insumos agrícolas tiene como principal misión 
                aportar valor a sus clientes. Más allá de los productos que puedan poner a su disposición, 
                es objetivo común trasladar también algo de servicio que complemente la función del producto.'
                image={Agro}
            />
        <div className='Cuadros flex flex-col sm:my-6 p-1 sm:flex sm:flex-row bg-gray-100 sm:justify-evenly sm:text-center '>

<div className='cuadro1 mt-3 sm:mx-6 sm:text-center sm:align-middle sm:space-x-4 sm:w-full '>
     <h1 className='text-2xl sm:text-3xl font-bold text-green-900'>Análisis agronómicos</h1>
     <div className='texto sm:mt-4'>
         <p className='text-gray-700 text-justify sm:text-lg'>
         cada vez más, los propios consumidores, exigen que frutas y hortalizas se produzcan con prácticas agrícolas 
         sostenibles, adecuando los aportes de agua y fertilizantes a la verdadera demanda de la planta, 
         aprovechando los recursos naturales que podamos tener en el agua y en el suelo.
     </p>
     
     </div>
     
 </div>
 </div>
 <Footer/>

    </div>
  )
}

export default Agronomia