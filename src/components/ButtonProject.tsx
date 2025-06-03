import { motion } from "framer-motion";
import arrowIcon from "../../public/Arrow-project.svg";

interface ButtonProps {
  children: string;
  href: string;
}

const backgroundVariant = {
  initial: {
    backgroundColor: "#1b1b1b",
  },
  hover: {
    backgroundColor: "#fcfaf8",
    scale: 1.08,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    backgroundColor: "#1b1b1b",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const firstTextVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -20,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant = {
  initial: { y: 20, opacity: 0, rotate: -10 },
  hover: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 20,
    opacity: 0,
    rotate: -10,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const iconVariant = {
  initial: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondIconVariant = {
  initial: { y: 20, opacity: 0, rotate: -10 },
  hover: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 20,
    opacity: 0,
    rotate: -18,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export const Button = ({ children, href }: ButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={backgroundVariant}
      className="flex flex-row items-center gap-x-1 sm:gap-x-3 px-4 py-1 sm:py-1 sm:px-5 bg-[#ed5b2b] border-1 border-secondary rounded-4xl font-roboto font-light text-[16px] sm:text-xl hover:cursor-pointer active:translate-y-2 z-110 overflow-hidden duration-250"
    >
      <div className="overflow-hidden relative">
        <motion.p variants={firstTextVariant} className="text-secondary">
          {children}
        </motion.p>

        <motion.p
          variants={secondTextVariant}
          aria-hidden
          className="absolute top-0 left-0 text-[#1b1b1b]"
        >
          {children}
        </motion.p>
      </div>

      <div className="relative overflow-hidden">
        <motion.img
          variants={iconVariant}
          src="../../public/Arrow-project.svg"
          alt="Arrow icon"
          className=" bg-transparent p-1 sm:p-1 scale-70 md:scale-90"
        ></motion.img>

        <motion.img
          variants={secondIconVariant}
          aria-hidden
          src="../../public/Arrow-project.svg"
          alt="Arrow icon"
          className="absolute top-0 left-0 bg-primary p-1 sm:p-1 scale-70 md:scale-90"
        ></motion.img>
      </div>
    </motion.a>
  );
};
