import React from 'react';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutUs", label: "About Us" },
    { path: "/contact", label: "Contact" },
];

const Navbar = () => {
    const baseClasses = 'font-sans font-semibold text-xl';
    const activeClasses = 'text-[#FB9E6E]';
    const inactiveClasses = 'text-white hover:text-[#FFC099]';

    return (
        <div className='w-full px-16 pt-10 flex justify-between absolute top-0 right-0 z-[999]'>
            <NavLink to="/">
                <img src={logo} alt="logo" className='h-14 cursor-pointer' />
            </NavLink>

            <div className="navlist flex gap-20 justify-between">
                {navLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        exact={link.exact}
                        className={({ isActive }) =>
                            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
