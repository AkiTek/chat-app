import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import messageReducer from '../reducers/message'


export default function createStore(history){
  let middlewares = [routerMiddleware(history),logger,thunk]

  return reduxCreateStore(
    combineReducers({
    messages: messageReducer,
    router: routerReducer
    }),
    applyMiddleware(...middlewares)
  );
}
