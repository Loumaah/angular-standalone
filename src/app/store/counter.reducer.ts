import { createReducer, on } from "@ngrx/store";
import { CounterState } from "./counter.state";
import { addBy, decrement, increment } from "./counter.action";

export const initialState: CounterState = { signe: 'nul', result: 0 }

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({...state, result: state.result + 1})),
  on(decrement, state => ({...state, result: state.result - 1})),
  on(addBy, (state, { value }) => ({...state, result: state.result + value}))
)