import React from 'react';
import { FaHome, FaUser, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const menuLink = [
        { id: "#home", name: "Home", icon: <FaHome /> },
        { id: "#about", name: "About", icon: <FaUser /> },
        { id: "#services", name: "Services", icon: <FaServicestack /> },
        { id: "#contact", name: "Contact", icon: <FaEnvelope /> },
    ];

    return (
        <div className='max-w-screen-xl mx-auto flex items-center justify-between p-4'>
            <h1 className='text-2xl font-bold'>Portfolio</h1>
            <div className='flex items-center gap-8'>
                {
                    menuLink.map(menu => (
                        <div key={menu.id} className='flex items-center gap-2 cursor-pointer hover:text-blue-500 duration-300'>
                            <span>{menu.icon}</span>
                            <h1>{menu.name}</h1>
                        </div>
                    ))
                }
            </div>
            <button>Resume</button>
        </div>
    );
};

export default Navbar;
