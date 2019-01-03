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

