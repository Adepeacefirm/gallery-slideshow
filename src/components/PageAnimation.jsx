import { motion } from "framer-motion";
import React from "react";

const PageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="transition-opacity duration-500 ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default PageAnimation;
