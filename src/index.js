import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  createStore, applyMiddleware} from "redux";
import  rootReducer   from "./store/reducer";
import {  Provider} from "react-redux";
import thunk from "redux-thunk";

/**applyMiddleware
 * Creates a store enhancer that applies middleware to the dispatch method of the Redux store. This is handy for a variety of tasks, such as expressing asynchronous actions in a concise manner, or logging every action payload.

See redux-thunk package as an example of the Redux middleware.

Because middleware is potentially asynchronous, this should be the first store enhancer in the composition chain.

Note that each middleware will be given the dispatch and getState functions as named arguments.

@returns — A store enhancer applying the middleware.

@template Ext — Dispatch signature added by a middleware.

@template S — The type of the state supported by a middleware.
 */
const store = createStore(rootReducer,
  applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
