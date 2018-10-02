import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import createStore from './store'
import TodoApp from './containers/TodoApp'
import App from './components/App'

const history = createBrowserHistory()
const store = createStore(history);

console.log(history.location)
console.log(store.getState())
//  Routeは直接URL書き込みを許さない。これは、historyへpushすることで成立するから
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/app" component={App} />
        <Route exact path="/" component={TodoApp} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);