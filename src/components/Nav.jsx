import { motion as m, AnimatePresence } from 'framer-motion';
import { CloseIcon, HamburgerIcon, LogoIcon } from '../icons';
import { useState } from 'react';

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      <AnimatePresence>
        {openNav ? (
          <m.div
            key={'backdrop'}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: `easeInOut`,
              duration: 0.3,
            }}
            onClick={() => setOpenNav(false)}
            className="fixed inset-0 z-50 bg-black/60 md:hidden"
          >
            <m.div
              initial={{ y: '-100%' }}
              exit={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
              className="absolute inset-x-0 z-50 flex items-center justify-between bg-white px-5 py-10"
            >
              <button
                onClick={() => setOpenNav(!openNav)}
                className="cursor-pointer"
              >
                <CloseIcon />
              </button>
              <ul className="flex gap-10 font-semibold">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#about">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </m.div>
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: openNav ? 2 : 0.3,
              },
            }}
            transition={{
              duration: 0.3,
            }}
            className=" absolute z-50 flex w-full px-5 py-10 md:max-w-lg md:items-center md:px-12 md:py-16 "
          >
            <button
              onClick={() => setOpenNav(!openNav)}
              className="cursor-pointer md:hidden"
            >
              <HamburgerIcon />
            </button>
            <LogoIcon className=" ml-auto mr-auto md:ml-0" />
            <ul className="hidden gap-10 font-semibold text-white drop-shadow-md md:flex">
              <li>
                <a className="border-white pb-2 hover:border-b-2 " href="#">
                  home
                </a>
              </li>
              <li>
                <a className="border-white pb-2 hover:border-b-2 " href="#">
                  shop
                </a>
              </li>
              <li>
                <a
                  className="border-white pb-2 hover:border-b-2 "
                  href="#about"
                >
                  about
                </a>
              </li>
              <li>
                <a className="border-white pb-2 hover:border-b-2 " href="#">
                  contact
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
