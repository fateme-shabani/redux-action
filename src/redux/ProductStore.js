import { applyMiddleware, createStore } from "redux";
import ProductReducer from "./ProductReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const Store = createStore(ProductReducer, applyMiddleware(thunk, logger));
export default Store;
