import React from 'react'
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';
import Agronomy from 'Media/Agronomy.jpg';
import Footer from 'Components/Footer';
import Logo from 'Media/logom.png'

const Nosotros = () => {
  return (
    <div className='flex flex-col w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
      <div className='w-auto h-auto m-auto '> 
                <img className='w-2/4 h-2/5 m-auto text-center' src={Logo} alt="Logo Laboratorio" />
            </div>
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

            <div className='Cuadros flex flex-col sm:my-6 p-1 sm:flex sm:flex-row bg-gray-100 sm:justify-evenly sm:text-center '>

               <div className='cuadro1 sm:mx-6 sm:text-center sm:align-middle sm:space-x-4 sm:w-full '>
                    <h1 className='text-2xl sm:text-3xl font-bold text-green-900'>Análisis de suelos agrícolas</h1>
                    <div className='texto sm:mt-4'>
                        <p className='text-gray-700 text-justify sm:text-lg'>
                    Los análisis de suelos son la parte esencial sobre la que se basa cualquier programa de manejo agronómico en una producción agrícola. 
                    Entre los aspectos que vamos a conocer con este tipo de análisis, destacamos:
                    </p>
                    <ul className='text-gray-700 text-sm sm:text-lg mt-2 sm:text-left list-disc list-inside '>
                        <li>Fertilidad de nuestro suelo</li>
                        <li>Disponibilidad de los nutrientes en el mismo</li>
                        <li>Enmiendas a realizar en pre-siembra o pre-plantación</li>
                        <li>Generar un diagnóstico ante un problema nutricional que presenta el cultivo</li>
                    </ul>
                    <p className='text-gray-700 text-justify sm:text-lg sm:mt-3'>
                    Todo manejo de riego y nutrición debe tener como punto de partida un análisis de suelo además 
                    de análisis de agua de riego, así podremos tener acceso a la información que nos permita ejecutar el mejor 
                    programa de riego y abonado posible para nuestras condiciones.
                    </p>
                    </div>
                    
                </div>

                <div className='cuadro2 sm:mx-6 sm:text-center sm:align-middle sm:space-x-4 sm:w-full '>
                    <h1 className=' text-2xl sm:text-3xl font-bold text-green-900'>¿Qué parámetros se analizan?</h1>
                    <div className='texto sm:mt-4'>
                        <p className='text-gray-700 text-justify justify-center sm:text-lg'>
                        Cuando se realizan analisis de suelos, es necesario tener en cuenta los siguientes datos para
                        la toma de decisiones:
                    </p>
                    <p className='text-gray-700 text-justify justify-center sm:text-lg'><b>Textura:</b> Este parámetro nos dirá cuál será la mejor estrategia de riego para sacarle el máximo provecho al agua aportada. 
                        En el plano de la nutrición nos indicará grosso modo el contenido en sales y nos dará una previsión de la capacidad de retención de nutrientes. 
                        Todo ello nos indicará qué elementos deben ser aportados, en qué dosis y qué forma química de aplicación 
                        es la más recomendable.
                    </p>
                    <p className='text-gray-700 text-justify justify-center sm:text-lg'><b>PH:</b> Nos indicará la reacción que tendrá el suelo, si ácida o alcalina. 
                        Este carácter dará idea de la disponibilidad que tendrán en la solución de suelo elementos como el fósforo y los micronutrientes, muy sensibles a variaciones en este factor.
                    </p>
                    <p className='text-gray-700 text-justify justify-center sm:text-lg'><b>Nutrientes a disposición de la planta:</b> Ya sean macronutrientes (nitrógeno, fósforo, potasio, calcio y magnesio) o 
                    micronutrientes (hierro, boro, manganeso, cinc, molibdeno y cobre) debemos saber en qué proporciones podemos encontrarlos en nuestro suelo, 
                    siempre hablando de su forma disponible ya que de poco nos servirá conocer la cantidad total que habrá de de uno de ellos si luego sólo un mínimo porcentaje se encuentra 
                    soluble para entrar por las raíces.
                    </p>
                    </div>
                    
                    
                </div> 
                
                    
            </div>
            
        <Footer/>
    </div>
  )
}

export default Nosotros