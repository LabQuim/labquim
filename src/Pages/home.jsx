import React from 'react';
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';
import Agronomy from 'Media/Agronomy.jpg';
import Footer from 'Components/Footer';
import Logo from 'Media/logom.png'

const home = () => {
  return (
  <div className='w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
      <div className='w-auto h-auto m-auto '> 
                <img className='w-2/4 h-2/5 m-auto text-center' src={Logo} alt="Logo Laboratorio" />
            </div>
            <div className='w-2/4 h-0.5 p-1 m-auto text-center'>
                <hr className='justify-center w-full p-1 bg-gradient-to-r from-green-700 to-orange-600'/>
            </div>
      <Navbar/>
      <Banner
                title='Análisis preciso, confiable y rápido'
                text='Debido a las condiciones actuales de la pandemia, ofrecemos el servicio de test rapidos 
                para que usted mismo pueda realizar desde su empresa el test de analisis de suelos
                '
                image={Agronomy}
            />
            <h3 className="text-center font-bold text-4xl mt-6">Beneficios: </h3>
            <div className='flex flex-col sm:flex-row justify-center text-center sm:space-x-12 sm:mt-8 h-full '>

                                <div className='bg-white rounded-xl w-fit hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            {/* <img src={} alt='imagen de movil' className='p-7'></img> */}
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Evita desplazamientos innecesarios
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-fit hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            {/* <img src={} alt='imagen de movil' className='p-7'></img> */}
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Tiempos de análisis reduicidos
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-fit hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            {/* <img src={} alt='imagen de movil' className='p-7'></img> */}
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Se entrega manual de instrucciones para la toma de muestras y posterior análisis
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-fit hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            {/* <img src={} alt='imagen de movil' className='p-7'></img> */}
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                    Incluye: kit con instrumentos y material necesario para el análisis e interpretación de resultados
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    </div>
                    <Footer/>
  </div>);
};

export default home;
