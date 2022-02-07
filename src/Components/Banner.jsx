import React from 'react'
import ContactButton from 'Components/ContactButton';



const Banner = ( { title, text, image } ) => {
    return (
        <div className='text-center w-full  text-4xl mt-10 bg-green-200 rounded-lg'>
            
                <div className='flex flex-row text-center'>
                    <div className=' m-auto'>
                        <h1 className='font-bold w-full p-5 px-2'>{title}</h1>
                        <h3 className='w-full text-center mr-6'>
                            {text}
                        </h3>
                    </div>
                    <div className='w-full h-full text-center justify-center p-8'>
                        <img className='w-200 h-200 rounded-lg text-center mt-12 drop-shadow-xl ' src={image} alt="imagen en el banner" /> 
                    </div>
                </div>
                        
                    

                    <div className=''>
                            <ContactButton text='Contáctanos' />
                        </div>

                
            

                

        </div>
                    

    )
}

export default Banner
