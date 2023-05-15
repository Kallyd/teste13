import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';


import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// middleware
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
// import Routes from "./main/routes";

// import App from "./main/app";
import AuthOrApp from './main/authOrApp';
import reducers from "./main/reducers";

const devtTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(reducers);
const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devtTools
);

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <Routes /> */}
    <AuthOrApp />
  </Provider>,
  document.getElementById("app")
);

reportWebVitals();
