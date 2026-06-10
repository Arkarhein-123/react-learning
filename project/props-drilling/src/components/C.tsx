import D from "./D";

export default function C({ greet }: { greet: string }) {
  return (
    <div>
      <D greet={greet} />
    </div>
  );
}
