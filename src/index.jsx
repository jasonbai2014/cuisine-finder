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
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(saga);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);
