"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Lock from "./svgs/Lock";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const footerBorder: string = resolvedTheme === "dark" ? "" : "border-1";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer
      className={
        mounted
          ? `grid grid-cols-1 md:grid-cols-3 items-start justify-center mt-10 gap-10
    bg-footer-bg w-full rounded-t-4xl py-5 md:pb-25 ${footerBorder}`
          : "grid grid-cols-1 md:grid-cols-3 items-center justify-center mt-10 gap-10 bg-footer-bg bottom-0 w-full rounded-t-4xl py-5 md:pb-25"
      }
    >
      <div className="flex flex-col ">
        <div
          className=" text-md sm:text-xl md:text-xl lg:text-2xl xl:text-2xl
               flex items-start justify-center mb-2"
        >
          <Lock className="w-5 h-5 sm:w-7 sm:h-7 lg:h-8 lg:w-8 xl:w-9 xl:h-9" />
          <h1 className="font-inria-sans">MnemonicLock</h1>
        </div>
        <p className="text-center md:text-sm text-[0.7rem] mx-5">
          Creates easy to remember hard to penetrate passwords based on the
          users memory using mnemonics
        </p>
      </div>
      <ul className="mt-5 grid template-columns-1 gap-3 text-center list-none text-xs md:text-sm justify-center ">
        <li className=" text-footer-list-header">Also by me</li>
        <a className="text-footer-text">unfinshed revise</a>
        <a className="text-footer-text">unreleased alkurdy</a>
        <a className="text-footer-text">Illegal drug empire</a>
      </ul>
      <ul className="mt-5 grid template-columns-1 gap-3 text-center list-none text-xs md:text-sm  justify-center">
        <li className=" text-footer-list-header">Media</li>
        <a className="text-footer-text">Facebook</a>
        <a className="text-footer-text">Linkedin</a>
        <a className="text-footer-text">Telegram</a>
      </ul>
    </footer>
  );
}
