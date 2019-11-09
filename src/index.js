import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { fetchGreeting } from './action'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

function render() {
  const root = document.getElementById('react-root');
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
}

render();
store.subscribe(render);
store.dispatch(fetchGreeting());
