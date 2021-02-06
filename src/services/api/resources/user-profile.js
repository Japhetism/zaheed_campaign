import Requester from '../requester'

const API_BASE_URL = process.env.REACT_APP_USER_PROFILE

export default class UserProfile {
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

    createUserProfile (data) {
        return this.apiRequester.post({
            endpoint: 'new',
            body: data
        })
    }
  
}