import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { createBrowserHistory } from 'history';
import Main from './containers/App/index';
import Welcome from './containers/Welcome/index';
import { connect } from 'react-redux';

const history = createBrowserHistory();
const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentWillMount() {
    this.setState({ logged: this.isLogged() })
  }

  isLogged() {
    const { user } = store.getState();
    return (user.email === '' && user.password === '');
  }

  render() {
    const unsubscribe = store.subscribe(() => {
      if (this.state.logged !== this.isLogged())
        this.setState({ logged: this.isLogged() })
    })
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        !this.state.logged ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/welcome'
            }} />
          )
      )} />
    )
    const LogRedirectRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        this.state.logged ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/'
            }} />
          )
      )} />
    )
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <PrivateRoute path="/" exact component={Main} />
            <LogRedirectRoute path="/welcome" component={Welcome} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default connect(
  (state) => ({
      user: state.user,
  }),
)(App)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
