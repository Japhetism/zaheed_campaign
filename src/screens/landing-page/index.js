import React, { useState, useEffect, useRef } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authentication } from '../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../constants/api'
import NotificationToast from '../../components/notification-alert'
import { stripHyphenFromString } from '../../utils/helper'
import { checkPhoneIsValid, checkPasswordIsValid } from '../../utils/validator'
import { saveData } from '../../utils/storage'

function LandingPage(props) {

  const firstRender = useRef(true)
  const [showLoginScreen, setShowLoginScreen] = useState(true)
  const [showRegisterScreen, setShowRegisterScreen] = useState(false)
  const [showOtpScreen, setShowOtpScreen] = useState(false)
  const [formData, setFormData] = useState({
    loginUsername: '',
    loginPassword: '',
    registerUsername: '',
    registerPassword: '',
    errorMessage: '',
    successMessage: '',
    otp: '',
    disableLoginButton: true,
    disableRegisterButton: true,
    disableOtpButton: false,
    redirect: false,
    isLoading: false,
    isLoginUsernameValid: false,
    isRegisterUsernameValid: false,
    isPasswordValid: false,
  })

  const onRegisterLinkClick = () => {
    setFormData(prevState => ({...prevState, errorMessage: null}))
    setShowRegisterScreen(true)
    setShowOtpScreen(false)
    setShowLoginScreen(false)
  }
  const onLoginLinkClick = () =>  {
    setFormData(prevState => ({...prevState, errorMessage: null}))
    setShowRegisterScreen(false)
    setShowLoginScreen(true)
    setShowOtpScreen(false)
  }

  const updateFormData = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const loginFormValidation = () => {
    if(formData.loginUsername && formData.loginPassword) {
      return false;
    }else{
      return true
    }
  }

  const registerFormValidation = () => {
    if(formData.registerUsername && formData.registerPassword) {
      return false;
    }else{
      return true
    }
  }

  const handleLoginFormSubmission = async (e) => {
    e.preventDefault()
    setFormData(prevState => ({...prevState, errorMessage: '', disableLoginButton: true, isLoading: true}))
    const loginFormData = {
      password: formData.loginPassword,
      phoneNumber: stripHyphenFromString(formData.loginUsername)
    }
    const loginResponseObj = await authentication.loginUser(loginFormData)
    const { status, response } = loginResponseObj
    if(status === SUCCESS_STATUS) {

    }else{
      const errorMessage = response
      setFormData(prevState => ({...prevState, errorMessage: errorMessage, disableLoginButton: false, isLoading: false}))
    }
  }

  const handleRegisterFormSubmission = async (e) => {
    setFormData(prevState => ({...prevState, errorMessage: '', disableRegisterButton: true, isLoading: true}))
    const registerFormData = {
      password: formData.registerPassword,
      phoneNumber: stripHyphenFromString(formData.registerUsername)
    }
    saveData("userInfo", JSON.stringify(registerFormData))
    const registerResponseObj = await authentication.registerUser(registerFormData)
    const { status, response } = registerResponseObj
    if(status === SUCCESS_STATUS) {
      setShowOtpScreen(true)
      setShowRegisterScreen(false)
      setShowLoginScreen(false)
      //saveData("userInfo", JSON.stringify(registerFormData))
    }else{
      const errorMessage = response
      setFormData(prevState => ({...prevState, errorMessage: errorMessage, disableRegisterButton: false, isLoading: false}))
    }
  }

  const handleSendOtp = async (e) => {
    setFormData(prevState => ({...prevState, errorMessage: '', disableRegisterButton: true}))
    const sendOtpResponseObj = await authentication.sendOtp(formData.registerUsername)
    const { status, response } = sendOtpResponseObj
    if(status === SUCCESS_STATUS) {
      setFormData(prevState => ({...prevState, successMessage: "OTP sent successfully"}))
    }else{
      setFormData(prevState => ({...prevState, errorMessage: response.error}))
    }
  }

  const handleOtpVerification = async (e) => {
    setFormData(prevState => ({...prevState, errorMessage: '', disableOtpButton: true, isLoading: true}))
    const verifyOtpFormData = {
      otp: formData.otp,
      sessionId: '23434434'
    }
    const verifyOtpResponseObj = await authentication.verifyOtp(verifyOtpFormData)
    const { status, response } = verifyOtpResponseObj
    if(status === SUCCESS_STATUS) {
      setFormData(prevState => ({...prevState, redirect: true}))
      props.history.push("/profile");
    }else{
      setFormData(prevState => ({...prevState, errorMessage: response ? response.error : "Something went wrong", disableOtpButton: false, isLoading: false}))
    }
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return
    }

    if(formData.redirect) {
      return <Redirect to="profile" />   
    }
      
    setFormData(prevState => ({ 
      ...prevState, 
      disableLoginButton: loginFormValidation() || !checkPhoneIsValid(stripHyphenFromString(formData.loginUsername)), 
      disableRegisterButton: registerFormValidation() || !checkPhoneIsValid(stripHyphenFromString(formData.registerUsername)) || !checkPasswordIsValid(formData.registerPassword),
      isLoginUsernameValid: checkPhoneIsValid(stripHyphenFromString(formData.loginUsername)),
      isRegisterUsernameValid: checkPhoneIsValid(stripHyphenFromString(formData.registerUsername)),
      isPasswordValid: checkPasswordIsValid(formData.registerPassword)
    }))
  }, [formData.loginUsername, formData.loginPassword, formData.registerPassword, formData.registerUsername])

  return (
    <div>
      <header>
        <div class="container-fluid row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h6>Jai Congress!!</h6>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h6 class="float-right">Jay Ho Rahul Gandhi!!!</h6>
          </div>
        </div>
        <h4 class="center-text slogan">Join hands for the change</h4>
        <div class="container-fluid row org">
          <div class="col-lg-6 col-md-6 col-sm-9 col-xs-9">
            <img src="../../assets/images/logo.png" class="logo" />
            <span class="org-name"><strong>All India Rahul Gandhi Brigade Congress</strong></span>
          </div>
        </div>
        <svg viewBox="0 50 500 500" preserveAspectRatio="xMinYMin meet" style={{zIndex: -1}}> 
          <path d="M0, 100 C150, 200 350, 0 500, 100 L500, 00 L0, 0 Z" style={{stroke: 'none', fill: '#FA8223'}}> </path> 
        </svg>
        <svg viewBox="0 40 500 500" preserveAspectRatio="xMinYMin meet" style={{zIndex: -2}}> 
          <path d="M0, 100 C150, 200 350, 0 500, 100 L500, 00 L0, 0 Z" style={{stroke: 'none', fill: '#FD9A24'}}> </path> 
        </svg> 
        <svg viewBox="0 30 500 500" preserveAspectRatio="xMinYMin meet" style={{zIndex: -2}}> 
          <path d="M0, 100 C150, 200 350, 0 500, 100 L500, 00 L0, 0 Z" style={{stroke: 'none', fill: '#FBB124'}}> </path> 
        </svg> 
        <svg viewBox="0 40 500 500" preserveAspectRatio="xMinYMin meet" style={{zIndex: -2}}> 
          <path d="M0, 100 C150, 200 350, 0 500, 100 L500, 00 L0, 0 Z" style={{stroke: 'none', fill: '#FD9A24'}}> </path> 
        </svg>
      </header>
      <section>
        <div class="container-fluid row">
          <div class="form col-lg-4 col-md-12 col-sm-12 col-xs-12">
            {showLoginScreen && <form onSubmit={ handleLoginFormSubmission }> 
              <NotificationToast 
                successMessage={formData.successMessage}
                errorMessage={formData.errorMessage}
              />
              <h3 style={{textAlign: 'center'}}>Existing Member</h3>
              <hr/>
              <div class="form-group">
                <label for="loginUsername">Phone Number</label>
                <input type="tel" placeholder="+91-4500-67800" pattern="[0-9]{3}-[0-9]{4}-[0-9]{6}" class="form-control" id="loginUsername" name="loginUsername" aria-describedby="emailHelp" onChange={updateFormData} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your details with anyone else.</small>
                {formData.loginUsername && !formData.isLoginUsernameValid && <small id="emailHelp" class="form-text error">Invalid phone number.</small>}
              </div>
              <div class="form-group">
                <label for="loginPassword">Password</label>
                <input type="password" class="form-control" id="loginPassword" name="loginPassword" onChange={updateFormData} />
              </div>
              <div class="form-group">
                <Link class="link-color" onClick={onRegisterLinkClick}>Become a member</Link>
                <Link class="float-right link-color" to="/forgot-password">Forgot Password?</Link>
              </div>
              <button type="button" class="btn btn-default-color buttonload" disabled={ formData.disableLoginButton } onClick={ handleLoginFormSubmission }>{formData.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Sign In</button>
            </form>}
            {showRegisterScreen && <form onSubmit={ handleRegisterFormSubmission }> 
              <h3 style={{textAlign: 'center'}}>New Member</h3>
              <NotificationToast 
                successMessage={formData.successMessage}
                errorMessage={formData.errorMessage}
              />
              <hr/>
              <div class="form-group">
                <label for="registerUsername">Phone Number</label>
                <input type="tel" placeholder="+91-4500-67800" pattern="[0-9]{3}-[0-9]{4}-[0-9]{6}" class="form-control" id="registerUsername" name="registerUsername" aria-describedby="emailHelp"  onChange={updateFormData}/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your details with anyone else.</small>
                {formData.registerUsername && !formData.isRegisterUsernameValid && <small id="emailHelp" class="form-text error">Invalid phone number.</small>}
              </div>
              <div class="form-group">
                <label for="registerPassword">Password</label>
                <input type="password" class="form-control" id="registerPassword" name="registerPassword" onChange={updateFormData} />
                {formData.registerPassword && !formData.isPasswordValid && <small id="emailHelp" class="form-text error">Password must be minimum of 4 characters long.</small>}
              </div>
              <div class="form-group">
                <Link class="pull-right link-color" onClick={onLoginLinkClick}>Already a member, login</Link>
              </div>
              <button type="button" class="btn btn-default-color buttonload" disabled={formData.disableRegisterButton} onClick={ handleRegisterFormSubmission }>{formData.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Become a member</button>
            </form>}
            {showOtpScreen && <form onSubmit={ handleOtpVerification }> 
              <h3 style={{textAlign: 'center'}}>Phone Number Verification</h3>
              <NotificationToast 
                successMessage={formData.successMessage}
                errorMessage={formData.errorMessage}
              />
              <hr/>
              <div class="form-group">
                <label for="registerUsername">OTP</label>
                <input type="text" class="form-control" id="registerUsername" name="registerUsername" aria-describedby="emailHelp"  onChange={updateFormData}/>
              </div>
              <button type="button" class="btn btn-default-color buttonload" disabled={formData.disableOtpButton} onClick={ handleOtpVerification }>{formData.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Verify</button>
              <a onClick={ handleSendOtp } class="pull-right link-color">Resend OTP</a>
            </form>}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
