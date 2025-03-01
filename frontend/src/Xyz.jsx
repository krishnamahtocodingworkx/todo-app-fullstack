import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RocketIcon from "./assets/rocketPng-Photoroom.png";

const Xyz = () => {
  const { scrollY } = useScroll();

  // Circle animations
  const circleOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const circleScale = useTransform(scrollY, [0, 400], [1, 0.5]);

  // Rocket animations
  const rocketOpacity = useTransform(scrollY, [250, 600], [0, 1]);
  const rocketScale = useTransform(scrollY, [300, 600], [1, 1.1]);
  const rocketRotate = useTransform(
    scrollY,
    [300, 350, 400, 450, 500, 550, 600],
    [0, 20, 0, -20, 0, 20, 0]
  );

  //   const rocketY = useTransform(
  //     scrollY,
  //     [600, 700, 800, 900, 1000, 1100, 1200],
  //     [0, -100, -200, -300, -400, -500, -550]
  //   );
  //   const rocketX = useTransform(
  //     scrollY,
  //     [600, 700, 800, 900, 1000, 1100, 1200],
  //     [0, 100, 200, 300, 400, 500, 400]
  //   );

  const rocketY = useTransform(scrollY, [600, 1200], [0, -550]);
  //   const rocketX = useTransform(scrollY, [600, 1200], [0, 400]);

  return (
    <div style={{ height: "300vh", background: "black", position: "relative" }}>
      <motion.div
        style={{
          backgroundColor: "black",
          position: "fixed",
          width: "150px",
          height: "150px",
          top: "50%",
          left: "50%",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          opacity: circleOpacity,
          scale: circleScale,
        }}
      />

      {/* Rocket Image */}
      <motion.img
        src={RocketIcon}
        style={{
          position: "fixed",
          width: "120px",
          height: "120px",
          objectFit: "contain",
          top: "50%",
          left: "51.1%",
          transform: "translate(-50%, -50%)",
          opacity: rocketOpacity,
          y: rocketY,
          //   x: rocketX,
          scale: rocketScale,
          rotate: rocketRotate,
        }}
      />

      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        style={{
          fontSize: "3rem",
          textAlign: "center",
          color: "white",
          height: "50vh",
          background: "black",
          marginTop: "200vh",
          paddingTop: "50px",
        }}
      >
        Main Page
      </motion.h1>
    </div>
  );
};

export default Xyz;
