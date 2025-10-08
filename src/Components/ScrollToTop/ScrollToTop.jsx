import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <AnimatePresence>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-2 z-50 p-2.5 rounded text-white text-xl shadow-lg hover:scale-110 transition-transform duration-300 border border-amber-400"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }} // up-down animation
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <MdOutlineKeyboardDoubleArrowUp />
          </motion.div>
        </button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
