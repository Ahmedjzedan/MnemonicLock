"use client";
import { useState, useEffect } from "react";
import Input from "./generator/Input";
import AddButton from "./generator/AddButton";
import Options from "./generator/Options";
import Result from "./generator/Result";
import { motion } from "framer-motion";
import { generatePassword, generateMnemonic } from "@/app/lib/passwordUtils";

export type Question = {
  question: string;
  mnemonic: string;
  randomAnswers: string[];
};

export const QUESTION_POOL: Question[] = [
  // Original Questions
  {
    question: "First Pet's Name?",
    mnemonic: "Fp",
    randomAnswers: ["Buddy", "Lucy", "Max", "Rocky"],
  },
  {
    question: "City of Birth?",
    mnemonic: "Cb",
    randomAnswers: ["New York", "London", "Tokyo", "Paris"],
  },
  {
    question: "Mother's Maiden Name?",
    mnemonic: "Mn",
    randomAnswers: ["Smith", "Jones", "Williams", "Brown"],
  },
  {
    question: "Elementary School?",
    mnemonic: "Es",
    randomAnswers: ["Oakwood", "Maple", "Pinecrest", "Lincoln"],
  },
  {
    question: "Childhood Friend?",
    mnemonic: "Cf",
    randomAnswers: ["Alex", "Sam", "Jessie", "Jordan"],
  },
  {
    question: "First Car's Make?",
    mnemonic: "Fc",
    randomAnswers: ["Honda", "Toyota", "Ford", "Chevy"],
  },
  {
    question: "Favorite Team?",
    mnemonic: "Ft",
    randomAnswers: ["Lakers", "Yankees", "Real Madrid", "Bulls"],
  },
  {
    question: "Favorite Movie?",
    mnemonic: "Fm",
    randomAnswers: ["Inception", "Matrix", "Avatar", "Titanic"],
  },

  {
    question: "High School Mascot?",
    mnemonic: "Hm",
    randomAnswers: ["Eagles", "Tigers", "Warriors", "Panthers"],
  },
  {
    question: "Street You Grew Up On?",
    mnemonic: "Sg",
    randomAnswers: ["Elm", "Oak", "Main", "Maple"],
  },
  {
    question: "Father's Middle Name?",
    mnemonic: "Fn",
    randomAnswers: ["John", "Michael", "David", "James"],
  },
  {
    question: "Favorite Food?",
    mnemonic: "Ff",
    randomAnswers: ["Pizza", "Sushi", "Tacos", "Burger"],
  },
  {
    question: "Favorite Drink?",
    mnemonic: "Fd",
    randomAnswers: ["Coffee", "Tea", "Coke", "Water"],
  },
  {
    question: "Favorite Color?",
    mnemonic: "Fc",
    randomAnswers: ["Blue", "Green", "Red", "Black"],
  },
  {
    question: "Lucky Number?",
    mnemonic: "Ln",
    randomAnswers: ["7", "13", "8", "3"],
  },
  {
    question: "First Concert?",
    mnemonic: "Fc",
    randomAnswers: ["Coldplay", "U2", "Metallica", "Beyonce"],
  },
  {
    question: "Dream Job?",
    mnemonic: "Dj",
    randomAnswers: ["Astronaut", "Pilot", "Artist", "Doctor"],
  },
  {
    question: "Favorite Book?",
    mnemonic: "Fb",
    randomAnswers: ["Dune", "1984", "Hobbit", "Moby Dick"],
  },
  {
    question: "Favorite Game?",
    mnemonic: "Fg",
    randomAnswers: ["Chess", "Monopoly", "Skyrim", "Zelda"],
  },
  {
    question: "Childhood Nickname?",
    mnemonic: "Cn",
    randomAnswers: ["Ace", "Buddy", "Champ", "Scout"],
  },
  {
    question: "First Teacher's Name?",
    mnemonic: "Ft",
    randomAnswers: ["Mrs. Davis", "Mr. Smith", "Ms. Jones", "Mr. Brown"],
  },
  {
    question: "Favorite Holiday?",
    mnemonic: "Fh",
    randomAnswers: ["Christmas", "Halloween", "Thanksgiving", "Easter"],
  },
  {
    question: "Dream Vacation Spot?",
    mnemonic: "Dv",
    randomAnswers: ["Hawaii", "Paris", "Bali", "Kyoto"],
  },
  {
    question: "First Job?",
    mnemonic: "Fj",
    randomAnswers: ["Cashier", "Waiter", "Lifeguard", "Babysitter"],
  },
  {
    question: "Favorite Ice Cream?",
    mnemonic: "Fi",
    randomAnswers: ["Chocolate", "Vanilla", "Strawberry", "Mint"],
  },
  {
    question: "Name of Your First Crush?",
    mnemonic: "Nc",
    randomAnswers: ["Jessica", "Chris", "Sarah", "Mike"],
  },
  {
    question: "Favorite Animal?",
    mnemonic: "Fa",
    randomAnswers: ["Dog", "Cat", "Wolf", "Lion"],
  },
  {
    question: "Favorite TV Show?",
    mnemonic: "Fs",
    randomAnswers: ["Friends", "GoT", "Breaking Bad", "The Office"],
  },
  {
    question: "Last 4 Digits of Phone?",
    mnemonic: "Lp",
    randomAnswers: ["1234", "5678", "9012", "3456"],
  },
  {
    question: "Birth Month?",
    mnemonic: "Bm",
    randomAnswers: ["January", "July", "October", "May"],
  },
  {
    question: "Favorite Season?",
    mnemonic: "Fs",
    randomAnswers: ["Summer", "Autumn", "Winter", "Spring"],
  },
  {
    question: "Eye Color?",
    mnemonic: "E",
    randomAnswers: ["Blue", "Brown", "Green", "Hazel"],
  },
  {
    question: "Hair Color?",
    mnemonic: "H",
    randomAnswers: ["Brown", "Black", "Blonde", "Red"],
  },
  {
    question: "Role Model?",
    mnemonic: "Rm",
    randomAnswers: ["Einstein", "Musk", "Goggins", "Jordan"],
  },
  {
    question: "Favorite Band?",
    mnemonic: "Fb",
    randomAnswers: ["Queen", "Beatles", "Nirvana", "Led Zeppelin"],
  },
  {
    question: "Paternal Grandmother?",
    mnemonic: "Pg",
    randomAnswers: ["Mary", "Helen", "Ruth", "Dorothy"],
  },
  {
    question: "Maternal Grandfather?",
    mnemonic: "Mg",
    randomAnswers: ["John", "Robert", "William", "George"],
  },
  {
    question: "Favorite Subject?",
    mnemonic: "Fs",
    randomAnswers: ["Math", "History", "Science", "Art"],
  },
];

const getRandomQuestion = (): Question =>
  QUESTION_POOL[Math.floor(Math.random() * QUESTION_POOL.length)];

export type InputItem = {
  id: number;
  placeholder: string;
  value: string;
};

export type OptionState = {
  casing: string;
  spaces: string;
  obfuscate: boolean;
  randomSymbols: boolean;
  extraWords: boolean;
};

export default function Generator() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [inputs, setInputs] = useState<InputItem[]>([]);
  const [options, setOptions] = useState<OptionState>({
    casing: "Casing",
    spaces: "Spaces",
    obfuscate: false,
    randomSymbols: false,
    extraWords: false,
  });
  const [result, setResult] = useState({
    password: "",
    mnemonic: { acronym: "", key: "" },
  });

  useEffect(() => {
    setIsMounted(true);
    const initialQuestions = [
      getRandomQuestion(),
      getRandomQuestion(),
      getRandomQuestion(),
    ];
    setInputs([
      {
        id: Date.now() + 1,
        placeholder: initialQuestions[0].question,
        value: "",
      },
      {
        id: Date.now() + 2,
        placeholder: initialQuestions[1].question,
        value: "",
      },
      {
        id: Date.now() + 3,
        placeholder: initialQuestions[2].question,
        value: "",
      },
    ]);
  }, []);

  const handleCreatePassword = () => {
    const newPassword = generatePassword(inputs, options);
    const newMnemonic = generateMnemonic(inputs, options);
    setResult({ password: newPassword, mnemonic: newMnemonic });
  };

  const addInput = (): void => {
    const newQuestion = getRandomQuestion();
    setInputs([
      ...inputs,
      { id: Date.now(), placeholder: newQuestion.question, value: "" },
    ]);
  };

  const handleInputChange = (id: number, newValue: string): void => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: newValue } : input
      )
    );
  };

  const handleDeleteInput = (id: number): void => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChangeQuestion = (id: number): void => {
    const newQuestion = getRandomQuestion();
    setInputs(
      inputs.map((input) =>
        input.id === id
          ? { ...input, placeholder: newQuestion.question }
          : input
      )
    );
  };

  const handleRandomAnswer = (id: number): void => {
    const inputToChange = inputs.find((input) => input.id === id);
    if (inputToChange) {
      const questionObj = QUESTION_POOL.find(
        (q) => q.question === inputToChange.placeholder
      );
      if (questionObj) {
        const randomAnswer =
          questionObj.randomAnswers[
            Math.floor(Math.random() * questionObj.randomAnswers.length)
          ];
        setInputs(
          inputs.map((input) =>
            input.id === id ? { ...input, value: randomAnswer } : input
          )
        );
      }
    }
  };

  if (!isMounted) return null;

  return (
    <div
      className="flex flex-col my-20 py-20 px-4 sm:px-8 md:px-10 rounded-xl bg-hero-bg backdrop-blur-xl
      shadow-[0_0_20px_0_var(--hero-bg-shadow)] md:shadow-[0_0_40px_0_var(--hero-bg-shadow)] lg:shadow-[0_0_60px_0_var(--hero-bg-shadow)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 ">
        {inputs.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            value={input.value}
            placeholder={input.placeholder}
            onChange={handleInputChange}
            onDelete={handleDeleteInput}
            onChangeQuestion={handleChangeQuestion}
            onRandomAnswer={handleRandomAnswer}
          />
        ))}
        <AddButton createNewItem={addInput} />
      </div>

      <Options options={options} setOptions={setOptions} />

      {result.password && (
        <Result password={result.password} mnemonic={result.mnemonic} />
      )}

      <button
        onClick={handleCreatePassword}
        className="tracking-wider mt-20 text-foreground font-black font-inria-sans text-xl rounded-xl
        bg-background shadow-[0px_0px_50px_10px_var(--CTA-shadow),inset_0px_0px_10px_5px_var(--foreground)]
        max-w-60 h-15 mx-auto px-5"
      >
        Create Password
      </button>
    </div>
  );
}
