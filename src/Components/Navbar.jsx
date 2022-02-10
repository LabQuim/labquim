import React from 'react'
import { NavLink } from 'react-router-dom';
// import ContactButton from 'Components/ContactButton'


const Navbar = () => {
    return (
        <div className='text-center sm:text-4xl'>
            
            <div className='navbar bg-gradient-to-b from-green-700 to-green-300 rounded-lg  sm:text-xl sm:text-center mt-2 '>
                <NavbarLinks/>
            </div>                
        </div>
                
            

            
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='space-y-3 flex flex-col sm:flex-row sm:text-center sm:space-x-7 sm:m-1'>
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
            <NavbarRoute to='/blog' title='Blog' />
            
            

        </ul>

    );
};

const NavbarRoute = ({to, title, icon})=>{
    return(
        <li className='text-center '>
            <NavLink
                to={to}
                className={({ isActive }) =>
                isActive
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-blue-400 sm:text-center'
                    : ' navbar-route font-bold  text-white hover:text-black hover:underline sm:text-center'
                }
            >
                
                    <span className='text-center sm:align-center sm:items-center ' >{title}</span>
                
            </NavLink>
        </li>
    )

}

export default Navbar;

