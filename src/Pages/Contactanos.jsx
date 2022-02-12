import Logo from 'Components/Logo'
import React from 'react'
import Correo from 'Media/correo1.png'
import Footer from 'Components/Footer'

const Contactanos = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
        <Logo/>
        <div className='w-2/4 h-0.5 p-1 m-auto text-center'>
                <hr className='justify-center w-full h-1 bg-gradient-to-r from-green-500 to-orange-300'/>
            </div>
        <div className='text-center w-full  text-4xl mt-5 bg-green-200 rounded-lg'>
        <div className='flex flex-col text-center lg:flex-row '>
            <div className=' m-auto'>
                <h1 className='text-lg sm:text-5xl font-bold w-full p-5 px-3'>Contáctanos</h1>
                <h3 className='text-lg sm:text-4xl p-5 px-3'>
                    Por favor dejanos tus datos en el siguiente formulario para ponernos en contacto.
                </h3>
            </div>
            <div className='w-full h-3/4 sm:w-3/4 sm:h-full  text-center justify-center p-2 sm:p-2'>
                <img className='w-full h-full sm:w-2/4 sm:h-2/4 rounded-lg text-left sm:m-auto drop-shadow-xl ' src={Correo} alt="imagen en el banner" /> 
            </div>
        </div>
      </div>

        <div data-tf-widget="Lh3e0nBk" data-tf-hide-headers data-tf-iframe-props="title=Registration Form" data-tf-medium="snippet"  
        style={{width:"100%", height:"600px"}}>
        </div>




        <Footer/>
    </div>
  )
}

export default Contactanos