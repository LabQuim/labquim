import React from 'react'
// import ContactButton from 'Components/ContactButton'
import { NavLink } from 'react-router-dom'
import Logo2 from 'Media/logomblanco.png';

const Footer = () => {
    return (
        <div className=' bg-gray-600 w-full text-center h-auto rounded-md'>
            <div className='flex flex-col w-full sm:flex-row '>
                <div className='w-fit h-fit m-auto '> 
                    <img className='w-30 h-20 ml-5 text-left sm:w-36 sm:h-20 mt-2' src={Logo2} alt="Logo Laboratorio" />
                </div>
                <div className='text-center'>
                    <NavbarLinks/>
                </div>
            </div>
            
        </div>
                

                
                            
                    

        
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-col sm:flex-row space-y-2 sm:space-x-6 sm:tex-center text-md '>
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
            <NavbarRoute to='/blog' title='Blog' />
            <NavbarRoute to='' title='' />
            

        </ul>

    );
};

const NavbarRoute = ({to, title})=>{
    return(
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                isActive
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-sky-700'
                    : ' navbar-route text-white hover:text-orange-400 '
                }
            >
            <span className='sm:text-2xl text-sm text-center font-["Arial"] '>{title}</span>
            </NavLink>
        </li>
    )
}
                
                
                    


export default Footer
