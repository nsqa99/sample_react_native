import counterReducer from "./reducers/counterReducer";
import { createStore } from "redux";

console.log("here");

const store = createStore(counterReducer);
console.log(store);
export default store;
