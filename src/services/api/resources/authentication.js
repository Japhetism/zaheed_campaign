import Requester from '../requester'

const API_BASE_URL = process.env.REACT_APP_AUTHENTICATION

export default class Authentication {
    constructor(props) {
        const currentUser = JSON.parse(localStorage.getItem("user"))
        this.currentUserEmail = currentUser ? currentUser.email : null
        this.currentUser = currentUser ? currentUser.access_token : null
        this.refresh_token = currentUser ? currentUser.refresh_token : null
        this.apiRequester = props ? props.apiRequester || new Requester({
        apiBaseUrl: API_BASE_URL
        }) : new Requester({
            apiBaseUrl: API_BASE_URL
        })
    }

    loginUser (data) {
        return this.apiRequester.post({
        endpoint: 'login',
        body: data
        })
    }

    registerUser (data) {
        return this.apiRequester.post({
          endpoint: 'new',
          body: data
        })
    }

    sendOtp (data) {
        return this.apiRequester.get({
          endpoint: 'otp',
          body: data
        })
    }

    verifyOtp (data) {
        return this.apiRequester.post({
          endpoint: 'verify-otp',
          body: data
        })
    }

    forgotPassword (data) {
        return this.apiRequester.post({
            endpoint: 'forgot-password',
            body: data
        })
    }

    resetPassword (data) {
        return this.apiRequester.post({
            endpoint: 'reset-password',
            body: data
        })
    }
  
}
