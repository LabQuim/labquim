import React from 'react'
import ContactButton from 'Components/ContactButton';



const Banner = ( { title, text, image } ) => {
    return (
        <div className='text-center text-4xl m-10'>
            <div >
                <div>
                    <div>
                        <h1 >{title}</h1>
                        <h3 >
                            {text}
                        </h3>
                        <div >
                            <ContactButton text='Contáctanos' />
                        </div>

                    </div>
                    <div >
                        <img className=' w-120 h-60 rounded-xl m-2 mr-8' src={image} alt="imagen en el banner" /> 
                    </div>

                </div>
            </div>

                

        </div>
                    

    )
}

export default Banner
