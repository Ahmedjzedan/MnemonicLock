type ResultProps = {
  password: string;
  // This prop receives an object with two properties
  mnemonic: {
    acronym: string;
    key: string;
  };
};

export default function Result({ password, mnemonic }: ResultProps) {
  return (
    <div className="mt-20">
      <div className="text-center mt-10 text-sm sm:text-sm md:text-md lg:text-lg xl:text-2xl font-bold font-inria-sans">
        {password}
      </div>

      {/* Display the 'acronym' property from the object */}
      <div className="text-center text-xs sm:text-xs md:text-sm lg:text-md xl:text-lg">
        {mnemonic.acronym}
      </div>

      {/* Display the 'key' property from the object */}
      <div className="text-center text-xs text-gray-400 mt-1">
        ({mnemonic.key})
      </div>
    </div>
  );
}
