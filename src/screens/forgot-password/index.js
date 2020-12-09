import React, { useRef, useState, useEffect } from 'react'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../constants/api'
import NotificationToast from '../../components/notification-alert'
import { authentication } from '../../mixins/api'
import { Link, Redirect } from 'react-router-dom'

function ForgotPassword() {
  const firstRender = useRef(true)
    
  const [formData, setFormData] = useState({
    email: "",
    errorMessage: "",
    successMessage: "",
    disableButton: true
  })

  const updateFormData = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const formValidation = () => {
    if(formData.email) {
      return false;
    }else{
      return true
    }
  }

  const handleForgotPasswordSubmission = async () => {
    setFormData(prevState => ({...prevState, errorMessage: '', disableButton: true}))
    const forgotPasswordFormData = {
        email: formData.email
    }
    const forgotPasswordResponseObj = await authentication.loginUser(forgotPasswordFormData)
    const { status, response } = forgotPasswordResponseObj
    if(status === SUCCESS_STATUS) {

    }else{
      setFormData(prevState => ({...prevState, errorMessage: response.error, disableButton: false}))
    }
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return
    }

    setFormData(prevState => ({ ...prevState, disableButton: formValidation()}))
  }, [formData.email])

  return (
    <div class="container h-100 forgot-password">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-lg-offset-3 col-lg-4 col-lg-offset-3">
          <img src="../../assets/images/logo.png" />
          <form class="form" onSubmit={ handleForgotPasswordSubmission }>
            <NotificationToast 
              successMessage={formData.successMessage}
              errorMessage={formData.errorMessage}
            />
            <h3 class="center-text">Forgot Password</h3>
            <hr/>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Address</label>
              <input type="text" class="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={updateFormData} />
            </div>
            <button type="button" class="btn btn-default-color" disabled={ formData.disableButton } onClick={ handleForgotPasswordSubmission }>Forgot Password</button>
            <div class="form-group">
              <Link class="float-right link-color" to="/">Back to login</Link>
            </div>  
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;