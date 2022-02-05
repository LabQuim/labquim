import React from 'react'
import { NavLink } from 'react-router-dom';
import ContactButton from '../Components/ContactButton'

const Navbar = () => {
    return (
        <div className='bg-green-500 flex flex-row items-center text-center sm:bg-blue-300'>

            <div >
                Aqui va el logo
            </div>
            <div className='flex flex-row'>
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
        <ul className='flex flex-row space-x-5'>
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

