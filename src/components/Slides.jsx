import { ArrowIcon, LeftAngleIcon, RightAngleIcon } from '../icons';
import { motion as m } from 'framer-motion';

export default function Slides({ slide, currentSlide, nextSlide, prevSlide }) {
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
