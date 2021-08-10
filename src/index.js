import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import Login from '@pages/login/login';
import Admin from '@pages/admin/admin';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading='loading.....' persistor={persistor}>
     <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
