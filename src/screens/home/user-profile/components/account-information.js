import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function AccountInformation(props) {
    return (
        <div>
            <h5><strong>Account Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Subscription Type</label>
                    <span class="col-lg-8">{props.profileDetails.subscription}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Account Type</label>
                    <span class="col-lg-8">{props.profileDetails.accountType}</span>
                </div>
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-4">Category</label>
                    <span class="col-lg-8">{props.profileDetails.category}</span>
                </div>
            </form>
            <br/><br/>
        </div>   
    );
}

export default AccountInformation;
