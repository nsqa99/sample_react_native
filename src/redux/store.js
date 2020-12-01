import counterReducer from "./reducers/counterReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import fetchTodosWatcher from "../redux/sagas/rootSaga";
import reducer from "./reducers/index";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(fetchTodosWatcher);

export default store;
