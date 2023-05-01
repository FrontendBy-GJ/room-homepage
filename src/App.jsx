import { useState } from 'react';
import { aboutDark, aboutLight } from './assets';
import Nav from './components/Nav';
import Slides from './components/Slides';
import { slides } from './data';
import { motion as m } from 'framer-motion';

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
          {slides.map((slide) => (
            <Slides
              key={slide.id}
              slide={slide}
              currentSlide={currentSlide}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          ))}
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
