import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectResult = createSelector(
    selectCounterState,
    (state) => state.result
)
export const selectSigne = createSelector(
    selectCounterState,
    (state) => state.signe
) 