import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaEnvelope,
  FaDownload,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "../../context/themeContext";

const Navbar = () => {
  const menuLink = [
    { id: "#banner", name: "Home", icon: <FaHome /> },
    { id: "#about", name: "About", icon: <FaUser /> },
    { id: "#skills", name: "Skills", icon: <FaLaptopCode /> },
    { id: "#services", name: "Services", icon: <FaServicestack /> },
    { id: "#projects", name: "Projects", icon: <FaProjectDiagram /> },
    { id: "#contact", name: "Contact", icon: <FaEnvelope /> },
  ];

  const { theme, toggleTheme } = useTheme(); // ✅ Fixed variable name
  const dark = theme === "dark"; // ✅ boolean shortcut

  const [isOpen, setIsOpen] = useState(false);

  const handleMenus = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setIsOpen(false), 400);
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 shadow-lg ${dark ? "bg-gray-800/80 text-white border border-orange-500 rounded-2xl hover:shadow-yellow-400/30" : "bg-gray-100/70 text-gray-900 border border-blue-400 rounded-2xl"
        } shadow-lg`}
    >
      {/* Container */}
      <div
        className={`flex items-center justify-between px-5 py-4 md:px-10 `}
      >
        {/* Logo */}
        <a href="#banner" className="text-2xl font-bold">
          Port<span className={`${dark ? 'text-yellow-400': 'text-blue-600'} `}>folio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuLink.map((menu) => (
            <button
              key={menu.id}
              onClick={() => handleScroll(menu.id)}
              className={`flex items-center gap-2 text-sm font-medium duration-300 ${dark
                  ? "hover:text-yellow-400 text-gray-200"
                  : "hover:text-blue-500 text-gray-700"
                }`}
            >
              {menu.icon}
              {menu.name}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full shadow-md duration-300 ${dark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
          >
            {dark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>

          {/* Resume (Desktop only) */}
          <a
            href="https://drive.google.com/file/d/1ewYkksnTMzcMpkdw4xSP7HDTba8g3yth/view"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-md duration-300 ${dark
                ? "bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:opacity-90 text-white"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white"
              }`}
          >
            <FaDownload /> Resume
          </a>

          {/* Mobile Menu Button */}
          <button onClick={handleMenus} className="lg:hidden text-2xl">
            {isOpen ? <IoIosClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 transform transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center py-5 gap-8 ${dark
            ? "bg-gray-900 text-white border-l border-yellow-400"
            : "bg-gray-100 text-gray-900 border-l border-blue-400"
          } ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center w-full px-6 border-b border-gray-500 pb-2">
          <h1 className="text-lg font-bold">Menu</h1>
          <button onClick={handleMenus} className="text-4xl">
            <IoIosClose />
          </button>
        </div>

        {menuLink.map((menu) => (
          <button
            key={menu.id}
            onClick={() => handleScroll(menu.id)}
            className={`flex items-center w-full px-6 gap-3 text-lg duration-300 ${dark ? "hover:text-yellow-400" : "hover:text-blue-500"
              }`}
          >
            {menu.icon}
            {menu.name}
          </button>
        ))}

        <a
          href="https://drive.google.com/file/d/1ewYkksnTMzcMpkdw4xSP7HDTba8g3yth/view"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md font-medium duration-300 ${dark
              ? "bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-white"
              : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
            }`}
        >
          <FaDownload />
          Resume
        </a>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 opacity-100 transition-opacity duration-500 lg:hidden"
          onClick={handleMenus}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
