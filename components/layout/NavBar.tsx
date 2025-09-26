"use client";

import Image from "next/image";
import moonIcon from "./svgs/MoonIcon.svg";
import sunIcon from "./svgs/SunIcon.svg";
import Lock from "./svgs/Lock";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 3. The toggle function is now simpler.
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const isDarkMode = resolvedTheme === "dark";

  return (
    <nav className="flex justify-between mx-4 sm:mx-8 md:mx-10 lg:mx-15 xl:mx-20 lg:grid-cols-7 items-center mt-5 z-1">
      <div className=" justify-self-center ">
        <div
          className=" text-md sm:text-xl md:text-xl lg:text-3xl xl:text-3xl
         flex items-center justify-center"
        >
          <Lock className="w-5 h-5 sm:w-7 sm:h-7 lg:h-10 lg:w-10 xl:w-11 xl:h-11" />
          <span className="font-inria-sans">MnemonicLock</span>
        </div>
      </div>
      <div className="self-baseline flex items-center w-auto justify-center col-span-1">
        <button
          className="hover:cursor-pointer w-7 h-7 sm:w-9 sm:h-9 lg:h-12 lg:w-12 xl:w-13 xl:h-13"
          onClick={toggleTheme}
        >
          {mounted && (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDarkMode ? "moon" : "sun"}
                initial={{ opacity: 0, rotate: -90, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Image
                  className="w-7 h-7 sm:w-9 sm:h-9 lg:h-12 lg:w-12 xl:w-13 xl:h-13"
                  src={isDarkMode ? moonIcon : sunIcon}
                  alt="Theme toggle icon"
                  width={40}
                  height={40}
                />
              </motion.div>
            </AnimatePresence>
          )}
        </button>
      </div>
    </nav>
  );
}
