// Importe o método applyMiddleware
import { createStore, applyMiddleware, compose } from 'redux';
// Importe o redux-thunk
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
// Aplique o middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
