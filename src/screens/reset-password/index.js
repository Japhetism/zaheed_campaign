import React, { useRef, useState, useEffect } from 'react'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../constants/api'
import NotificationToast from '../../components/notification-alert'
import { authentication } from '../../mixins/api'
import { checkPasswordIsValid, checkPasswordIsMatch } from '../../utils/validator'

function ResetPassword() {
  const firstRender = useRef(true)
    
  const [formData, setFormData] = useState({
    errorMessage: "",
    successMessage: "",
    disableButton: true,
    isPasswordValid: false,
    isPasswordMatch: false,
    password: "",
    confirmPassword: "",
    isLoading: false,
  })

  const updateFormData = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const formValidation = () => {
    if(formData.confirmPassword && formData.password) {
      return false;
    }else{
      return true
    }
  }

  const handleResetPasswordSubmission = async () => {
    setFormData(prevState => ({...prevState, errorMessage: '', disableButton: true, isLoading: true}))
    const resetPasswordFormData = {
        password: formData.password,
        confirmPassword: formData.confirmPassword
    }
    const forgotPasswordResponseObj = await authentication.resetPassword(resetPasswordFormData)
    const { status, response } = forgotPasswordResponseObj
    if(status === SUCCESS_STATUS) {

    }else{
      setFormData(prevState => ({...prevState, errorMessage: response, disableButton: false, isLoading: false}))
    }
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return
    }

    setFormData(prevState => ({ 
      ...prevState, 
      disableButton: !checkPasswordIsValid(formData.password) || !checkPasswordIsMatch(formData.password, formData.confirmPassword),
      isPasswordValid: checkPasswordIsValid(formData.password),
      isPasswordMatch: checkPasswordIsMatch(formData.password, formData.confirmPassword)
    }))
  }, [formData.password, formData.confirmPassword])

  return (
    <div class="container h-100 forgot-password">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-lg-offset-3 col-lg-4 col-lg-offset-3">
          <img src="../../assets/images/logo.png" />
          <form class="form" onSubmit={ handleResetPasswordSubmission }>
            <NotificationToast 
                successMessage={formData.successMessage}
                errorMessage={formData.errorMessage}
            />
            <h3 class="center-text">Reset Password</h3>
            <hr/>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input type="text" class="form-control" id="password" name="password" aria-describedby="emailHelp" onChange={updateFormData} />
              {formData.password && !formData.isPasswordValid && <small id="emailHelp" class="form-text error">Password must be minimum of 4 characters long.</small>}
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Confirm Password</label>
              <input type="text" class="form-control" id="confirmPassword" name="confirmPassword" aria-describedby="emailHelp" onChange={updateFormData} />
              {formData.confirmPassword && !formData.isPasswordMatch && <small id="emailHelp" class="form-text error">Password does not match.</small>}
            </div>
            <button type="button" class="btn btn-default-color buttonload" disabled={ formData.disableButton } onClick={ handleResetPasswordSubmission }>{formData.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;