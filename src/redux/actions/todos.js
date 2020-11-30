export const TODOS_FETCH = {
  REQUEST: "TODO_FETCH" + "_" + "REQUESTED",
  SUCCESS: "TODO_FETCH" + "_" + "SUCCEEDED",
  FAILER: "TODO_FETCH" + "_" + "FAILED",
};

export const fetchTodoAction = (payload) => {
  return {
    type: TODOS_FETCH.REQUEST,
    payload,
  };
};

export const changeTodoAction = (payload) => {
  return {
    type: TODOS_FETCH.SUCCESS,
    payload,
  };
};
