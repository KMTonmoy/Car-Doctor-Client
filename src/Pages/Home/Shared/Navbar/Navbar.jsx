import React from 'react';
import logo from '../../../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='font-inter'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className='text-[18px] text-[#444444] font-[600]'>Home</NavLink></li>
                            <li><NavLink to={'/About'} className='text-[18px] text-[#444444] font-[600]'>About</NavLink></li>
                            <li><NavLink to={'/Services'} className='text-[18px] text-[#444444] font-[600]'>Services</NavLink></li>
                            <li><NavLink to={'/Blog'} className='text-[18px] text-[#444444] font-[600]'>Blog</NavLink></li>
                            <li><NavLink to={'/Contact'} className='text-[18px] text-[#444444] font-[600]'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <img className='w-[100px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'} className='text-[18px] text-[#444444] font-[600]'>Home</NavLink></li>
                        <li><NavLink to={'/About'} className='text-[18px] text-[#444444] font-[600]'>About</NavLink></li>
                        <li><NavLink to={'/Services'} className='text-[18px] text-[#444444] font-[600]'>Services</NavLink></li>
                        <li><NavLink to={'/Blog'} className='text-[18px] text-[#444444] font-[600]'>Blog</NavLink></li>
                        <li><NavLink to={'/Contact'} className='text-[18px] text-[#444444] font-[600]'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <NavLink  >
                        <IoBagOutline className='text-2xl' />
                    </NavLink>
                    <NavLink  >
                        <IoSearchOutline className='text-2xl' />
                    </NavLink>
                    <NavLink to="/appointment" className="btn btn-outline   text-[#FF3811] font-bold font-inter">Appointment</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
