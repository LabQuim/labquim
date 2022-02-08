import React from 'react'
import ContactButton from 'Components/ContactButton'
import { NavLink } from 'react-router-dom'
import Logo from 'Media/logomb.png'

const Footer = () => {
    return (
        <div className=' bg-gray-600 w-full flex flex-row text-center h-40 text-10xl'>
            <div className='flex '>
            <div className='w-auto h-auto m-auto text-left'> 
                <img className='w-3/5 h-3/5 ml-5 text-center' src={Logo} alt="Logo Laboratorio" />
            </div>
                <div className=''>
                    <NavbarLinks/>
                </div>
                <div >
                    <ContactButton text='Contáctanos' />
                </div>

                
                            
                    
            </div>
        </div>

        
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-nowrap auto-rows-auto justify-items-center content-between p-5 self-auto text-10xl  '>
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
            <NavbarRoute to='/blog' title='Blog' />
            <NavbarRoute to='' title='' />
            

        </ul>

    );
};

const NavbarRoute = ({to, title, icon})=>{
    return(
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                isActive
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-sky-700'
                    : ' navbar-route font-bold  text-white hover:text-black hover:bg-green-700'
                }
            >
                <div className='flex items-center'>
                    <i className={icon} />
                    <span className='text-2xl self-auto mx-10 font-["verdana"] '>{title}</span>
                </div>
            </NavLink>
        </li>
    )

}

export default Footer
