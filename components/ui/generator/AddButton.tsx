"use client";

type AddButtonProps = { createNewItem: () => void };

export default function AddButton({ createNewItem }: AddButtonProps) {
  return (
    <button
      onClick={() => {
        createNewItem();
      }}
      className="bg-textinput-field-bg border-textinput-field-border border-2 rounded-3xl text-3xl w-15 justify-self-center"
    >
      +
    </button>
  );
}
