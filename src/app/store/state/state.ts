import { Speaker } from "../../models/speaker.model";

export interface State {
  speakers: Speaker[];
}

export const initialState: State = {
  speakers: [],
};
