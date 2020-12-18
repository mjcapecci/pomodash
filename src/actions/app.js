import { SET_CURRENT_PROJECT, SET_TIMER_ACTIVE } from './types';

export const setCurrentProject = (project) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PROJECT,
    payload: project,
  });
};

export const setTimerActive = (bool) => (dispatch) => {
  dispatch({
    type: SET_TIMER_ACTIVE,
    payload: bool,
  });
};

export const setCurrentDayEpoch = () => (dispatch) => {
  // const date = new Date();
  // console.log(date.now());
};
