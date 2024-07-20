import React, { useState } from 'react';
import "./navbar.scss";

const Navbar = () => {
    const [open, setOpen] = useState(false);


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
            <div className="menuIcon">
                <img src="./menu.png" 
                alt="menu-burger-icon"
                onClick={()=>setOpen((prev) => !prev)}
                />
            </div>
            {/* for small windows */}
            <div className={open ? "menu active" : "menu"}>
                <a href='/'>Home</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <a href='/'>Agents</a>
                <a href='/'>Login</a>
                <a href='/'>Register</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar