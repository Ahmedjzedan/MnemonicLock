"use client";

import Chevron from "./svgs/Chevron";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQElement({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    // The main container for the whole element
    <div
      className="flex flex-col w-full rounded-3xl border-3 border-foreground bg-background/50
    hover:shadow-[0_0_60px_0_rgba(255,255,255,0.5)] transition-shadow duration-300"
    >
      {/* 1. The Clickable Header */}
      <button
        className="flex w-full items-center justify-between text-left p-5"
        onClick={() => setIsClicked(!isClicked)}
      >
        <h1 className="text-ssm font-bold">{question}</h1>
        <Chevron
          className={`w-4 h-4 sm:w-5 sm:h-5 ml-3 transition-all duration-300 ${
            isClicked ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-sm text-neutral-200">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
