import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function PersonalInformation() {
    return (
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
            <br/><br/>
        </div>        
    );
}

export default PersonalInformation;
