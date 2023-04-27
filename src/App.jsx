import { useState } from 'react';
import { mobileHero1, aboutDark, aboutLight } from './assets';
import {
  ArrowIcon,
  CloseIcon,
  HamburgerIcon,
  LeftAngleIcon,
  LogoIcon,
  RightAngleIcon,
} from './icons';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <nav>
      {openNav ? (
        <div
          onClick={() => setOpenNav(false)}
          className="fixed inset-0 z-50 bg-black/60 md:hidden"
        >
          <div className="absolute inset-x-0 flex items-center justify-between bg-white px-5 py-10">
            <CloseIcon
              onClick={() => setOpenNav(!openNav)}
              className="cursor-pointer"
            />
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
          </div>
        </div>
      ) : (
        <div className=" absolute inset-x-0 z-50 flex px-5 py-10 md:max-w-lg md:items-center md:px-16 md:py-20 ">
          <HamburgerIcon
            onClick={() => setOpenNav(!openNav)}
            className="cursor-pointer md:hidden"
          />
          <LogoIcon className=" ml-auto mr-auto md:ml-0" />
          <ul className="hidden gap-10 font-semibold text-white drop-shadow-md md:flex">
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
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <div className=" flex min-h-screen flex-col  bg-slate-50 font-spartan">
      <main>
        <Nav />

        <section className=" h-screen">
          <div className=" relative ">
            <img src={mobileHero1} alt="" className=" w-full " />
            <div className="absolute bottom-0 right-0 ">
              <div className="inline-flex bg-black p-4">
                <LeftAngleIcon className="cursor-pointer" />
              </div>
              <div className="inline-flex bg-black p-4">
                <RightAngleIcon className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="p-9">
            <h1 className=" text-4xl font-semibold">
              Discover innovative ways to decorate
            </h1>

            <p className="mt-1 text-xs leading-5 tracking-widest text-DarkGray">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>

            <span className="mt-6 flex cursor-pointer items-baseline gap-2  uppercase tracking-[15px]">
              Shop now
              <ArrowIcon />
            </span>
          </div>
        </section>
        <section id="about" className=" h-screen">
          <div className="  ">
            <img src={aboutDark} alt="" className=" w-full " />
          </div>
          <div className="p-9">
            <h1 className=" text-xs font-bold uppercase tracking-[5px]">
              About our furniture
            </h1>

            <p className="mt-1 text-xs leading-5 tracking-widest text-DarkGray">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="  ">
            <img src={aboutLight} alt="" className=" w-full " />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
