import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import EventGrid from './views/events-grid'
import AddEvent from './views/add-event'
import ViewEvent from './views/view-event'

function EventScreen() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home/events" component={EventGrid} />
                <Route exact path="/home/events/add" component={AddEvent} />
                <Route exact path="/home/events/view" component={ViewEvent} />
            </Switch>
        </Router>                    
    );
}

export default EventScreen;
