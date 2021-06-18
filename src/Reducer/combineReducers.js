import { combineReducers } from "redux";
import { counter } from "./Counter";

// 這裡設定computed涵式combine Reducer 
// 這裡設定讓store監控調用涵式

const rootReducer = combineReducers({

    counter
});

export default rootReducer ;
