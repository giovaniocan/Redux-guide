import { combineReducers } from "redux"; // ele que vai pegar todos os nossos reducers e colocar no root
import { userReducer } from "./user/reducer";


export const rootReducer = combineReducers({userReducer});

