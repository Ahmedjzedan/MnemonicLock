import { InputItem, OptionState } from "@/components/ui/Generator"; // Adjust path if needed

const SYMBOLS = "!@#$%^&*()_+";
const OBFUSCATION_MAP: { [key: string]: string } = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
  s: "$",
  t: "7",
  l: "1",
};

export const generatePassword = (
  inputs: InputItem[],
  options: OptionState
): string => {
  if (inputs.some((input) => input.value.trim() === "")) {
    return "Please fill all fields first.";
  }

  let passwordParts = inputs.map((input) =>
    input.value.trim().replace(/\s+/g, "")
  );

  switch (options.casing) {
    case "ALLCAPS":
      passwordParts = passwordParts.map((p) => p.toUpperCase());
      break;
    case "lowercase":
      passwordParts = passwordParts.map((p) => p.toLowerCase());
      break;
    case "PascalCase":
      passwordParts = passwordParts.map(
        (p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
      );
      break;
    case "camelCase":
      passwordParts = passwordParts.map((p, i) =>
        i === 0
          ? p.toLowerCase()
          : p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()
      );
      break;
  }

  const separator = options.spaces === "Spaces" ? "" : options.spaces;
  let finalPassword = passwordParts.join(separator);

  if (options.obfuscate) {
    finalPassword = finalPassword
      .split("")
      .map((char) => OBFUSCATION_MAP[char.toLowerCase()] || char)
      .join("");
  }

  if (options.randomSymbols) {
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(
        Math.random() * (finalPassword.length + 1)
      );
      const randomSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      finalPassword =
        finalPassword.slice(0, randomIndex) +
        randomSymbol +
        finalPassword.slice(randomIndex);
    }
  }

  if (options.extraWords) {
    const extraWords = ["Fire", "Sun", "Rock", "Sky", "Code"];
    finalPassword += extraWords[Math.floor(Math.random() * extraWords.length)];
  }

  return finalPassword;
};

export const generateMnemonic = (
  inputs: InputItem[],
  options: OptionState
): { acronym: string; key: string } => {
  if (inputs.some((input) => input.value.trim() === "")) {
    return { acronym: "Error", key: "Please fill all fields" };
  }

  const keyParts = inputs.map((i) => {
    const words = i.placeholder.replace("?", "").split(" ");
    const memorableWord = words[words.length - 2] || words[0];
    return (
      memorableWord.charAt(0).toUpperCase() +
      memorableWord.charAt(1).toLowerCase()
    );
  });

  const acronym = keyParts.join("");
  const key = keyParts.join(" - ");

  return { acronym, key };
};
