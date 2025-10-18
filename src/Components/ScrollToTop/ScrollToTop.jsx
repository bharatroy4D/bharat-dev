import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext"; // 🌙 Theme context import

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Theme-based classes
  const bgClass = theme === "dark" ? "bg-slate-800/70" : "bg-white/90";
  const borderClass = theme === "dark" ? "border-amber-400" : "border-teal-500";
  const iconClass = theme === "dark" ? "text-white" : "text-teal-700";

  return (
    <AnimatePresence>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-2 z-50 p-2.5 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 border ${borderClass} ${bgClass}`}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }} // up-down animation
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <MdOutlineKeyboardDoubleArrowUp className={`text-2xl ${iconClass}`} />
          </motion.div>
        </button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
