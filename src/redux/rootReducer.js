import { combineReducers } from "redux";
import { tokenReducter } from "./token/tokenReducer";
import { userReducter } from "./user/userReducer";

export const rootReducer = combineReducers(
  {
    token: tokenReducter,
    user: userReducter
 }
)