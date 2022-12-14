import { createAction, props } from '@ngrx/store';
import { Speaker } from '../../models/speaker.model';

const GET_SPEAKER = '[Speaker List] Get Speakers';
const GET_SPEAKER_SUCCESS = '[Speaker List] Get Speakers Success';
const GET_SPEAKER_FAILURE = '[Speaker List] Get Speakers Failure';

export const getSpeakers = createAction(GET_SPEAKER);

export const getSpeakersSuccess = createAction(GET_SPEAKER_SUCCESS, props<{ speakers: Speaker[]}>());

export const getSpeakersFailure = createAction(
  GET_SPEAKER_FAILURE,
  props<{ message: string }>()
);
