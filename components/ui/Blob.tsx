"use client";

import { motion } from "framer-motion";

export default function Blob({ directionProp }: { directionProp: string }) {
  const direction = "w-[40vw] h-[40vh] z-[-2] fixed " + directionProp;
  return (
    <motion.svg
      viewBox="0 0 991 1147"
      xmlns="http://www.w3.org/2000/svg"
      className={direction}
      animate={{ rotate: 360 }}
      transition={{
        rotate: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        },
      }}
    >
      <motion.path
        d="M941.559 183.156C1019.6 319.557 1000.62 530.411 913.083 731.667C825.546 932.633 669.455 1124.29 481.461 1144.65C293.467 1165.01 73.3051 1014.07 16.3531 832.296C-40.8626 650.525 65.1314 437.926 175.08 280.876C285.029 124.117 399.197 23.4882 543.686 4.00237C688.439 -15.4835 863.514 46.7549 941.559 183.156Z"
        animate={{
          fill: [
            "hsl(240, 100%, 50%)", // Balanced Blue
            "hsl(280, 65%, 55%)", // Purple
            "hsl(0, 70%, 50%)", // True Red
            "hsl(40, 80%, 55%)", // Amber/Orange
            "hsl(140, 55%, 45%)", // Teal Green
            "hsl(190, 70%, 50%)", // Cyan
            "hsl(240, 100%, 50%)", // Back to Blue
          ],
        }}
        transition={{
          fill: {
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      />
    </motion.svg>
  );
}
