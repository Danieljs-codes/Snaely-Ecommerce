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
      className="flex h-[12.5rem] items-center justify-center overflow-x-hidden lg:h-[45.75rem]"
    >
      {/* <div className="absolute z-10">
        <button onClick={onLeft}>
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={onRight}>
          <ArrowRightIcon className="h-6 w-6" />
        </button>
      </div> */}
      <div className="relative z-10"></div>
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
                    <p className="text-xs font-medium text-white">
                      {slide.hashtag}
                    </p>
                    <h3 className="font-neue text-2xl leading-none text-white">
                      {slide.title}
                    </h3>
                  </div>
                  <Link className="flex  items-center justify-end gap-x-1 rounded-full border border-primary-black-500 px-[0.875rem] py-2 text-xs">
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
