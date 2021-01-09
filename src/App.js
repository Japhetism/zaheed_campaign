// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import LandingPageScreen from './screens/landing-page'
import ProfileScreen from './screens/profile'
import ForgotPasswordScreen from './screens/forgot-password'
import ResetPasswordScreen from './screens/reset-password'
import ErrorScreen from './screens/error'
import HomeScreen from './screens/home'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={LandingPageScreen} />
          <Route exact path="/login" component={LandingPageScreen} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/forgot-password" component={ForgotPasswordScreen} />
          <Route exact path="/reset-password/:token" component={ResetPasswordScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
