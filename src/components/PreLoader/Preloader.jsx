import { motion } from "framer-motion";

const Preloader = () => (
<svg height="400" width="450" xmlns="http://www.w3.org/2000/svg">
    {/* Draw the paths */}
    <motion.path
      id="lineAB"
      d="M 100 350 l 150 -300"
      stroke="red"
      strokeWidth="4"
      fill="transparent"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2 }}
    />
    <motion.path
      id="lineBC"
      d="M 250 50 l 150 300"
      stroke="red"
      strokeWidth="4"
      fill="transparent"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 2 }}
    />
    <motion.path
      id="lineMID"
      d="M 175 200 l 150 0"
      stroke="green"
      strokeWidth="4"
      fill="transparent"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 4 }}
    />
    <motion.path
      id="lineAC"
      d="M 100 350 q 150 -300 300 0"
      stroke="blue"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 6 }}
    />

    {/* Mark relevant points */}
    <g stroke="black" strokeWidth="3" fill="black">
      <circle id="pointA" cx="100" cy="350" r="4" />
      <circle id="pointB" cx="250" cy="50" r="4" />
      <circle id="pointC" cx="400" cy="350" r="4" />
    </g>

    {/* Label the points */}
    <g fontSize="30" fontFamily="sans-serif" fill="green" textAnchor="middle">
      <text x="100" y="350" dx="-30">A</text>
      <text x="250" y="50" dy="-10">B</text>
      <text x="400" y="350" dx="30">C</text>
    </g>
  </svg>
);

export default Preloader;
