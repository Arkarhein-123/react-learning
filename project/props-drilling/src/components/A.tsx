// import { useContext } from "react";
import B from "./B";
// import { GreetingContext } from "../context/GreetingContext";

export default function A({ greet }: { greet: string }) {
 


  return (
    <div>
      {/* <h1>{contextValue}</h1> */}
      <B greet={greet} />
    </div>
  );
}
