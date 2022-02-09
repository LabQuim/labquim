import React from 'react'
import { NavLink } from 'react-router-dom';
// import ContactButton from 'Components/ContactButton'


const Navbar = () => {
    return (
        <div className='text-center sm:text-4xl'>
            
            <div className=' bg-gradient-to-b from-green-700 to-green-300 p-2 rounded-lg flex flex-col sm:justify-evenly sm:flex-row text-center text-xl sm:text-4xl mt-2'>
                <NavbarLinks/>
            </div>                
        </div>
                
            

            
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-col space-y-6 p-3 text-center w-auto h-30 sm:flex sm:flex-row sm:align-center sm:text-center sm:space-x-10'>
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
            <NavbarRoute to='/blog' title='Blog' />
            
            

        </ul>

    );
};

const NavbarRoute = ({to, title, icon})=>{
    return(
        <li className='sm:text-center sm:align-center'>
            <NavLink
                to={to}
                className={({ isActive }) =>
                isActive
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-blue-400'
                    : ' navbar-route font-bold  text-white hover:text-black hover:underline'
                }
            >
                <div >
                    <span className='sm:text-center sm:align-center' >{title}</span>
                </div>
            </NavLink>
        </li>
    )

}

export default Navbar;

