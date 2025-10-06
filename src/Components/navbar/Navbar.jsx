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

  const handleToggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const handleMenus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="poppins relative z-50">
      <div className="flex items-center justify-between bg-gray-800 text-white rounded-2xl border border-orange-500 p-3">
        {/* Logo */}
        <h1 className="text-2xl roboto font-bold">
          Port<span className="text-yellow-400">folio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuLink.map((menu) => (
            <a
              key={menu.id}
              href={menu.id}
              className="flex items-center gap-2 cursor-pointer hover:text-blue-400 duration-300"
            >
              {menu.icon}
              <span className="text-sm">{menu.name}</span>
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white duration-300"
          >
            {dark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>

          {/* Hamburger Icon */}
          <button onClick={handleMenus} className="lg:hidden text-2xl">
            {isOpen ? <IoIosClose className="text-3xl" /> : <RxHamburgerMenu />}
          </button>

          {/* Resume (Desktop only) */}
          <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300">
            <FaDownload className="text-white" />
            Resume
          </button>
        </div>
      </div>

      {/* Mobile Right Side Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-gray-900 text-white border-l border-gray-700 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center py-10 gap-8`}
      >
        {/* Close Button */}
        <button
          onClick={handleMenus}
          className="absolute top-4 right-4 text-3xl"
        >
          <IoIosClose />
        </button>

        {/* Menu Links */}
        {menuLink.map((menu) => (
          <a
            key={menu.id}
            href={menu.id}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-lg hover:text-yellow-400 duration-300"
          >
            {menu.icon}
            {menu.name}
          </a>
        ))}

        {/* Resume Button */}
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300">
          <FaDownload className="text-white" />
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
