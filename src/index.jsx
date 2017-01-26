import React from "react";
import ReactDom from "react-dom";
import App from "./components/App.jsx";
import rootReducer from "./reducers/rootReducer.jsx";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";

let logger = createLogger();

let middlewares = applyMiddleware(thunk, logger);
let store = createStore(rootReducer, middlewares);

ReactDom.render(<Provider store={store}><App/></Provider>, document.body);
