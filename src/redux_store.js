import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
import { Map } from "immutable";
const initialState = Map({});
const middelware = [thunk];
const redux_store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(...middelware))
);
export default redux_store;
