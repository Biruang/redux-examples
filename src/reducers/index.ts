import {combineReducers} from "redux";
import {listReducer, TListState} from "./list";

export type TRootReducer = {
  list: TListState
};

export const rootReducer = combineReducers({
  list: listReducer
})
