import { motion } from "framer-motion";
import { useRef } from "react";

const words = [
  "Shirt",
  "Cap",
  "Trouser",
  "Shorts",
  "Shoes",
  "Sock",
  "Jacket",
  "Hoodie",
  "Glasses",
  "Bag",
  "Jeans",
  "Watch",
  "Crewneck",
];

const concatenatedWords = [...words, ...words];

function Star() {
  return (
    <svg
      className="mr-8"
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.5L7.23885 5.26115L12 6.5L7.23885 7.73885L6 12.5L4.76115 7.73885L0 6.5L4.76115 5.26115L6 0.5Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

const marqueeVariants = {
  animate: {
    x: [0, -2545],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

function Marquee() {
  const marqueeWidth = useRef(null);

  return (
    <div className="relative mb-4 h-16 overflow-x-hidden bg-primary-black-500 py-3">
      <motion.div
        animate="animate"
        variants={marqueeVariants}
        className="marquee absolute flex flex-shrink-0 gap-x-8 overflow-x-hidden whitespace-nowrap"
        ref={marqueeWidth}
      >
        {concatenatedWords.map((word, i) => (
          <div
            key={i}
            className="flex items-center gap-x-8 font-neue text-lg text-white md:text-2xl"
          >
            {word}
            {<Star />}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
