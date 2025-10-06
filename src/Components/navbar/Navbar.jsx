import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaEnvelope,
  FaDownload,
  FaProjectDiagram,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const menuLink = [
    { id: "#home", name: "Home", icon: <FaHome /> },
    { id: "#about", name: "About", icon: <FaUser /> },
    { id: "#services", name: "Services", icon: <FaServicestack /> },
    { id: "#projects", name: "Projects", icon: <FaProjectDiagram /> },
    { id: "#contact", name: "Contact", icon: <FaEnvelope /> },
  ];

  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Theme toggle
  const handleToggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  // Mobile menu toggle
  const handleMenus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="poppins">
      <div className="flex items-center justify-between bg-gray-800 text-white rounded-2xl border border-orange-500 p-3 relative">
        {/* Logo */}
        <h1 className="text-2xl roboto font-bold">
          Port<span className="text-yellow-400">folio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuLink.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400 duration-300"
            >
              <span>{menu.icon}</span>
              <h1 className="text-sm">{menu.name}</h1>
            </div>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white duration-300"
          >
            {dark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>

          {/* Hamburger Menu */}
          <button onClick={handleMenus} className="lg:hidden text-2xl">
            {isOpen ? <IoIosClose /> : <RxHamburgerMenu />}
          </button>

          {/* Resume Button (Desktop Only) */}
          <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300">
            <FaDownload className="text-white" />
            Resume
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 text-white lg:hidden flex flex-col items-center gap-6 py-6 border-t border-gray-700 rounded-b-2xl animate-slide-down">
            {menuLink.map((menu) => (
              <a
                key={menu.id}
                href={menu.id}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-lg hover:text-yellow-400 duration-300"
              >
                {menu.icon}
                {menu.name}
              </a>
            ))}

            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300">
              <FaDownload className="text-white" />
              Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
