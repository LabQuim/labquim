import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-b from-green-500 to-green-300 rounded-lg  sm:text-2xl sm:text-center mt-2 sm:h-20">
      <NavbarLinks />
    </div>
  );
};

const NavbarLinks = () => {
  return (
    <ul className="space-y-3 flex flex-col  sm:flex-row sm:text-center  sm:justify-evenly sm:h-full sm:items-center sm:w-auto sm:-space-y-1  sm:m-auto ">
      <NavbarRoute to="/Agronomia" title="Agronomía" />
      <NavbarRoute to="/Nosotros" title="Nosotros" />
      <NavbarRoute to="/Blog" title="Blog" />
      
    </ul>
  );
};

const NavbarRoute = ({ to, title, icon }) => {
  return (
    <li className="text-center p-1 items-center sm:items-center sm:w-auto  sm:justify-center sm:hover:scale-110 sm:transition-transform ">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? " navbar-route border-t-2  border-b-2 font-extrabold border-green text-green-900 sm:text-center"
            : " navbar-route font-bold  text-white hover:text-green-900 hover:underline sm:text-center sm:justify-center sm:w-auto"
        }
      >
        <span className="text-center sm:text-center">
          {title}
        </span>
      </NavLink>
    </li>
  );
};

export default Navbar;
