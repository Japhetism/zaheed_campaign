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
import SubscriptionScreen from './subscriptions'

function HomeScreen() {
    return (
        <div class="wrapper">
            <Router>
                <NavBar />
                <div id="content">
                    <Header />
                    <Switch>
                        <Route exact path="/home" component={DashboardScreen} />
                        <Route path="/home/user-profile" component={UserProfileScreen} />
                        <Route path="/home/account-settings" component={AccountSettingsScreen} />
                        <Route path="/home/domains" component={DomainScreen} />
                        <Route path="/home/events" component={EventScreen} />
                        <Route path="/home/subscriptions" component={SubscriptionScreen} />
                    </Switch>
                </div>
            </Router>                    
        </div>
    );
}

export default HomeScreen;
