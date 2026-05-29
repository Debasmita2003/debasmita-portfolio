import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">

          Debasmita

        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#home" className="hover:text-sky-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-sky-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-sky-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-sky-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-white"
        >

          {menuOpen ? <HiX /> : <HiMenuAlt3 />}

        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -20 }}

            transition={{ duration: 0.3 }}

            className="md:hidden bg-[#0b1120]/95 backdrop-blur-2xl border-t border-white/10"
          >

            <div className="flex flex-col items-center gap-8 py-10 text-lg text-gray-300">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400 transition"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-400 transition"
              >
                Contact
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );
};

export default Navbar;