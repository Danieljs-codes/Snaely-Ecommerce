import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuSearch, LuShoppingCart, LuUser } from 'react-icons/lu';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { IconContext } from 'react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { menuSlide, slide } from './NavbarAnim';

import Logo from './Logo';
import Dropdown from './Dropdown';
import Modal from './Modal';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };
  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between border-b border-b-primary-black-500 px-4 py-7">
        <button
          onClick={handleNavOpen}
          className="p-2 hover:rounded-md hover:bg-grey-200 md:hidden"
        >
          <IconContext.Provider value={{ size: '24px' }}>
            <HiBars3 />
          </IconContext.Provider>
        </button>
        <ul className="hidden items-center gap-x-8 md:flex xl:gap-x-14">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/product">Products</Link>
          </li>

          <li>
            <Link to="/cart">Contact Us</Link>
          </li>
        </ul>
        <Logo />
        <div className="flex items-center gap-x-4">
          <IconContext.Provider value={{ size: '24px' }}>
            <button>
              <LuSearch />
            </button>
            <Link to="/cart">
              <LuShoppingCart />
            </Link>
            <div className="hidden cursor-pointer md:block">
              <Dropdown />
              <Modal
                title="Delete Account"
                description="Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."
              />
            </div>
          </IconContext.Provider>
        </div>
        <AnimatePresence mode="wait">
          {isNavOpen && (
            <motion.div
              className="absolute inset-0 min-h-full overflow-hidden bg-primary-black-500 p-4"
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <div className="flex justify-end">
                <button onClick={handleNavClose}>
                  <IconContext.Provider value={{ size: '24px', color: '#fff' }}>
                    <HiXMark />
                  </IconContext.Provider>
                </button>
              </div>
              <div className="h-full">
                <ul className="flex h-full flex-col justify-center gap-y-16 text-left text-5xl font-bold text-gray-50">
                  <motion.li
                    custom={1}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    variants={slide}
                  >
                    <Link to="/">Home</Link>
                  </motion.li>

                  <motion.li
                    custom={2}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    variants={slide}
                  >
                    <Link to="/product">Products</Link>
                  </motion.li>

                  <motion.li
                    custom={3}
                    animate="enter"
                    exit="exit"
                    initial="initial"
                    variants={slide}
                  >
                    <Link to="/cart">Contact Us</Link>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
