import React from 'react'
import ContactButton from 'Components/ContactButton';



const Banner = ( { title, text, image } ) => {
    return (
        <div className='text-center w-full  text-4xl mt-10 bg-green-200'>
            <div className=''>
                <div className=''>
                    <div className='pt-8 m-auto'>
                        <h1 className='font-bold w-full'>{title}</h1>
                        <h3 className='w-full text-center m-auto'>
                            {text}
                        </h3>
                        <div className='mt-7'>
                            <ContactButton text='Contáctanos' />
                        </div>

                    </div>
                    <div className='w-full text-center'>
                        <img className=' w-200 h-200  m-auto ' src={image} alt="imagen en el banner" /> 
                    </div>

                </div>
            </div>

                

        </div>
                    

    )
}

export default Banner
