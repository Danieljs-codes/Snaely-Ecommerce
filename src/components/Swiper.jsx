import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/solid';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';

function Swiper({ slides }) {
  const [position, setPosition] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => onRight(),
    onSwipedRight: () => onLeft(),
  });

  const onRight = () => {
    if (position < slides.length - 1) setPosition(position + 1);
    if (position === slides.length - 1) setPosition(0);
  };

  const onLeft = () => {
    if (position > 0) setPosition(position - 1);
    if (position === 0) setPosition(slides.length - 1);
  };

  return (
    <div
      {...handlers}
      className="relative flex h-[12.5rem] items-center justify-center overflow-x-hidden lg:h-[30.75rem]"
    >
      <button className="absolute left-0 z-10 bg-white p-4 rounded-full" onClick={onLeft}>
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <button className="absolute right-0 z-10 bg-white p-4 rounded-full" onClick={onRight}>
        <ArrowRightIcon className="h-6 w-6" />
      </button>
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div
            initial={{ scale: 0, rotation: -180 }}
            animate={{
              scale: index === position ? 1 : 0.8,
              rotation: 0,
              translateX: `${(index - position) * 100}vw`,
            }}
            transition={{
              type: 'tween ',
              stiffness: 260,
              damping: 20,
            }}
            key={index}
            className="overlay absolute inset-0 overflow-hidden"
          >
            <div className="relative h-full w-full p-4">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={slide.img}
                alt=""
              />
              <div className="absolute inset-0 h-full w-full items-end bg-primary-black-500/20">
                <div className="flex h-full items-end justify-end p-4">
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white lg:text-base">
                      {slide.hashtag}
                    </p>
                    <h3 className="font-neue text-2xl leading-none text-white lg:text-[3.25rem]">
                      {slide.title}
                    </h3>
                  </div>
                  <Link
                    to="/product"
                    className="flex  items-center justify-end gap-x-1 rounded-full border border-primary-black-500 px-[0.875rem] py-2 text-xs lg:px-6 lg:py-4"
                  >
                    Shop Now{' '}
                    <span>
                      <ArrowUpRightIcon className="h-4 w-4 text-primary-black-500" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Swiper;
