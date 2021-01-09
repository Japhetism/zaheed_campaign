//import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function AccountSettings() {

  return (
    <div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>All India Rahul Gandhi Brigade Congress</h3>
            <hr/>
        </div>

        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu">Home</a>
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
    <div id="content">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <h3>ACCOUNT SETTINGS</h3>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">James Doe</a>
                            </li> */}
                            <li class="nav-item">
                            <div class="dropdown">
                            <span class="username">James Doe</span>
                                <button class="btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-user fa-2x"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link class="dropdown-item" to="/home/user-profile">Profile</Link>
                                    <Link class="dropdown-item" to="/home/account-settings">Account Settings</Link>
                                    <Link class="dropdown-item" to="/login">Logout</Link>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Change Password<small> Change your account password</small>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Current Password</label>
                                        <div class="col-sm-8">
                                        <input type="password" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">New Password</label>
                                        <div class="col-sm-8">
                                        <input type="password" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Confirm Password</label>
                                        <div class="col-sm-8">
                                        <input type="password" class="form-control" id="inputPassword" />
                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-primary">Change Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                Additional Settings
                            </div>
                            <div class="card-body">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>                    
    </div>
  );
}

export default AccountSettings;
