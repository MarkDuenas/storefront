import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import categories from "./category";
import products from "./products";

const reducers = combineReducers({ categories, products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
