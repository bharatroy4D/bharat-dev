import React from 'react';
import { FaHome, FaUser, FaServicestack, FaEnvelope, FaDownload } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
    const menuLink = [
        { id: "#home", name: "Home", icon: <FaHome /> },
        { id: "#about", name: "About", icon: <FaUser /> },
        { id: "#services", name: "Services", icon: <FaServicestack /> },
        { id: "#contact", name: "Contact", icon: <FaEnvelope /> },
    ];

    // Theme toggle state
    const [dark, setDark] = React.useState(false);

    const handleToggle = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark"); // tailwind dark mode enable করতে হবে config এ
    };

    return (
        <div className='container mx-auto  py-4 px-4 lg:px-10'>
            <div className=' flex items-center justify-between rounded-2xl border p-3 '>
                <h1 className='text-2xl font-bold'> Portfolio</h1>
                <div className='flex items-center gap-12'>
                    {
                        menuLink.map(menu => (
                            <div key={menu.id} className='flex items-center gap-2 cursor-pointer hover:text-blue-500 duration-300'>
                                <span>{menu.icon}</span>
                                <h1>{menu.name}</h1>
                            </div>
                        ))
                    }
                </div>

                {/* Right Side Actions */}
                <div className='flex items-center gap-4'>
                    {/* Toggle Theme Button */}
                    <button
                        onClick={handleToggle}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 duration-300"
                    >
                        {dark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
                    </button>

                    {/* Resume Button */}
                    <button className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 duration-300'>
                        <FaDownload className='text-white' />
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
