import { motion } from "framer-motion";
import "./SkilsCircle.css"; // Assuming you're styling the circles here

export const SkilsCircle = () => {
  // Configuration for the outer circle rotation
  const outerCircleVariants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 10, // Adjust for speed
        ease: "linear",
      },
    },
  };

  // Configuration for the inner circle rotation
  const innerCircleVariants = {
    rotate: {
      rotate: -360,
      transition: {
        repeat: Infinity,
        duration: 6, // Adjust for speed
        ease: "linear",
      },
    },
  };

  return (
    <div className="circle-container">
      {/* Outer rotating circles */}
      <motion.div
        className="outer-circle"
        variants={outerCircleVariants}
        animate="rotate"
      >
        {/* Adjust the number of outer circles dynamically */}
        <div className="circle">HTML</div>
        <div className="circle">React</div>
        <div className="circle">CSS</div>
        <div className="circle">CSS</div>
        <div className="circle">CSS</div>

        {/* Add more circles as needed */}
      </motion.div>

      {/* Inner static circles with self-rotation */}
      <motion.div
        className="inner-circle"
        variants={innerCircleVariants}
        animate="rotate"
      >
        <div className="circle">Github</div>
        <div className="circle">SQL Server</div>
        {/* Add more inner circles as needed */}
      </motion.div>
    </div>
  );
};
