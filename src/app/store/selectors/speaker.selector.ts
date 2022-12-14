import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "../state/state";

const speakersSelector = createFeatureSelector<State>('get_speaker');

export const getSpeakersSelector = createSelector(speakersSelector, (state) => {
    return state.speakers;
})