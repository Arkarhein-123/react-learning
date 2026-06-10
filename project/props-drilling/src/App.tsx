import A from "./components/A";
import { GreetingContext } from "./context/GreetingContext";
// import D from "./components/D";

export default function App() {
  const contextValue = "Happy Coding!";
  return (
    <div>
      <GreetingContext.Provider value={contextValue}>
        <A greet="hello Gay" />
      </GreetingContext.Provider>
    </div>
  );
}
