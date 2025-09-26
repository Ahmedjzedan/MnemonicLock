import Link from "next/link";

export default function CTA() {
  return (
    <div className="flex flex-col items-center mt-30 mx-4 sm:mx-8 md:mx-10 lg:mx-15 xl:mx-20">
      <h1 className="text-lg lg:text-2xl font-bold font-inria-sans">
        Start creating Your safe memorable passwords
      </h1>

      <Link
        // className="mt-10 mb-30 px-10 py-5 tracking-wider text-foreground font-black font-inria-sans text-xl rounded-xl
        // bg-background shadow-[0px_0px_45px_5px_var(--CTA-shadow),inset_0px_0px_10px_5px_var(--foreground)]
        // "
        className="mt-10 mb-30 px-10 py-5 tracking-wider text-foreground font-black font-inria-sans text-xl rounded-xl
        bg-background shadow-[0px_0px_45px_5px_var(--foreground),inset_0px_0px_5px_3px_var(--CTA-shadow)]
        "
        href={"/home"}
      >
        Start Creating
      </Link>
    </div>
  );
}
