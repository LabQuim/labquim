import React from 'react'

const ContactButton = ({ text }) => {
    return (
        
            <button  className='text-center space-y-5 text-white align-top font-bold m-3 border-none rounded-lg border-green-800 h-20 p-5 bg-green-800' >
                {text}
            </button>
        
    )
}

export default ContactButton
