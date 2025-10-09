import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to={'/'}><li><a>Home</a></li></NavLink>
      <NavLink to={'/apps'}><li><a>Apps</a></li></NavLink>
      <NavLink to={'/installation'}><li><a>Installation</a></li></NavLink>
     
      </ul>
    </div>
   <a className="btn btn-ghost text-xl bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
  <img src={logo} className='w-[40px]' alt="logo" />
  HERO.IO
</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavLink to={'/'}><li><a>Home</a></li></NavLink>
      <NavLink to={'/apps'}><li><a>Apps</a></li></NavLink>
      <NavLink to={'/installation'}><li><a>Installation</a></li></NavLink>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/ajhar-07' className="btn relative px-8 py-2 mt-5 font-semibold text-white bg-gradient-to-r from-purple-700 to-purple-400 rounded-md hover:opacity-90 transition-all duration-300"> <FaGithub/>Contribute</a>
  </div>
</div>
    );
};

export default Navbar;