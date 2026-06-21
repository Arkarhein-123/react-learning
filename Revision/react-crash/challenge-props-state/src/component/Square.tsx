// Square.tsx
interface SquareProps {
  inputValue: string;
}

export default function Square({ inputValue }: SquareProps) {
  return (
    <section
      style={{ backgroundColor: inputValue }}
      className="w-64 h-64 mx-auto my-5 rounded-xl shadow-lg flex items-center justify-center text-white border border-black transition-colors duration-300"
    >
      <p className="text-lg font-semibold mix-blend-difference text-white">
        {inputValue || "Empty Value"}
      </p>
    </section>
  );
}
