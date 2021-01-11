import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../../../components/modal'

function PhoneNumberVerification(props) {
    const formBody = <div class="form-group">
        <label for="otp">We have sent an SMS with a code to your phone number.</label>
        <label for="otp">To complete your phone number verification, please enter the 6-digits activation code.</label>
        <input type="text" class="form-control" placeholder="Enter OTP" id="otp" name="otp" aria-describedby="emailHelp" maxLength={props.otpLength} onChange={ props.updateFormData } />
        <a onClick={ props.handleSendOtp } class="pull-right link-color verification-link">Resend OTP</a>
    </div>
    return (
        <React.Fragment>
            {!props.canVerifyPhone && <span class="error">
                * Kindly verify your phone number.&nbsp; 
                <a onClick={ props.handleSendOtp } class="verification-link" data-toggle="modal" data-target="#exampleModal">
                    Click here for phone number verification
                </a>
            </span>}
            <br/><br/>
            <Modal 
                title={'Phone Number Verification'} 
                body={formBody} buttonName={'Verify'} 
                buttonAction={props.handleOtpVerification}
                disableButton={props.disableButton}
                isLoading={props.isLoading}
                dismissModal={true}
            />
        </React.Fragment>
    );
}

export default PhoneNumberVerification;
