import React from 'react'
import { NavLink } from 'react-router-dom';
import ContactButton from '../Components/ContactButton'

const Navbar = () => {
    return (
        <div className='text-center text-4xl'>
            
            <div className='w-full h-full p-5 mt-10'> 
                Aqui va el logo
            </div>
            <div className='bg-green-400 flex flex-col text-center text-4xl w-full'>
                <NavbarLinks/>
            </div>

            <div >
                <div  >
                    <ContactButton text='Contáctanos' />
                </div>
            </div>
                
        </div>
            

            
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-col space-y-16 text-center items-center p-8'>
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

