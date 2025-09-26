type ClassNameProps = {
  className: string;
};

export default function Chevron({ className }: ClassNameProps) {
  return (
    <svg
      className={className}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.48872e-07 4.36166C4.48872e-07 3.24834 0.236578 2.13056 0.713584 1.27761C1.66397 -0.425869 3.20195 -0.425869 4.15233 1.27761L20.9998 31.4772L37.8485 1.27761C38.7988 -0.425869 40.3382 -0.425869 41.2872 1.27761C42.2376 2.98108 42.2376 5.7402 41.2872 7.44327L22.7205 40.7224C21.7701 42.4259 20.2307 42.4259 19.2817 40.7224L0.713812 7.44327C0.237939 6.59315 4.48872e-07 5.47741 4.48872e-07 4.36166Z"
        className="fill-foreground"
      />
    </svg>
  );
}
