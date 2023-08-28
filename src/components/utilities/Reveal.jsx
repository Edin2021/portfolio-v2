import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, classes, variants, visibility = 0.2 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: visibility });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{}}
      className={classes}
    >
      {children}
    </motion.div>
  );
};
