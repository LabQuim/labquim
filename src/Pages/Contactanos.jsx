import Banner from 'Components/Banner'
import Logo from 'Components/Logo'
import React from 'react'
import Correo from 'Media/correo.png'

const Contactanos = () => {
  return (
    <div>
        <Logo/>
        <Banner
        title='Contactanos'
        text='Por favor, dejanos tus datos en el siguiente formulario, para ponernos en contacto
        lo mas pronto posible.'
        image={Correo}/>
        <div 
        data-tf-widget="Lh3e0nBk" 
        data-tf-iframe-props="title=Registration Form" 
        data-tf-medium="snippet" style={{"width:100%;height:400px;"}}>

        </div>
    </div>
  )
}

export default Contactanos