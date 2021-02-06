import React, { useState, useEffect, useRef } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { authentication } from '../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../constants/api'
import NotificationToast from '../../components/notification-alert'
import { stripHyphenFromString } from '../../utils/helper'
import { checkPhoneIsValid, checkPasswordIsValid } from '../../utils/validator'
import { saveData, retrieveStoredData } from '../../utils/storage'

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
    sessionId: '',
    disableLoginButton: true,
    disableRegisterButton: true,
    disableOtpButton: true,
    redirect: false,
    isLoading: false,
    isLoginUsernameValid: false,
    isRegisterUsernameValid: false,
    isPasswordValid: false,
  })

  const onLoginLinkClick = () =>  {
    setFormData(prevState => ({...prevState, errorMessage: null}))
    setShowRegisterScreen(false)
    setShowLoginScreen(true)
    setShowOtpScreen(false)
  }

  const onRegisterLinkClick = () => {
    setFormData(prevState => ({...prevState, errorMessage: null}))
    setShowRegisterScreen(true)
    setShowOtpScreen(false)
    setShowLoginScreen(false)
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

  const otpFormValidation = () => {
    if(formData.otp) {
      return false
    }else{
      return true
    }
  }

  const handleLoginFormSubmission = async (e) => {
    setFormData(prevState => ({...prevState, errorMessage: '', disableLoginButton: true, isLoading: true}))
    const loginFormData = {
      password: formData.loginPassword,
      phoneNumber: stripHyphenFromString(formData.loginUsername)
    }
    saveData("userInfo", JSON.stringify(loginFormData))
    const loginResponseObj = await authentication.loginUser(loginFormData)
    const { status, response } = loginResponseObj
    if(status === SUCCESS_STATUS) {
      saveData("userInfo", JSON.stringify(response))
      setFormData(prevState => ({...prevState, disableLoginButton: true, isLoading: false}))
      props.history.push("/home");
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
      saveData("userInfo", JSON.stringify(response.data))
      setShowOtpScreen(true)
      setShowRegisterScreen(false)
      setShowLoginScreen(false)
      setFormData(prevState => ({...prevState, errorMessage: '', disableRegisterButton: true, isLoading: false, sessionId: response.data.otpSession}))
      handleSendOtp()
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
      const successMessage = `OTP is sent to your phone number ${formData.registerUsername}`
      setFormData(prevState => ({...prevState, successMessage}))
    }else{
      setFormData(prevState => ({...prevState, errorMessage: response.error}))
    }
  }

  const handleOtpVerification = async (e) => {
    setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableOtpButton: true, isLoading: true}))
    const verifyOtpFormData = {
      otp: formData.otp,
      sessionId: formData.sessionId
    }
    const verifyOtpResponseObj = await authentication.verifyOtp(verifyOtpFormData)
    console.log(verifyOtpResponseObj)
    const { status, response } = verifyOtpResponseObj
    console.log(response)
    if(status === SUCCESS_STATUS) {
      let userInfo = JSON.parse(retrieveStoredData('userInfo'))
      userInfo.person.phoneVerified = true
      saveData("userInfo", JSON.stringify(userInfo))
      setFormData(prevState => ({...prevState, successMessage: 'Your phone number is verified'}))
      setTimeout(() => {
        props.history.push("/profile");
      }, 3000)
    }else{
      setFormData(prevState => ({...prevState, errorMessage: response, disableOtpButton: false, isLoading: false}))
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
      disableOtpButton: otpFormValidation(),
      isLoginUsernameValid: checkPhoneIsValid(stripHyphenFromString(formData.loginUsername)),
      isRegisterUsernameValid: checkPhoneIsValid(stripHyphenFromString(formData.registerUsername)),
      isPasswordValid: checkPasswordIsValid(formData.registerPassword)
    }))
  }, [formData.loginUsername, formData.loginPassword, formData.registerPassword, formData.registerUsername, formData.otp])

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
            {showLoginScreen && <form> 
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
                <label for="otp">OTP</label>
                <input type="text" class="form-control" id="otp" name="otp" aria-describedby="emailHelp"  onChange={updateFormData}/>
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
