npm install framer-motion

import React from "react";

const WireframeCube = () => {
  return (
    <div className="relative flex items-center justify-center">
    
      <svg width="200" height="200" viewBox="0 0 100 100">
       
        <polygon points="30,20 70,20 85,50 45,50" stroke="green" fill="none" />
      
        <polygon points="20,40 60,40 75,70 35,70" stroke="green" fill="none" />
       
        <line x1="30" y1="20" x2="20" y2="40" stroke="green" />
        <line x1="70" y1="20" x2="60" y2="40" stroke="green" />
        <line x1="85" y1="50" x2="75" y2="70" stroke="green" />
        <line x1="45" y1="50" x2="35" y2="70" stroke="green" />
      </svg>
      <div className="absolute text-green-500 text-xl font-bold">Image or text</div>
    </div>
  );
};

export default WireframeCube;


import React from "react";
import { motion } from "framer-motion";

const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-full bg-green-400"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: ["0%", "80%", "0%"], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          style={{ left: `${20 * i + 40}px` }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;
import React from "react";
import { motion } from "framer-motion";

const Particles = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-300 rounded-full"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`
          }}
          animate={{
            y: ["0px", "20px", "-20px", "0px"],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

export default Particles;





import React from "react";
import WireframeCube from "./WireframeCube";
import AnimatedLines from "./AnimatedLines";
import Particles from "./Particles";

function App() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center bg-gray-100">
      <Particles />
      <AnimatedLines />
      <WireframeCube />
    </div>
  );
}

export default App;



























