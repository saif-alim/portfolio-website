import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export const ToggleTheme = () => {
  const [isLightMode, toggle] = useState(false);

  useMediaQuery(
    {
      query: "(prefers-color-scheme: light)",
    },
    undefined,
    (isSystemLight) => toggle(isSystemLight),
  );

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isLightMode) {
      htmlElement.classList.add("light");
    } else {
      htmlElement.classList.remove("light");
    }
  }, [isLightMode]);

  const properties = {
    sun: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  // Choose the current properties based on the state.
  const current = isLightMode ? properties.moon : properties.sun;

  // Map react-spring's config to Framer Motion's spring parameters.
  const springTransition = {
    type: "spring",
    mass: properties.springConfig.mass,
    stiffness: properties.springConfig.tension,
    damping: properties.springConfig.friction,
  };

  return (
    <div className="App">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ cursor: "pointer" }}
        animate={{ transform: current.transform }}
        transition={springTransition}
        onClick={() => {
          toggle((prev) => !prev);
        }}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            // The circle used for masking is animated for its cx and cy attributes.
            cx="12"
            cy="4"
            r="9"
            fill="black"
            animate={{ cx: current.cx, cy: current.cy }}
            transition={springTransition}
          />
        </mask>
        <motion.circle
          fill="currentColor"
          cx="12"
          cy="12"
          mask="url(#mask)"
          animate={{ r: current.r }}
          transition={springTransition}
        />

        <motion.g
          fill="currentColor"
          animate={{ opacity: current.opacity }}
          transition={springTransition}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </div>
  );
};
