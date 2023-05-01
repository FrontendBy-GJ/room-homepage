import { useState } from 'react';
import { aboutDark, aboutLight } from './assets';
import {
  ArrowIcon,
  CloseIcon,
  HamburgerIcon,
  LeftAngleIcon,
  LogoIcon,
  RightAngleIcon,
} from './icons';
import { slides } from './data';
import { AnimatePresence, motion as m } from 'framer-motion';

function Nav() {
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

function Slides({ slide, currentSlide, nextSlide, prevSlide }) {
  return (
    <>
      <m.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          ease: 'easeInOut',
          duration: 0.8,
        }}
        className={` relative md:col-span-3 lg:col-span-6 ${
          slide.id !== currentSlide ? 'hidden' : ''
        } `}
      >
        <img
          src={slide.images.mobile}
          alt={slide.content}
          className=" w-full sm:hidden "
        />
        <img
          src={slide.images.desktop}
          alt={slide.content}
          className=" hidden w-full object-cover sm:inline lg:h-full "
        />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="absolute bottom-0 right-0 bg-black xl:-right-[156px] "
        >
          <button
            onClick={prevSlide}
            className="inline-flex cursor-pointer p-4 transition hover:bg-VeryDarkGray xl:px-8 xl:py-7"
          >
            <LeftAngleIcon />
          </button>
          <button
            onClick={nextSlide}
            className="inline-flex cursor-pointer p-4 transition hover:bg-VeryDarkGray xl:px-8 xl:py-7"
          >
            <RightAngleIcon />
          </button>
        </m.div>
      </m.div>
      <m.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.8,
        }}
        className={` relative col-span-2 px-8 pb-16 pt-12 lg:col-span-4 lg:m-auto xl:p-20 ${
          slide.id !== currentSlide ? 'hidden' : ''
        } `}
      >
        <h1 className=" text-4xl font-semibold xl:text-5xl">{slide.heading}</h1>
        <p className="mt-1 text-sm leading-5 tracking-wide text-DarkGray xl:mt-3">
          {slide.content}
        </p>
        <span className=" mt-6 flex cursor-pointer items-baseline gap-2 uppercase tracking-[15px] transition hover:text-DarkGray">
          {slide.link}
          <ArrowIcon className="fill-current" />
        </span>
      </m.div>
    </>
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    currentSlide !== slides.length
      ? setCurrentSlide(currentSlide + 1)
      : currentSlide === slides.length
      ? setCurrentSlide(1)
      : '';
  };

  const prevSlide = () => {
    currentSlide !== 1
      ? setCurrentSlide(currentSlide - 1)
      : currentSlide === 1
      ? setCurrentSlide(slides.length)
      : '';
  };

  return (
    <div className=" mx-auto min-h-screen max-w-[1440px] bg-white font-spartan ">
      <Nav />

      <main className=" grid grid-cols-1 md:min-h-screen ">
        <section className=" min-h-screen overflow-hidden md:row-span-1 md:grid  md:min-h-0 md:grid-cols-1 lg:grid-cols-10 ">
          {/* <AnimatePresence> */}
          {slides.map((slide) => (
            <Slides
              key={slide.id}
              slide={slide}
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          ))}
          {/* </AnimatePresence> */}
        </section>

        <section
          id="about"
          className=" min-h-screen overflow-hidden md:row-span-1 md:grid md:min-h-0 md:grid-cols-7 "
        >
          <m.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className=" md:col-span-2 "
          >
            <img
              src={aboutDark}
              alt=""
              className=" h-full w-full object-cover "
            />
          </m.div>
          <m.div
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className=" overflow-hidden px-10 py-16 md:col-span-3 md:m-auto xl:px-10 xl:py-0 "
          >
            <h1 className=" text-sm font-bold uppercase tracking-[5px] xl:text-base">
              About our furniture
            </h1>
            <p className=" mt-1 text-sm leading-5 text-DarkGray xl:mt-3 ">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </m.div>
          <m.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className=" md:col-span-2 "
          >
            <img
              src={aboutLight}
              alt=""
              className=" h-full w-full object-cover "
            />
          </m.div>
        </section>
      </main>
    </div>
  );
}

export default App;
