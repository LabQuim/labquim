import React from 'react';
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';
import Agronomy from 'Media/Agronomy.jpg';

const home = () => {
  return (
  <div className='w-full overflow-x-hidden overflow-y-hidden'>
      <Navbar/>
      <Banner
                title='Rapi-Test'
                text='Debido a las condiciones actuales de la pandemia, ofrecemos el servicio de test rapidos 
                para que usted mismo pueda realizar desde su empresa el test de analisis de suelos
                '
                image={Agronomy}
            />
            <h3 className="text-center font-bold text-4xl mt-6">Beneficios</h3>
  </div>);
};

export default home;
