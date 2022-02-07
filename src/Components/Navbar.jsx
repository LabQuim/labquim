import React from 'react'
import { NavLink } from 'react-router-dom';
// import ContactButton from 'Components/ContactButton'
import Logo from 'Media/logom.png'

const Navbar = () => {
    return (
        <div className='text-center text-4xl'>
            
            <div className='w-auto h-auto m-auto '> 
                <img className='w-2/4 h-2/4 m-auto text-center' src={Logo} alt="Logo Laboratorio" />
            </div>
            <div className='w-2/4 h-0.5 p-1 m-auto text-center'>
                <hr className='justify-center w-full p-1 bg-gradient-to-r from-green-700 to-orange-600'/>
            </div>

            <div className='bg-green-400 rounded-lg flex flex-col text-center text-4xl w-full mt-2'>
                
                <NavbarLinks/>
            </div>

            {/*<div >
                <div  >
                    <ContactButton text='Contáctanos' />
                </div>
            </div>*/}
                
        </div>
            

            
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-col space-y-16 text-center items-center p-8 sm:grid-flow-row'>
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
            <NavbarRoute to='/blog' title='Blog' />
            
            

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
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-blue-400'
                    : ' navbar-route font-bold  text-gray-700 hover:text-black hover:bg-green-700'
                }
            >
                <div >
                    <i className={icon} />
                    <span >{title}</span>
                </div>
            </NavLink>
        </li>
    )

}

export default Navbar;

