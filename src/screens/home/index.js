import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/nav-bar'
import Header from '../../components/header'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import DashboardScreen from './dashboard'
import UserProfileScreen from './user-profile'
import AccountSettingsScreen from './account-settings'
import DomainScreen from './domains'
import EventScreen from './events'

function HomeScreen() {
    return (
        <div class="wrapper">
            <Router>
                <NavBar />
                <div id="content">
                    <Header />
                    <Switch>
                        <Route exact path="/home" component={DashboardScreen} />
                        <Route exact path="/home/user-profile" component={UserProfileScreen} />
                        <Route exact path="/home/account-settings" component={AccountSettingsScreen} />
                        <Route exact path="/home/domains" component={DomainScreen} />
                        <Route exact path="/home/events" component={EventScreen} />
                    </Switch>
                </div>
            </Router>                    
        </div>
    );
}

export default HomeScreen;
