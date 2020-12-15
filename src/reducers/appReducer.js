import { SET_CURRENT_PROJECT, SET_TIMER_ACTIVE } from '../actions/types';

const initialState = {
  currentProject: null,
  timerActive: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: payload,
      };
    case SET_TIMER_ACTIVE:
      return {
        ...state,
        timerActive: payload,
      };
    default:
      return state;
  }
}
