import React from 'react';
import { createStore , combineReducers } from "redux";
import { Provider } from "react-redux";
import  productsReducer  from "./store/reducer/product";
import  ShopNavigation from "./navigation/ShopNavigation";

const rootReducer = combineReducers({
  products:productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
       <ShopNavigation />
    </Provider>
  );
}

