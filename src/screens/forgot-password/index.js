//import './forgotPassword.css';
import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
      <div class="container h-100 forgot-password">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-lg-offset-3 col-lg-4 col-lg-offset-3">
                <img src="../../assets/images/logo.png" />
                <form class="form">
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