// import {motion} from 'moti'
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { motion, useScroll, useTransform } from "motion/react";
import RocketImage from "../assets/rocketPng-Photoroom.png";
import ScrollTriggered from "./animation/Rought";

const Temp = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const split = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <div ref={ref} style={{ height: "200vh", background: "black" }}>
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "200px",
          height: "300px",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "50%",
            background: "white",
            scaleY: split,
          }}
        />
        <motion.div
          style={{
            width: "100%",
            height: "50%",
            background: "white",
            scaleY: split,
            originY: 1,
          }}
        />
      </motion.div>

      <motion.img
        src={RocketImage}
        alt="Rocket"
        style={{
          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          y,
        }}
      />

      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: finalOpacity,
          color: "white",
          fontSize: "2rem",
        }}
      >
        Hello World
      </motion.div>
    </div>
  );
};
export default Temp;
