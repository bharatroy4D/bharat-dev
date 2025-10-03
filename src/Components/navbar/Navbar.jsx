import React from 'react';
import { FaHome, FaUser, FaServicestack, FaEnvelope, FaDownload, FaProjectDiagram } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
    const menuLink = [
        { id: "#home", name: "Home", icon: <FaHome /> },
        { id: "#about", name: "About", icon: <FaUser /> },
        { id: "#services", name: "Services", icon: <FaServicestack /> },
        { id: "#projects", name: "Projects", icon: <FaProjectDiagram /> },
        { id: "#contact", name: "Contact", icon: <FaEnvelope /> },
    ];

    // Theme toggle state
    const [dark, setDark] = React.useState(true);

    const handleToggle = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark"); // tailwind dark mode enable করতে হবে config এ
    };

    return (
        <div className='poppins'>
            <div className=' flex items-center justify-between bg-gray-800 rounded-2xl border border-orange-500 p-3 '>
                <h1 className='text-2xl roboto'> Port<span className='text-yellow-400'>folio</span></h1>
                <div className='flex items-center gap-8'>
                    {
                        menuLink.map(menu => (
                            <div key={menu.id} className='flex items-center gap-2 cursor-pointer hover:text-blue-500 duration-300'>
                                <span className=''>{menu.icon}</span>
                                <h1 className='text-sm'>{menu.name}</h1>
                            </div>
                        ))
                    }
                </div>

                {/* Right Side Actions */}
                <div className='flex items-center gap-4 '>
                    {/* Toggle Theme Button */}
                    <button
                        onClick={handleToggle}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 duration-300"
                    >
                        {dark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                    </button>

                    {/* Resume Button */}
                    <button className="flex items-center gap-2 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    text-white px-4 py-2 rounded-full shadow-md
    hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 
    duration-300">
                        <FaDownload className="text-white" />
                        Resume
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
