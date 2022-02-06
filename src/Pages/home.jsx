import React from 'react';
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';

const home = () => {
  return (
  <div className='w-full overflow-x-hidden'>
      <Navbar/>
      <Banner
                title='TITULO'
                text='Servicios que se van a ofrecer por que cuando yo ponga el resto del texto que tengo destinado para poner aqui pues se va a ver asi como lo estoy viendo en este momento para despues poder interactuar desde el telefono'
                // image={}
            />
            <h3 className="text-center font-bold text-4xl">Hola!</h3>
  </div>);
};

export default home;
