import { useState } from "react";
import Square from "./component/Square";
import Input from "./component/Input";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Square inputValue={inputValue} />
      <Input inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}
