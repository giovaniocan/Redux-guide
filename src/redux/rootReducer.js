import { combineReducers } from "redux"; // ele que vai pegar todos os nossos reducers e colocar no root
import { userReducer } from "./user/reducer";
import  cartReducer  from "./cart/slice";

export const rootReducer = combineReducers({
    userReducer, 
    cartReducer
});

