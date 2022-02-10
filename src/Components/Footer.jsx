import React from 'react'
// import ContactButton from 'Components/ContactButton'
import { NavLink } from 'react-router-dom'
import Logo2 from 'Media/logomblanco.png';




const Footer = () => {
    return (
        <div className=' bg-gray-600 w-full text-center h-auto rounded-md mt-5 sm:flex sm:flex-row sm:justify-evenly'>
            

                <div className='Logo w-auto h-fit justify-center  sm:justify-start'> 
                    <img className='w-30 h-20 mt-2 m-auto p-1 text-center sm:w-39 sm:h-28 ' src={Logo2} alt="Logo Laboratorio" />
                </div>

                <div className='Links text-center sm:justify-evenly sm:w-89'>
                    <NavbarLinks/>
                </div>

                <br />

                <div className='Info text-white '>            
                    <p><i class="fa-brands fa-whatsapp"></i> WhatsApp:</p>
                    <p>3xxxxxxxx</p>
                    <br />
                    
                    <p><i class="fa-solid fa-square-envelope"></i> Email: </p>
                    <p>xxxx@gmail.com</p>
                    <br /> 
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
