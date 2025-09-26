// ... imports
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type AnimatedInputProps = {
  textToType: string;
  placeholder: string;
  className?: string;
  typeDuration: number;
  pauseDuration: number;
};

export default function AnimatedInput({
  textToType,
  placeholder,
  className,
  typeDuration,
  pauseDuration,
}: AnimatedInputProps) {
  // ... state and motion values are the same
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    textToType.slice(0, latest)
  );
  const [displayedValue, setDisplayedValue] = useState("");

  useEffect(() => {
    const controls = animate(count, textToType.length, {
      type: "tween",
      duration: typeDuration, // Use prop for typing duration
      ease: "easeInOut",
      repeat: 1,
      repeatType: "reverse",
      repeatDelay: pauseDuration, // Use prop for the pause
    });
    return controls.stop;
  }, [textToType]);

  useEffect(() => {
    const unsubscribe = displayText.onChange((latest) => {
      setDisplayedValue(latest);
    });
    return unsubscribe;
  }, [displayText]);

  return (
    <motion.input
      type="text"
      placeholder={placeholder}
      className={className}
      value={displayedValue}
      readOnly
    />
  );
}
