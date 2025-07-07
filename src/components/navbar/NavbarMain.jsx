import React, { useState } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import NavbarBtn from './NavbarBtn';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from 'framer-motion';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className='max-w-[1300px] mx-auto px-0 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 mt-0'>
      {/* Main Navbar Container */}
      <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-2 rounded-2xl border-[0.5px] border-lightblue'>
        <NavbarLogo />
        
        {/* Desktop Navigation */}
        <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        
        <NavbarBtn />
      </div>

      {/* Mobile Toggle Button */}
      <div className='flex lg:hidden sm:block p-2 items-center justify-center'>
        <button 
          className='text-2xl p-3 border border-white rounded-full text-white hover:text-cyan transition-colors bg-black'
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
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
            className="lg:hidden absolute top-full left-0 w-full mt-2 bg-cyan text-white rounded-xl border-[0.5px] border-lightblue shadow-xl"
          >
            <div className="flex flex-col p-4 space-y-4 items-center">
              <NavbarLinks mobile />
              <div className="pt-2 border-t-[0.5px] border-lightblue">
                <NavbarBtn />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarMain;
