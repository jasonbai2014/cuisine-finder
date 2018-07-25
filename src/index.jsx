import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './component/page/Home/home';
import reducer from './reducers';
import saga from './sagas';
import './styles/main.css';

const sagaMiddleware = createSagaMiddleware();
const logger = store => next => (action) => {
  if (process.env.NODE_ENV === 'development') {
    console.group('Dispatching', action.type);
    console.log('Prev State', store.getState());
    console.log('Action', action);
    next(action);
    console.log('Next State', store.getState());
    console.groupEnd();
  }
};
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);
