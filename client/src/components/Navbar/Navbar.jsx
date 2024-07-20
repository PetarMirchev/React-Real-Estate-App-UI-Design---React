import React from 'react';
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <a href='/' className='logo'>
                <img className="logo-icon-company" src="./logo192.png" alt="Company Logo"/>
                <span className='logo-text-company-name'>Pepi Agency</span>
            </a>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Contact</a>
            <a href='/'>Agents</a>
        </div>
        <div className="right">
            <a href='/'>Login</a>
            <a href='/' className='register'>Register</a> 
        </div>
    </nav>
  )
}

export default Navbar