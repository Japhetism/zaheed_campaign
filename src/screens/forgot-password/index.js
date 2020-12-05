import './forgotPassword.css';
import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div class="forgot-password">
        <div class="col-lg-4 col-lg-offset-4">
            <img style={{marginTop: '20%', textAlign: 'center', marginLeft: '20%'}} src="../../assets/images/logo.png" />
        </div>
        <div class="forgot-password-main">
            <div class="form col-lg-4 col-lg-offset-4">
                <form>
                    <h3 class="center-text">Forgot Password</h3>
                    <hr/>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email Address/Phone Number</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" class="btn btn-primary">Reset Password</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;
