"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <motion.a
          href="#"
          className="text-white text-lg md:text-xl font-light tracking-luxury"
          whileHover={{ opacity: 0.7 }}
        >
          JESKO JETS
        </motion.a>

        <div className="hidden md:flex items-center gap-12">
          {["FLEET", "EXPERIENCE", "MEMBERSHIP"].map((item) => (
            <motion.a
              key={item}
              href="#"
              className="text-white text-xs tracking-widest font-light"
              whileHover={{ opacity: 0.7 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-[1px] bg-white mb-1.5" />
          <div className="w-4 h-[1px] bg-white" />
        </motion.button>
      </div>
    </motion.nav>
  );
};
