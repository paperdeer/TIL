import { combineReducers } from "redux";
import Counter from './Counter';
import todos from "./Todos";

const rootReducer = combineReducers({
    Counter,
    todos
})
export default rootReducer;
