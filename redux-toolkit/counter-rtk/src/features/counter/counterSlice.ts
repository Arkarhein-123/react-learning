import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Counter State
interface CounterState {
    value: number;
}

//Initial state
const InitialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: InitialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        increaseByAmount: (state,action:PayloadAction<number>) =>{
            state.value += action.payload
        } 
    },
});

export const { increment, decrement, reset, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;
