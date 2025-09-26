"use client";

export default function Frosted({
  blurAmountProp,
}: {
  blurAmountProp: string;
}) {
  const frostedClass: string = `fixed top-0 bottom-0 w-full h-full z-[-1] bg-white/0.1 ${blurAmountProp}`;
  return <div className={frostedClass}></div>;
}
