//import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {

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

                    <h3>PROFILE INFORMATION</h3>
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
                    <div class="col-md-3">
                        <div class="uploaded-profile-photo-container">
                            <img src="../../assets/images/user-profile.jpg" alt="user profile photo" class="uploaded-profile-photo" />
                        </div>
                    </div>
                    <div class="col-md-6">
                            <div>
                                <h5><strong>Personal Information</strong></h5>
                                <form class="form-vertical">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Salutation</label>
                                        <span class="col-lg-8">MR</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">First Name</label>
                                        <span class="col-lg-8">James</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Middle Name</label>
                                        <span class="col-lg-8">Jimoh</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Last Name</label>
                                        <span class="col-lg-8">Doe</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Date of Birth</label>
                                        <span class="col-lg-8">01/01/1984</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Sex</label>
                                        <span class="col-lg-8">Male</span>
                                    </div>
                                </form>
                            </div>
                            <br/><br/>
                            <div>
                                <h5><strong>Contact Information</strong></h5>
                                <form class="form-vertical">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Email</label>
                                        <span class="col-lg-8">jamesdoe@gmail.com</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Phone Number</label>
                                        <span class="col-lg-8">+91-4500-098712</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Address</label>
                                        <span class="col-lg-8">98, Mahvel Pada Rd, Virar</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">City</label>
                                        <span class="col-lg-8">Mumbai</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">State</label>
                                        <span class="col-lg-8">Maharashtra</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">PinCode</label>
                                        <span class="col-lg-8">401303</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Taluk</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">District</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                </form>
                            </div>
                            <br/><br/>
                            <div>
                                <h5><strong>Account Information</strong></h5>
                                <form class="form-vertical">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Subscription Type</label>
                                        <span class="col-lg-8">Standard</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Account Type</label>
                                        <span class="col-lg-8">Member</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Category</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                </form>
                            </div>
                            <br/><br/>
                            <div>
                                <h5><strong>Additional Information</strong></h5>
                                <form class="form-vertical">
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Blood Group</label>
                                        <span class="col-lg-8">O+</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Father/Husband Name</label>
                                        <span class="col-lg-8">James Doe</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Qulaification</label>
                                        <span class="col-lg-8">Phd</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Aadhar/PAN Card</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Lok Sabha</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Assembly</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Ward</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail3" class="col-lg-4">Polling Booth</label>
                                        <span class="col-lg-8"></span>
                                    </div>
                                </form>
                            </div>
                            <br/><br/>
                            <div>
                                <h5><strong>Identification</strong></h5>
                                <form class="form-vertical">
                                    <div class="form-group">
                                    <img src="../../assets/images/voter-card.jpg" alt="user profile photo" class="uploaded-id" />
                                    </div>
                                </form>
                            </div>
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-primary btn-sm"><i class="fa fa-edit"></i>Edit Profile</button>
                    </div>
                </div>
            </section>
        </div>                    
    </div>
  );
}

export default UserProfile;
