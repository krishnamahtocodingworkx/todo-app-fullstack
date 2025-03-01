import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import RocketImage from "./assets/rocketPng-Photoroom.png";

const Abc = () => {
  return (
    <div style={{ background: "black", color: "white" }}>
      <Hero />
      <Content />
    </div>
  );
};

const HEIGHT = 1500;
const Hero = () => {
  return (
    <div
      style={{
        height: `calc(${HEIGHT}px + 100vh)`,
        background: "black",
        position: "relative",
      }}
    >
      <CenterImage />
      <Images />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const opacity = useTransform(scrollY, [HEIGHT, HEIGHT + 500], [1, 0]);
  const backgroundSize = useTransform(
    scrollY,
    [0, HEIGHT + 500],
    ["15%", "200%"]
  );
  const clip1 = useTransform(scrollY, [0, HEIGHT], [25, 0]);

  const clip2 = useTransform(scrollY, [0, HEIGHT], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1} ${clip1} , ${clip2} ${clip1} , ${clip2} ${clip2}, ${clip1} ${clip2})`;
  console.log("progress :", scrollYProgress);

  const [isHidden, setIsHidden] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    {
      if (!isHidden && latest > 0.05) {
        const ele = document.getElementById("button");
        ele.style.display = "none";
        setIsHidden((prev) => !prev);
      }
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
      style={{
        opacity,
        backgroundSize,
        clipPath,
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100vw",
        backgroundImage:
          "url('https://img.freepik.com/free-photo/cartoon-depiction-gates-heaven_23-2151539548.jpg?uid=R174446303&ga=GA1.1.1484466115.1738050257&semt=ais_hybrid')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.button
        id="button"
        style={{
          marginTop: "150px",
          padding: "10px 15px",
          background: "#dadada",
          border: "none",
          borderRadius: "10px",
          fontWeight: "600",
          fontSize: "1.5rem",
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          display: "none",
        }}
        onClick={() =>
          document
            .getElementById("content")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Click Me 😊
      </motion.button>
    </motion.div>
  );
};

const Images = () => {
  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        padding: "0 2rem",
        marginTop: "6rem",
      }}
    >
      <RocketImageBox
        start={-200}
        end={200}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />

      <RocketImageBox
        start={0}
        end={-500}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />
    </div>
  );
};
const RocketImageBox = ({ start, end, style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) =>
  //   console.log(latest)
  // );

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const scale = useTransform(scrollYProgress, [0.75, 0], [1, 0.85]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      ref={ref}
      src={RocketImage}
      style={{
        opacity,
        transform,
        ...style,
      }}
    />
  );
};

const Content = () => {
  return (
    <section
      id="content"
      style={{
        height: "100vh",
        background: "white",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        src="https://img.freepik.com/free-vector/red-devil-cartoon-character-with-facial-expression_1308-63958.jpg?t=st=1740554824~exp=1740558424~hmac=5665601a4c2b7e70ec3776de54136b853b78dd682f6a84eecab55f621c294e77&w=996"
        style={{ height: 200, width: 200 }}
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      />
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        style={{ fontSize: "3rem", textAlign: "center" }}
      >
        Main Page 😊
      </motion.h1>
    </section>
  );
};

export default Abc;
