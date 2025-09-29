"use client";
import { useState, useEffect } from "react";
import AnimatedInput from "@/components/ui/AnimatedInput";

// 1. Define a type for the items we're shuffling
type MnemonicItem = {
  type: string;
  value: string;
};

// 2. Type the shuffle function to accept and return an array of our new type
const shuffleArray = (array: MnemonicItem[]): MnemonicItem[] => {
  let currentIndex = array.length,
    randomIndex;
  const newArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [shuffledItems, setShuffledItems] = useState<MnemonicItem[]>([]);

  // --- Animation Timing Constants ---
  const TYPE_DURATION: number = 1.5;
  const PAUSE_DURATION: number = 5;
  const CYCLE_DURATION: number = TYPE_DURATION * 2 + PAUSE_DURATION;

  const foodPhrases: string[] = ["Shawarma", "Kubba", "Dolma"];
  const petPhrases: string[] = ["Simba", "Lucy", "Mochi"];
  const numberPhrases: string[] = ["7", "42", "13"];
  const colorPhrases: string[] = ["Blue", "Emerald Green", "Black"];

  useEffect(() => {
    const currentItems: MnemonicItem[] = [
      { type: "Food", value: foodPhrases[phraseIndex] },
      { type: "Pet Name", value: petPhrases[phraseIndex] },
      { type: "Lucky Number", value: numberPhrases[phraseIndex] },
      { type: "Color", value: colorPhrases[phraseIndex] },
    ];
    setShuffledItems(shuffleArray(currentItems));

    const showTimer = setTimeout(() => {
      setShowResult(true);
    }, TYPE_DURATION * 1000);

    const hideTimer = setTimeout(() => {
      setShowResult(false);
    }, (TYPE_DURATION + PAUSE_DURATION) * 1000);

    const nextPhraseTimer = setTimeout(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % foodPhrases.length);
    }, CYCLE_DURATION * 1000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextPhraseTimer);
    };
  }, [phraseIndex]);

  const finalPassword =
    shuffledItems.map((item) => item.value.replace(" ", "")).join("") + "!";
  const mnemonic = shuffledItems.map((item) => item.type).join(" - ");

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-10 mb-10 mx-4 sm:mx-8 md:mx-10 lg:mx-15 xl:mx-20 gap-30">
      <div className="flex flex-col gap-5">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold">
          Create h!GhLy $3cUr3 passwords that you won&apos;t forget
        </h1>
        <p className="text-sm">
          Answer some randomly generated questions about yourself then our smart
          algorithm will create a password for you out of your answers thus
          providing a highly secure password that&apos;s easy to remember!
        </p>
      </div>
      <div
        className="w-[100%] sm:w-[175%] lg:w-[150%] xl:w-[125%] 2xl:w-[100%] bg-hero-bg shadow-[0_0_20px_0_var(--hero-bg-shadow)] 
      md:shadow-[0_0_40px_0_var(--hero-bg-shadow)] lg:shadow-[0_0_60px_0_var(--hero-bg-shadow)] rounded-2xl py-5 px-5 sm:px-10"
      >
        <div className="text-center font-bold font-inria-sans text-2xl mb-5">
          Demo
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7 text-sm">
          <AnimatedInput
            textToType={foodPhrases[phraseIndex]}
            typeDuration={TYPE_DURATION}
            pauseDuration={PAUSE_DURATION}
            placeholder="Favorite food"
            className="p-2 bg-textinput-field-bg border-[2px] border-textinput-field-border rounded-md"
          />
          <AnimatedInput
            textToType={petPhrases[phraseIndex]}
            typeDuration={TYPE_DURATION}
            pauseDuration={PAUSE_DURATION}
            placeholder="Pet name"
            className="p-2 bg-textinput-field-bg border-[2px] border-textinput-field-border rounded-md"
          />
          <AnimatedInput
            textToType={numberPhrases[phraseIndex]}
            typeDuration={TYPE_DURATION}
            pauseDuration={PAUSE_DURATION}
            placeholder="Lucky number"
            className="p-2 bg-textinput-field-bg border-[2px] border-textinput-field-border rounded-md"
          />
          <AnimatedInput
            textToType={colorPhrases[phraseIndex]}
            typeDuration={TYPE_DURATION}
            pauseDuration={PAUSE_DURATION}
            placeholder="Favorite color"
            className="p-2 bg-textinput-field-bg border-[2px] border-textinput-field-border rounded-md"
          />
        </div>

        <div className="text-center mt-10 text-md font-bold">
          {showResult ? finalPassword : "Creating..."}
        </div>
        <div className="text-center text-sm ">
          {showResult ? mnemonic : "..."}
        </div>
      </div>
    </div>
  );
}
