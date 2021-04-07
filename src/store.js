import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

let Store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default Store;
