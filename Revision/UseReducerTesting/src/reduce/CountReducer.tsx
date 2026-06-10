

type State = { count: number };
type Action = { type: "increment" | "decrement" | "reset" };

export default function CountReducer(state : State, action : Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      throw new Error("Unknown action");
  }
}
