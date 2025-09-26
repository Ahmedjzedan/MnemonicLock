import Select from "./Select";

export type OptionState = {
  casing: string;
  spaces: string;
  obfuscate: boolean;
  randomSymbols: boolean;
  extraWords: boolean;
};

type OptionsProps = {
  options: OptionState;
  setOptions: React.Dispatch<React.SetStateAction<OptionState>>;
};

export default function Options({ options, setOptions }: OptionsProps) {
  const handleOptionChange = (
    key: keyof OptionState,
    value: string | boolean
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="grid grid-cols-3 gap-15 mt-10 mx-5">
      <Select
        className="col-start-2 justify-self-center"
        options={[
          "kebab-case",
          "camelCase",
          "snake_case",
          "PascalCase",
          "ALLCAPS",
          "lowercase",
          "Alternate Case",
        ]}
        onSelect={(value) => handleOptionChange("casing", value)}
        name="Casing"
        value={options.casing}
        title="Casing"
      />
      <Select
        className="col-start-3 justify-self-center"
        options={["-", "_"]}
        onSelect={(value) => handleOptionChange("spaces", value)}
        name="Spaces"
        value={options.spaces}
        title="Spaces"
      />

      <div
        className="flex row-start-1 justify-center items-end mb-3 gap-2 text-sm"
        title="(e.g., a -> 4, s -> $, etc.)"
      >
        <input
          id="obfuscate"
          type="checkbox"
          checked={options.obfuscate}
          onChange={(e) => handleOptionChange("obfuscate", e.target.checked)}
          className=" h-5 w-5 accent-foreground checked:bg-background bg-foreground"
        />
        <label htmlFor="obfuscate">Obfuscate letters</label>
      </div>
    </div>
  );
}
