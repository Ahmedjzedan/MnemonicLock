"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  TrashBinComponent,
  DiceComponent,
  ReRollComponent,
  EditMobileComponent,
} from "./EditInputSVGS";

type InputProps = {
  id: number;
  placeholder: string;
  value: string;
  onChange: (id: number, newValue: string) => void;
  onDelete: (id: number) => void;
  onChangeQuestion: (id: number) => void;
  onRandomAnswer: (id: number) => void;
};

export default function Input({
  id,
  placeholder,
  value,
  onChange,
  onDelete,
  onChangeQuestion,
  onRandomAnswer,
}: InputProps) {
  const [editIsClicked, setEditIsClicked] = useState<boolean>(false);
  return (
    <div className="flex flex-col relative">
      <div className="flex items-center">
        <button
          onClick={() => setEditIsClicked((prev) => !prev)}
          className={editIsClicked ? "flex md:hidden mr-3 " : "md:hidden mr-3"}
        >
          <EditMobileComponent className="w-6 h-6 " color="stroke-foreground" />
        </button>
        <AnimatePresence>
          {editIsClicked && (
            <motion.div
              key="edit-mobile-menu"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden absolute top-0 bottom-0 right-0 left-[36px] z-10 bg-foreground rounded-xl flex items-center justify-around p-2"
            >
              <button
                onClick={() => onChangeQuestion(id)}
                type="button"
                className="flex items-center gap-2"
              >
                <ReRollComponent
                  className="w-5 h-5"
                  color="fill-background"
                  title="Change Question"
                />
                <span className="text-xs text-background">Change Question</span>
              </button>
              <button
                onClick={() => onRandomAnswer(id)}
                type="button"
                className="flex items-center gap-2"
              >
                <DiceComponent
                  className="w-4 h-4"
                  color="fill-background"
                  title="Random Answer"
                />
                <span className="text-xs text-background">Random Answer</span>
              </button>
              <button
                onClick={() => onDelete(id)}
                type="button"
                className="flex items-center gap-2"
              >
                <TrashBinComponent
                  className="w-4 h-4"
                  color="fill-background"
                  title="Delete"
                />
                <span className="text-xs text-background">Delete</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <input
          type="text"
          className="text-xs sm:text-sm md:text-xs lg:text-sm py-2 px-4 rounded-xl bg-textinput-field-bg border-2 w-full border-textinput-field-border"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
        />
      </div>
      <div className="-mt-2 ml-4 self-start bg-background border-textinput-field-border border-2 rounded-lg h-3 overflow-hidden w-16 hover:w-[90%] hover:h-15 transition-all duration-200 hover:bg-textinput-field-bg items-center hidden md:flex hover:[&>*]:opacity-100 [&>*]:opacity-0">
        <div className="grid grid-cols-3 w-full h-auto transition-opacity duration-200">
          <button
            onClick={() => onChangeQuestion(id)}
            type="button"
            className="flex flex-col items-center gap-1 p-2"
          >
            <ReRollComponent
              className="w-7 h-7"
              color="fill-foreground"
              title="Change Question"
            />
            <span className="text-xs">Change Question</span>
          </button>
          <button
            onClick={() => onRandomAnswer(id)}
            type="button"
            className="flex flex-col items-center gap-1 p-2"
          >
            <DiceComponent
              className="w-7 h-7"
              color="fill-foreground"
              title="Answer Randomly"
            />
            <span className="text-xs">Random Answer</span>
          </button>
          <button
            onClick={() => onDelete(id)}
            type="button"
            className="flex flex-col items-center gap-1 p-2"
          >
            <TrashBinComponent
              className="w-7 h-7"
              color="fill-foreground"
              title="Delete"
            />
            <span className="text-xs">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
