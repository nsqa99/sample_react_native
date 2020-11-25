import * as actions from "../actions/counter";

const initialState = {
  counter: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return { ...state, counter: action.payload };
    case actions.DECREMENT_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
