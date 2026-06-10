import { createContext } from "react";

interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextType>({
  count: 0,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
});
