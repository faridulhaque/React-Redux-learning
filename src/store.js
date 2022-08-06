import { createStore } from "redux";
import { counterReducer } from "./ReduxWork/Reducers/CounterReducers";

const store = createStore(counterReducer);
export default store;
