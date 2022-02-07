import React from 'react'

const ContactButton = ({ text }) => {
    return (
        
            <button  className='text-center space-y-5 text-white align-top font-bold m-6 border-none rounded-lg h-20 p-5 bg-green-800 hover:scale-110 transition-transform' >
                {text}
            </button>
        
    )
}

export default ContactButton
