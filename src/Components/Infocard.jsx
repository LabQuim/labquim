import React from 'react'

const Infocard = ({ text, image }) => {
  return (
    <div className="div1 bg-gray-300 rounded-xl w-full h-auto sm:w-full sm:h-auto md:h-90 align-middle font-semibold sm:m-auto hover:scale-110 transition-transform sm:text-center sm:justify-center ">
      <div className='texto  m-auto p-3 h-full text-center align-middle sm:text-center sm:items-center sm:text-2xl text-xl'>
        <img className='w-28 h-28 m-auto sm:w-60 sm:h-60 sm:text-center sm:justify-center sm:m-auto' src={image} alt="imagen de tarjetas" />
        <p className='sm:text-center sm:justify-center sm:m-2 sm:h-full'>{text}</p>
      </div>
        
    </div>
  );
};

export default Infocard;