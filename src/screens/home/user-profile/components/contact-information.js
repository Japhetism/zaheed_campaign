import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function ContactInformation(props) {
    return (
        <div>
            <h5><strong>Contact Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Email</label>
                    <span class="col-lg-8">{props.profileDetails.email}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Phone Number</label>
                    <span class="col-lg-8">{props.profileDetails.phoneNumber}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Address</label>
                    <span class="col-lg-8">{props.profileDetails.address}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">City</label>
                    <span class="col-lg-8">{props.profileDetails.city}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">State</label>
                    <span class="col-lg-8">{props.profileDetails.state}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">PinCode</label>
                    <span class="col-lg-8">{props.profileDetails.pinCode}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Taluk</label>
                    <span class="col-lg-8">{props.profileDetails.taluk}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">District</label>
                    <span class="col-lg-8">{props.profileDetails.district}</span>
                </div>
            </form>
            <br/><br/>
        </div>                            
    );
}

export default ContactInformation;
