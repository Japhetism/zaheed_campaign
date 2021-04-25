import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {  
    return (
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>All India Rahul Gandhi Brigade Congress</h3>
                <hr/>
            </div>
            <ul class="list-unstyled components">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/home/domains">Domains</Link>
                </li>
                <li>
                    <Link to="/home/events">Events</Link>
                </li>
                <li>
                    <Link to="/home/subscriptions">Subscriptions</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
