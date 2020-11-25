import counterReducer from "./reducer/counterReducer";
import { creatStore } from "redux";

const store = creatStore(counterReducer);
export default store;
