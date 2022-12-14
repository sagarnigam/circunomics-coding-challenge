import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '../state/state';
import { getSpeakers, getSpeakersSuccess } from '../actions/speaker.action';

const speakerReducer = createReducer(
  initialState,
  on(getSpeakersSuccess, (state: State, action) => {
    return {
      ...state,
      speakers: action.speakers,
    };
  })
);

export function reducer (state: State | undefined, action: Action) {
  return speakerReducer(state, action);
};

