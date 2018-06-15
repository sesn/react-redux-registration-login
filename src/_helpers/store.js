import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'react-thunk';
import { createLogger } from 'react-logger';
import rootReducer from './_reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);