"use client";
import { useState, useEffect, useRef } from "react";
import Chevron from "../svgs/Chevron"; // Adjust path if needed

type CustomSelectProps = {
  options: string[];
  onSelect: (option: string) => void;
  name: string;
  value: string;
  title: string;
  className?: string;
  disabled?: boolean;
};

export default function Select({
  options,
  onSelect,
  name,
  title,
  value,
  className,
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectRef]);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative w-22 md:w-40 lg:w-50 ${className}`}
      ref={selectRef}
    >
      <h2 className="text-sm mb-1">{title}</h2>
      <button
        type="button"
        className={`
          flex items-center justify-between max-w-60 w-full
          bg-textinput-field-bg border-2 border-textinput-field-border
          rounded-md p-2 text-sm text-left
          ${disabled ? "cursor-not-allowed" : ""}
        `}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{value}</span>
        <Chevron
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && !disabled && (
        <div
          className="
            absolute z-10 w-full max-w-60 mt-1 
            border-2 border-textinput-field-border
            rounded-md shadow-lg 
            overflow-hidden text-sm 
          "
          role="listbox"
        >
          <ul
            className="
              bg-choice-bg 
              max-h-48 overflow-y-auto
              text-choice-text-options 
            "
          >
            <li className="text-choice-heading text-center p-2 text-sm font-bold sticky top-0 bg-choice-bg">
              {name}
            </li>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`
                  text-choice-text-options p-2 cursor-pointer
                  hover:bg-opacity-20 hover:bg-white
                  ${value === option ? "bg-choice-highlight-bg" : ""}
                `}
                role="option"
                aria-selected={value === option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
