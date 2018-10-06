import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../_reducers'


export default function createStore(history){
  let middlewares = [routerMiddleware(history),thunk]

  return reduxCreateStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
}
