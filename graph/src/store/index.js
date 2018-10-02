import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import tasksReducers from '../reducers/tasks'

export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
    tasks: tasksReducers,
    router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}
