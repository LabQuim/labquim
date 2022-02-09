import React from 'react'
import ContactButton from 'Components/ContactButton';



const Banner = ( { title, text, image } ) => {
    return (
        <div className='text-center w-full  text-4xl mt-10 bg-green-200 rounded-lg'>
            
                <div className='flex flex-col text-center sm:flex-row '>
                    <div className=' m-auto'>
                        <h1 className='font-bold w-full p-5 px-2'>{title}</h1>
                        <h3 className=''>
                            {text}
                        </h3>
                    </div>
                    <div className='w-full h-full text-center justify-center p-8'>
                        <img className='w-full h-full sm:w-200 sm:h-200 rounded-lg text-center mt-12 drop-shadow-xl ' src={image} alt="imagen en el banner" /> 
                    </div>
                </div>
                        
                    

                    <div className='p-2'>
                            <ContactButton text='Contáctanos' />
                        </div>

                
            

                

        </div>
                    

    )
}

export default Banner
