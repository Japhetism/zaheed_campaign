import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { retrieveStoredData } from '../utils/storage'

function Header() {
    const [formData, setFormData] = useState({
        username: '',
        notifications: []
    })
    const setHeaderInformation = () => {
        const { username } = JSON.parse(retrieveStoredData('userInfo'))
        const { person: { phoneVerified, points } } = JSON.parse(retrieveStoredData('userInfo'))
        const notifications = []
        if(!phoneVerified) {
            notifications.push("Verify your phone number")
        }
        if(points <= 0) {
            notifications.push("Complete your profile")
        }
        setFormData({...formData, username, notifications})
    }
    useEffect(() => {
        setHeaderInformation()
    }, [])  
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <small>Jay Ho Rahul Gandhi!!!</small>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="btn btn-notification" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-bell fa-lg"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <h5 class="dropdown-item align-item-center text-bold notification-text">Notifications</h5>
                                    {formData.notifications.map(value => <li class="dropdown-item" key={value}><i class="fa fa-circle"></i>{`${value}.`}</li>)}
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <span class="username">{formData.username}</span>
                                <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user fa-2x"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link class="dropdown-item" to="/home/user-profile">Profile</Link>
                                    <Link class="dropdown-item" to="/home/account-settings">Account Settings</Link>
                                    <a class="dropdown-item" href="/logout">Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
