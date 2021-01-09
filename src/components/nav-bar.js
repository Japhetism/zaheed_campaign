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
                <li class="active">
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/home/domains">Domains</Link>
                </li>
                <li>
                    <Link to="/home/events">Events</Link>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
