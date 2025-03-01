import * as motion from "motion/react-client";
export default function Gate() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
      }}
      style={ball}
      whileTap={{
        
      }}
    />
  );
}

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#ddffff",
  borderRadius: "5%",
};
