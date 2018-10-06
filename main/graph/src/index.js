import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import createStore from './_helpers/store'
// import TodoApp from './containers/TodoApp'
// import App from './components/App'
import { App } from './App'

const history = createBrowserHistory()
const store = createStore(history);

console.log(history.location)
console.log(store.getState())
//  Routeは直接URL書き込みを許さない。これは、historyへpushすることで成立するから
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);