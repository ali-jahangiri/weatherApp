import { applyMiddleware, combineReducers, createStore, compose } from "redux";

import thunk from "redux-thunk";

import currentCityReducer from "./reducers/setCity-reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({ currentCity: currentCityReducer });

export default createStore(rootReducer, enhancer);
