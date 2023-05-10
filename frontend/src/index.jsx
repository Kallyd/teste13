import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// middleware
import promise from "redux-promise";

import App from "./main/app";
import reducers from "./main/reducers";

const devtTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = createStore(reducers);
const store = applyMiddleware(promise)(createStore)(reducers, devtTools);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
