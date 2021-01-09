import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function ContactInformation() {
    return (
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
            <br/><br/>
        </div>                            
    );
}

export default ContactInformation;
