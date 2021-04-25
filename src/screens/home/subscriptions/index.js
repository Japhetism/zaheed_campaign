import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import SubscriptionGrid from './views/subscriptions-grid'
import AddSubscription from './views/add-subscription'
import ViewSubscription from './views/view-subscription'

function SubscriptionScreen() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home/subscriptions" component={SubscriptionGrid} />
                <Route exact path="/home/subscriptions/add" component={AddSubscription} />
                <Route exact path="/home/subscriptions/view" component={ViewSubscription} />
            </Switch>
        </Router>                    
    );
}

export default SubscriptionScreen;
