import React from 'react'
import LogoP from 'Media/logo4.png';
import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <div className="w-auto h-auto sm:m-auto ">
      <Link to="/">
        <img
          className="w-2/4 h-2/5 m-auto text-center"
          src={LogoP}
          alt="Logo Laboratorio"
        />
      </Link>
    </div>
  );
}

export default Logo