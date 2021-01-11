import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function PersonalInformation(props) {
    return (
        <div>
            <h5><strong>Personal Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Salutation</label>
                    <span class="col-lg-8">{props.profileDetails.saluation}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">First Name</label>
                    <span class="col-lg-8">{props.profileDetails.firstName}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Middle Name</label>
                    <span class="col-lg-8">{props.profileDetails.middleName}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Last Name</label>
                    <span class="col-lg-8">{props.profileDetailslastName}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Date of Birth</label>
                    <span class="col-lg-8">{props.profileDetails.dateOfBirth}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Sex</label>
                    <span class="col-lg-8">{props.profileDetails.sex}</span>
                </div>
            </form>
            <br/><br/>
        </div>        
    );
}

export default PersonalInformation;
