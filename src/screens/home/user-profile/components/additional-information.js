import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function AdditionalInformation() {
    return (
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
            <br/><br/>
        </div>                    
    );
}

export default AdditionalInformation;
