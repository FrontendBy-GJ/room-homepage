import { useState } from 'react';
import { mobileHero1, aboutDark, aboutLight, desktopHero1 } from './assets';
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
        <div className=" absolute inset-x-0 z-50 flex px-5 py-10 md:max-w-lg md:items-center md:px-12 md:py-16 ">
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
    <div className=" min-h-screen bg-white font-spartan ">
      <Nav />
      <main className=" grid grid-cols-1 md:min-h-screen ">
        <section className=" min-h-screen md:row-span-1 md:grid md:min-h-0  md:grid-cols-1 lg:grid-cols-10 ">
          <div className=" relative md:col-span-3 lg:col-span-6 ">
            <img src={mobileHero1} alt="" className=" w-full sm:hidden " />
            <img
              src={desktopHero1}
              alt=""
              className=" hidden w-full object-cover sm:inline lg:h-full "
            />
            <div className="absolute bottom-0 right-0 bg-black xl:-right-[156px] ">
              <div className="inline-flex p-4 xl:px-8 xl:py-7">
                <LeftAngleIcon className="cursor-pointer" />
              </div>
              <div className="inline-flex p-4 xl:px-8 xl:py-7">
                <RightAngleIcon className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=" col-span-2 px-8 pb-16  pt-12 lg:col-span-4 lg:m-auto xl:p-20 ">
            <h1 className=" text-4xl font-semibold xl:text-5xl">
              Discover innovative ways to decorate
            </h1>
            <p className="mt-1 text-sm leading-5 tracking-wide text-DarkGray xl:mt-3">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <span className=" mt-6 flex cursor-pointer items-baseline gap-2 uppercase tracking-[15px]">
              Shop now
              <ArrowIcon />
            </span>
          </div>
        </section>

        <section
          id="about"
          className=" min-h-screen md:row-span-1 md:grid md:min-h-0 md:grid-cols-7 "
        >
          <div className=" md:col-span-2 ">
            <img
              src={aboutDark}
              alt=""
              className=" h-full w-full object-cover "
            />
          </div>
          <div className=" px-10 py-16 md:col-span-3 md:m-auto xl:px-10 xl:py-0 ">
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
          </div>
          <div className=" md:col-span-2 ">
            <img
              src={aboutLight}
              alt=""
              className=" h-full w-full object-cover "
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
