import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducer } from "./reducer";

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);
const store = createStore(reducer, enhancer);

export default store;
