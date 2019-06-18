import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";

const reducers = combineReducers({
  todos: () => []
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
