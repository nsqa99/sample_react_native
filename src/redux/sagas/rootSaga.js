import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { API } from "../../utils/constants";
import { changeTodoAction, TODOS_FETCH } from "../actions/todos";
import axios from "axios";

function* fetchTodos() {
  try {
    const response = yield axios.get(API.TODOS);
    if (response?.data) {
      yield put(changeTodoAction(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

function* fetchTodosWatcher() {
  yield takeLatest(TODOS_FETCH.REQUEST, fetchTodos);
}

export default fetchTodosWatcher;
