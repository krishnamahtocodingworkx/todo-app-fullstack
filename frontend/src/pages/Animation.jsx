import React from "react";
import { motion, useScroll } from "motion/react";
import PathDrawing from "./animation/index";
import SharedLayoutAnimation from "./animation/Tab";
import Rectangle from "./animation/Rectangle";
const Animation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="animation--wrapper" style={{ position: "relative" }}>
      <div style={{display:'flex', gap:"15rem"}}>
        <motion.button
          className="animation--button"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          whileHover={{
            scale: 1.2,
            backgroundColor: "red",
          }}
          whileTap={{
            rotate: "360deg",
            translateX: 500,
          }}
        >
          Click me
        </motion.button>
        <Rectangle />
      </div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          background: "green",
          height: "5px",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          transformOrigin: "left",
          borderRadius: "15px",
          zIndex: 100,
        }}
      />
      <motion.div
        className="box--1"
        animate={{
          x: [0, 600, 1200, 600, 0],
          y: [200, 0, 200, 500, 200],
          rotate: 360,
        }}
        transition={{ delay: 2, duration: 3, ease: "anticipate", repeat: 2 }}
      >
        <motion.div
          className="box--1--child"
          animate={{
            rotate: 360,
            x: [0, 100, 100, 0, 0],
            y: [0, 0, 100, 100, 0],
          }}
          transition={{
            delay: 1,
            duration: 1.5,
            ease: "circIn",
            repeat: Infinity,
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0 }}
        whileDrag={{ scale: 1.1, cursor: "pointer" }}
        className="draggable--box"
      >
        Drag me
      </motion.div>

      <PathDrawing />

      <SharedLayoutAnimation />
    </div>
  );
};

export default Animation;
