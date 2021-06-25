import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import categories from "./category";
import products from "./products";
import cart from "./cart";

const reducers = combineReducers({ categories, products, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
