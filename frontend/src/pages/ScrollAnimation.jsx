import React, { useEffect, useState } from "react";
import "./style.css";
import { motion, useScroll, useTransform } from "motion/react";
import RocketImage from "../assets/rocketPng-Photoroom.png";
import ScrollTriggered from "./animation/Rought";
import Temp from "./Temp";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const [doorOpen, setDoorOpen] = useState(false);

  // Transform values for the rocket moving up
  const rocketY = useTransform(scrollYProgress, [0, 1], [300, -500]);

  useEffect(() => {
    if (scrollYProgress.get() > 0.9) {
      setDoorOpen(true);
    }
  }, [scrollYProgress]);
  return (
    // <div className="main--container">
    //   <div className="main--wrapper">
    //     <motion.img
    //       src={RocketImage}
    //       style={{ height: "100px", width: "100px", background: "#dadada" }}
    //       initial={{ opacity: 0, scale: 0 }}
    //       animate={{
    //         opacity: 1,
    //         scale: 1,
    //         x: [0, 800, 800, 0, 0],
    //         y: [0, 0, 600, 600, 0],
    //       }}
    //     />
    //     <motion.div
    //       className="ball"
    //       initial={{ opacity: 0, scale: 0 }}
    //       animate={{ opacity: 1, scale: 1 }}
    //       transition={{
    //         delay: 0.5,
    //         bounce: 0.5,
    //         visualDuration: 0.5,
    //         type: "spring",
    //       }}
    //     >
    //       {scrollYProgress}
    //     </motion.div>
    //     <motion.div
    //       style={{
    //         scaleX: scrollYProgress,
    //         background: "green",
    //         height: "5px",
    //         width: "100vw",
    //         position: "fixed",
    //         top: 0,
    //         left: 0,
    //         transformOrigin: "left",
    //         borderRadius: "15px",
    //         zIndex: 100,
    //       }}
    //     ></motion.div>
    //   </div>
    //   <div className="second--wrapper">
    //     <div className="rocket--image--container">
    //       <motion.img
    //         className="rocket--image"
    //         src={RocketImage}
    //         alt="image"
    //         style={{}}
    //       />
    //     </div>
    //   </div>
    //   {/* <ScrollTriggered /> */}
    // </div>

    // <div className="container">
    //   {/* The "door" that splits open */}
    //   {!doorOpen && (
    //     <motion.div
    //       className="door"
    //       initial={{ opacity: 1 }}
    //       animate={{ opacity: scrollYProgress.get() > 0.9 ? 0 : 1 }}
    //     >
    //       <motion.div
    //         className="door-left"
    //         animate={doorOpen ? { x: "-100%" } : {}}
    //       />
    //       <motion.div
    //         className="door-right"
    //         animate={doorOpen ? { x: "100%" } : {}}
    //       />
    //     </motion.div>
    //   )}

    //   {/* Rocket Image */}
    //   <motion.img
    //     src={RocketImage}
    //     alt="Rocket"
    //     className="rocket"
    //     style={{ y: rocketY }}
    //   />

    //   {/* Final Screen */}
    //   {doorOpen && (
    //     <div className="final-screen">
    //       <h1 className="final-text">Hello World</h1>
    //     </div>
    //   )}
    // </div>

    <Temp />
  );
};

export default ScrollAnimation;
