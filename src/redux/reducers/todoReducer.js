import * as actions from "../actions/todos";

const initialState = {
  todos: [],
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case actions.TODOS_FETCH.SUCCESS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}
