import { TEST_TYPE } from '../actions/types';

const initialState = {
  test: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_TYPE:
      return;
    default:
      return state;
  }
}
