import React from 'react'
import { Link } from 'react-router-dom'


const ContactButton = ({ text }) => {

    return (
        
            <button  className='text-center m-auto text-lg sm:text-3xl text-white align-center sm:align-center font-bold border-none rounded-lg h-10 w-3/4 sm:h-20 sm:w-80 bg-green-800 hover:scale-110 transition-transform' >
                <Link to='/Contactanos'>{text}</Link>
            </button>
        
    )
}

export default ContactButton
