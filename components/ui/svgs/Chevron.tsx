type ClassNameProps = {
  className: string;
};

export default function Chevron({ className }: ClassNameProps) {
  return (
    <svg
      className={className}
      width="57"
      height="39"
      viewBox="0 0 57 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 33L28.75 6L51.5 33"
        className="stroke-foreground"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
