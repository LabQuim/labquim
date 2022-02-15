import React from 'react'
import ContactButton from 'Components/ContactButton';
import Slides from 'Components/Slides';



const Banner = ( { title, text, image } ) => {
    return (
        <div className='text-center w-full  text-4xl mt-10 bg-green-200 rounded-lg'>
            
                <div className='flex flex-col text-center lg:flex-row '>
                    <div className=' m-auto'>
                        <h1 className='text-lg sm:text-5xl font-bold w-full p-5 px-3'>{title}</h1>
                        <h3 className='text-lg sm:text-4xl p-5 px-3'>
                            {text}
                        </h3>
                    </div>
                </div>
                    <div className='w-full h-full sm:w-200 sm:h-200 m-auto  text-center justify-center p-4 sm:p-2'>
                        <Slides/> 
                    </div>
                        
                    

                    <div className='p-2'>
                            <ContactButton text='Contáctanos' />
                        </div>

                
            

                

        </div>
                    

    )
}

export default Banner
