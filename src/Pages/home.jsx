import React from 'react';
import Navbar from 'Components/Navbar'
import Banner from 'Components/Banner';

const home = () => {
  return (
  <div className='w-full overflow-x-hidden'>
      <Navbar/>
      <Banner
                title='titulo de servicios del laboratorio'
                text='que se va a ofrecer'
                // image={}
            />
  </div>);
};

export default home;
