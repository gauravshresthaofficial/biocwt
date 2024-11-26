import React, { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../context/ImageContext';
// import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const navLinks = [
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutUs", label: "About Us" },
    { path: "/contact", label: "Contact" },
];

const Navbar = () => {
    const baseClasses = 'font-sans font-semibold text-xl navItems';
    const activeClasses = 'text-[#FB9E6E]';
    const inactiveClasses = 'text-white hover:text-[#FFC099]';

    const {images} = useContext(ImageContext)

    const navbarRef = useRef(); // Ref for navbar container
    const linksRef = useRef([]); // Ref array for links

    useEffect(() => {
        // GSAP animation for links and logo
        gsap.from(linksRef.current, {
            delay:1,
            duration: 1,
            y: -300,
            opacity: 0,
            stagger: 0.3,
            ease: 'power3.out',
        });
    }, []);

    return (
        <div
            ref={navbarRef}
            className='w-full px-16 pt-10 flex justify-between absolute top-0 right-0 z-[999]'
        >
            <NavLink
                to="/"
                ref={(el) => (linksRef.current[0] = el)} // Include logo in linksRef
            >
                <img src={images.logo} alt="logo" className='logo h-14 cursor-pointer' />
            </NavLink>

            <div className="flex gap-20 justify-between">
                {navLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        className={({ isActive }) =>
                            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                        }
                        ref={(el) => (linksRef.current[index + 1] = el)} // Assign refs for links (logo at index 0)
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
