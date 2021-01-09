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
import DashboardScreen from './screens/home/dashboard'
import ResetPasswordScreen from './screens/reset-password'
import ErrorScreen from './screens/error'
import UserProfileScreen from './screens/home/user-profile'
import AccountSettingsScreen from './screens/home/account-settings'
import DomainScreen from './screens/home/domains'
import EventScreen from './screens/home/events'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={LandingPageScreen} />
          <Route exact path="/login" component={LandingPageScreen} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/forgot-password" component={ForgotPasswordScreen} />
          <Route exact path="/reset-password/:token" component={ResetPasswordScreen} />
          <Route exact path="/home" component={DashboardScreen} />
          <Route exact path="/home/user-profile" component={UserProfileScreen} />
          <Route exact path="/home/account-settings" component={AccountSettingsScreen} />
          <Route exact path="/home/domains" component={DomainScreen} />
          <Route exact path="/home/events" component={EventScreen} />
          <Route component={ErrorScreen} />
      </Switch>
    </Router>
  );
}

export default App;
