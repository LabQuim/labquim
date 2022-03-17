import React from 'react';
import Navbar from 'Components/Navbar'
import Footer from 'Components/Footer';
import Infocard from 'Components/Infocard';
import Transporte from 'Media/transporte.png';
import Time from 'Media/time.png';
import Book from 'Media/book.png';
import Chemic from 'Media/chemic.png';
import Logo from 'Components/Logo';
import Slides from 'Components/Slides'
import ContactButton from 'Components/ContactButton';


const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-x-hidden overflow-y-hidden p-3 rounded-lg">
      <Logo />
      <div className="w-2/4 h-0.5 p-1 m-auto text-center">
        <hr className="justify-center w-full h-1 bg-gradient-to-r from-green-500 to-orange-300" />
      </div>
      <Navbar />
      <div className="text-center w-full  text-4xl mt-10 bg-green-200 rounded-t-lg">
        <div className="flex flex-col text-center lg:flex-row ">
          <div className=" m-auto">
            <h1 className="text-lg sm:text-5xl font-bold w-full p-5 px-3">
              Análisis precisos, confiables y rápidos
            </h1>
            <h3 className="text-lg sm:text-4xl p-5 px-3">
              Los recientes cambios climáticos han ocasionado variaciones en la composición
              y capacidad del suelo para producir excelentes cosechas, afectando de esta manera la 
              calidad y eficiencia de las mismas en el sector agrícola, esto sumado a las
              dificultades presentadas por la pandemia del COVID-19, que han disminuido significativamente 
              los beneficios del suelo agrícola, que pueden ser mejorados con servicios confiables, precisos y rápidos,
              y lograr el contínuo desarrollo del sector agrícola.
            </h3>
          </div>
        </div>

        <Slides />

        <div className="p-2">
          <ContactButton text="Contáctanos" />
        </div>
      </div>

      <h3 className="text-center font-bold text-4xl my-4">Beneficios: </h3>

      <div className="cuadros flex flex-col sm:flex sm:flex-row sm:justify-around  sm:space-x-6 space-y-3 sm:items-center ">
        <Infocard
          image={Transporte}
          text="Evita desplazamientos innecesarios"
        />

        <Infocard image={Time} text="Tiempos de análisis reducidos" />

        <Infocard
          image={Book}
          text="A disposición encuentra el manual de instrucciones para la toma de muestras y posterior análisis"
        />

        <Infocard
          image={Chemic}
          text="Cuenta con instrumentos necesarios para el análisis e interpretación de resultados"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
