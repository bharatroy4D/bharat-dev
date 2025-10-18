import React, { useState, useEffect } from "react";
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
    { id: "#banner", name: "Home", icon: <FaHome /> },
    { id: "#about", name: "About", icon: <FaUser /> },
    { id: "#services", name: "Services", icon: <FaServicestack /> },
    { id: "#projects", name: "Projects", icon: <FaProjectDiagram /> },
    { id: "#contact", name: "Contact", icon: <FaEnvelope /> },
  ];

  const [dark, setDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#banner");

  // 🌙 Toggle Dark/Light Mode
  const handleToggle = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  // 🍔 Toggle Mobile Menu
  const handleMenus = () => {
    setIsOpen(!isOpen);
  };

  // 🧭 Smooth Scroll Function
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsOpen(false), 400);
  };

  // 🎯 Detect Active Section While Scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;

      menuLink.forEach((menu) => {
        const section = document.querySelector(menu.id);
        if (section) {
          const sectionTop = section.offsetTop - 120; // navbar height adjust
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(menu.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="poppins fixed top-4 left-0 right-0 z-50 flex justify-center">
      {/* Navbar Container */}
      <div className="flex items-center justify-between bg-gray-800 text-white rounded-2xl border border-orange-500 p-3 shadow-lg hover:shadow-orange-400/30 w-[95%] lg:w-[80%] transition-all duration-300">
        {/* Logo */}
        <a href="#banner" className="text-2xl roboto font-bold">
          Port<span className="text-yellow-400">folio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuLink.map((menu) => (
            <button
              key={menu.id}
              onClick={() => handleScroll(menu.id)}
              className={`flex items-center gap-2 cursor-pointer duration-300 ${
                activeSection === menu.id
                  ? "text-yellow-400"
                  : "hover:text-yellow-400"
              }`}
            >
              {menu.icon}
              <span className="text-sm">{menu.name}</span>
            </button>
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

          {/* Hamburger Icon (Mobile) */}
          <button onClick={handleMenus} className="lg:hidden text-2xl">
            {isOpen ? (
              <IoIosClose className="text-3xl" />
            ) : (
              <RxHamburgerMenu />
            )}
          </button>

          {/* Resume Button (Desktop only) */}
          <a
            href="https://drive.google.com/file/d/1ewYkksnTMzcMpkdw4xSP7HDTba8g3yth/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300"
          >
            <FaDownload className="text-white" />
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Right Side Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-2/3 bg-gray-900 text-white border-l border-gray-700 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center py-5 gap-8`}
      >
        {/* Header & Close Button */}
        <div className="flex justify-between items-center w-full px-6 border-b border-orange-500 pb-2">
          <h1 className="text-lg font-bold">Menu</h1>
          <button onClick={handleMenus} className="text-4xl">
            <IoIosClose />
          </button>
        </div>

        {/* Menu Links */}
        {menuLink.map((menu) => (
          <button
            key={menu.id}
            onClick={() => handleScroll(menu.id)}
            className={`flex items-center w-full px-6 gap-3 text-lg duration-300 ${
              activeSection === menu.id
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            {menu.icon}
            {menu.name}
          </button>
        ))}

        {/* Mobile Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ewYkksnTMzcMpkdw4xSP7HDTba8g3yth/view"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 duration-300"
        >
          <FaDownload className="text-white" />
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
    </div>
  );
};

export default Navbar;
