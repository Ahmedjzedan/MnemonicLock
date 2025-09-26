import FAQElement from "../ui/FAQElement";

export default function FAQ() {
  return (
    <div className="mt-30 flex flex-col items-stretch mx-4 sm:mx-8 md:mx-10 lg:mx-15 xl:mx-20">
      <h1 className="self-center text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold font-inria-sans ">
        FAQ
      </h1>
      <ul className="mt-5 flex flex-col gap-5 list-none">
        <FAQElement
          question="How are these passwords both memorable and secure?"
          answer="The magic is in bridging the gap between human memory and computer-proof security. 
            Random passwords like 8!#z&p$Lq@ are strong but impossible to remember, so people write them 
            down—which isn't secure at all. We use your memorable answers as a unique seed for a high-entropy
            algorithm. It transforms your simple inputs into a complex password that looks random to a computer
            but still has a thread of logic that your brain can easily recall. You get the best of both worlds:
            a password you can actually remember without sacrificing the strength needed to protect you."
        />
        <FAQElement
          question="Do you store my answers or the generated password?"
          answer="Everything happens client-side, which is a fancy way of saying the entire process runs 
            securely in your browser on your device. Your answers and your final password are never sent to
            our servers or stored anywhere. Think of our site like a calculator. It performs a calculation 
            for you, but the moment you close the page, it has zero memory of what you entered. Your privacy and security are non-negotiable."
        />
        <FAQElement
          question="What if someone knows my answers, like my pet's name?"
          answer="While your answers are the secret sauce, they're only part of the recipe. The real
            security comes from how our algorithm processes them. It's not just smashing your answers
            together. The algorithm chops, changes, and rebuilds them based on cryptographic principles
            and the security options you select (like alternate casing and character swaps). The final 
            result is a complex transformation of your inputs, making it nearly impossible for someone
            to reverse-engineer your password even if they know your favorite food."
        />
        <FAQElement
          question=" How does the 'smart algorithm' actually work?"
          answer="Without giving away all our secrets, the algorithm treats your answers as a unique
            starting point, or 'salt.' It then applies multiple layers of transformations—including 
            character swapping, casing changes, and symbol injection—based on proven security patterns.
            The 'Mnemonic' it generates is a blueprint for this transformation, allowing you to reconstruct 
            the logic while it remains gibberish to anyone else. It's designed to maximize complexity for 
            computers while maximizing memorability for you."
        />
        <FAQElement
          question="What are the best practices for using my new password?"
          answer="Even a fire password has its limits. For max-level security, you should still follow these rules:
                    Don't Reuse Passwords: Never use the same password for multiple important accounts (email, banking, etc.).
                    Use a Password Manager: The pro move is to use MnemonicLock to create an unforgettable master
                    password for a trusted password manager (like Bitwarden or 1Password). Let the manager handle
                    creating and storing unique, random passwords for every other site, and use your new mnemonic 
                    password to unlock the whole vault."
        />
      </ul>
    </div>
  );
}
