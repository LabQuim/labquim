import React from 'react';
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';
import Agronomy from 'Media/Agronomy.jpg';
import Footer from 'Components/Footer';

const home = () => {
  return (
  <div className='w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
      <Navbar/>

      <div class="max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
  <h2 class="text-lg font-semibold text-center text-blue-500 sm:text-xl">Me adapto a todo</h2>
  <p class="mt-3 text-gray-600">Esta caja es adaptable. Diseño primero para las dimensiones pequeñas y voy aumentando para las grandes.</p>
</div>

      <Banner
                title='Análisis preciso, confiable y rápido'
                text='Debido a las condiciones actuales de la pandemia, ofrecemos el servicio de test rapidos 
                para que usted mismo pueda realizar desde su empresa el test de analisis de suelos
                '
                image={Agronomy}
            />
            <h3 className="text-center font-bold text-4xl mt-6">Beneficios: </h3>
            <div className='flex flex-col sm:flex-row justify-center space-x-12 mt-16 h-full '>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
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

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
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

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            {/* <img src={} alt='imagen de movil' className='p-7'></img> */}
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                se entrega manual de instrucciones para la toma de muestras y posterior análisis
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            {/* <img src={} alt='imagen de movil' className='p-7'></img> */}
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                kit con instrumentos y material necesario para el análisis e interpretación de resultados
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
