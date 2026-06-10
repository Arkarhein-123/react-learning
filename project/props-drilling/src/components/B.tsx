import { useContext } from "react";
import C from "./C";
import { GreetingContext } from "../context/GreetingContext";

export default function B({ greet }: { greet: string }) {
  const contextValue = useContext(GreetingContext);
  return (
    <div>
      <h1>{contextValue}</h1>
      <C greet={greet} />
    </div>
  );
}
