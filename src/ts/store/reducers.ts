import { combineReducers } from "redux";
import testReducer from "./modules/test_module/reducers";

const rootReducer = combineReducers({ testReducer });

export default rootReducer;
