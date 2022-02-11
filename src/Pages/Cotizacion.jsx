import Banner from 'Components/Banner'
import Logo from 'Components/Logo'
import Navbar from 'Components/Navbar'
import React from 'react'
import Agronomy from 'Media/Agronomy.jpg';


const Cotizacion = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
      <Logo/>
            <div className='w-2/4 h-0.5 p-1 m-auto text-center'>
                <hr className='justify-center w-full p-1 bg-gradient-to-r from-green-700 to-orange-600'/>
            </div>
      <Navbar/>
      <Banner
                title='¿Quienes somos?'
                text='(Nuestro Laboratorio) orienta y ofrece una solución rápida a clientes del sector Agrónomo
                para ayudar a producir de manera más eficiente, más sostenible y con el maximo provecho en recurso
                de la tierra para sus cultivos.
                '
                image={Agronomy}
            />
        <div>
            Hola esta es la pagina de cotizaciones
        </div>

    </div>
  )
}

export default Cotizacion