import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { createBrowserHistory } from 'history';
import  Main  from './containers/App/index';


const history = createBrowserHistory();
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main} />
        </Router >
      </Provider>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
