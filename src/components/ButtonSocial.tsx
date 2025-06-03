import { motion } from "framer-motion";

interface ButtonProps {
  children: string;
  href: string;
}

const backgroundVariant = {
  initial: {
    backgroundColor: "#ed5b2b",
  },
  hover: {
    backgroundColor: "#fcfaf8",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    backgroundColor: "#ed5b2b",
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
  initial: {
    y: 20,
  },
  hover: {
    y: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 20,
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
      className="py-1 px-8 bg-[#ed5b2b] border-2 border-secondary rounded-2xl font-roboto font-light hover:cursor-pointer z-110"
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
    </motion.a>
  );
};
