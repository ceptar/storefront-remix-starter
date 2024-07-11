import React from "react";
import { motion } from "framer-motion";

// variants
const svgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};
const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};

const DiscoLightningAni = () => {
  return (
    <motion.div className="demo">
      <motion.svg
        width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          stroke="#000"
          d="M29.3755 60.0084C30.241 60.0859 31.1176 60.1254 32.0034 60.1254C47.9983 60.1254 60.9465 47.2077 60.9465 31.353C60.9465 19.3088 53.5614 8.99256 43.0564 4.66369L33.3632 24.0823C33.0654 24.6789 33.4993 25.3804 34.1661 25.3804H47.8684C48.5597 25.3804 48.9912 26.1291 48.645 26.7273L29.3755 60.0084Z"
          fill="none"
          strokeWidth="2"
          variants={pathVariants}
        />
        <motion.path
          stroke="#000"
          d="M23.1128 3.87109C11.4672 7.60933 3.05273 18.4967 3.05273 31.353C3.05273 45.1073 12.7975 56.6513 25.8272 59.4685L30.6871 39.8515C30.8273 39.2856 30.3991 38.7384 29.8162 38.7384H17.6646C17.1028 38.7384 16.6793 38.2281 16.7827 37.676L23.1128 3.87109Z"
          fill="none"
          strokeWidth="2"
          variants={pathVariants}
        />
      </motion.svg>
    </motion.div>
  );
};

export default DiscoLightningAni;