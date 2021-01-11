import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function AdditionalInformation(props) {
    return (
        <div>
            <h5><strong>Additional Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Blood Group</label>
                    <span class="col-lg-8">{props.profileDetails.bloodGroup}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Father/Husband Name</label>
                    <span class="col-lg-8">{props.profileDetails.husbandName}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Qualification</label>
                    <span class="col-lg-8">{props.profileDetails.qualification}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Aadhar/PAN Card</label>
                    <span class="col-lg-8">{props.profileDetails.aadhar}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Lok Sabha</label>
                    <span class="col-lg-8">{props.profileDetails.lokSabha}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Assembly</label>
                    <span class="col-lg-8">{props.profileDetails.assembly}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Ward</label>
                    <span class="col-lg-8">{props.profileDetails.ward}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Polling Booth</label>
                    <span class="col-lg-8">{props.profileDetails.pollingBooth}</span>
                </div>
            </form>
            <br/><br/>
        </div>                    
    );
}

export default AdditionalInformation;
