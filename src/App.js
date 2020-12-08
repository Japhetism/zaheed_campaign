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

function App() {
  return (
    <Router>
      <switch>
          <Route exact path="/" component={LandingPageScreen} />
          <Route exact path="/login" component={LandingPageScreen} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/forgot-password" component={ForgotPasswordScreen} />
        <Route exact path="/home" component={DashboardScreen} />
      </switch>
    </Router>
    // <React.Fragment>
    //   <LandingPage />
    // </React.Fragment>
  );
}

export default App;
