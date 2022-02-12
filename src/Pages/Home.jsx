import React from 'react';
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';
import Agronomy from 'Media/Agronomy.jpg';
import Footer from 'Components/Footer';
import Infocard from 'Components/Infocard';
import Transporte from 'Media/transporte.png';
import Time from 'Media/time.png';
import Book from 'Media/book.png';
import Chemic from 'Media/chemic.png';
import Logo from 'Components/Logo';

const Home = () => {
  return (
  <div className='flex flex-col w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg'>
        <Logo/>
            <div className='w-2/4 h-0.5 p-1 m-auto text-center'>
                <hr className='justify-center w-full h-1 bg-gradient-to-r from-green-500 to-orange-300'/>
            </div>
      <Navbar/>
      <Banner
                title='Análisis precisos, confiables y rápidos'
                text='Debido a las condiciones actuales de la pandemia, ofrecemos el servicio de test rapidos 
                para que usted mismo pueda realizar desde su finca de análisis de suelos
                '
                image={Agronomy}
            />
            <h3 className="text-center font-bold text-4xl my-4">Beneficios: </h3>

            <div className='cuadros flex flex-col sm:flex sm:flex-row sm:justify-around  sm:space-x-6 space-y-3 sm:items-center '>

                                <Infocard
                                    image={Transporte}
                                    text= 'Evita desplazamientos innecesarios' />
                                
                                <Infocard
                                    image={Time}
                                    text= 'Tiempos de análisis reducidos' />

                                <Infocard
                                    image={Book}
                                    text= 'A disposición encuentra el manual de instrucciones para la toma de muestras y posterior análisis' />

                                <Infocard
                                    image={Chemic}
                                    text= 'Cuenta con instrumentos necesarios para el análisis e interpretación de resultados' />

                    </div>
                    <Footer/>
  </div>);
};

export default Home;
