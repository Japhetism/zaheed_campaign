import axios from 'axios';
import { DELETE_METHOD, GET_METHOD, POST_METHOD, PUT_METHOD } from '../../constants/api'
import { getAccessToken } from '../../utils/storage'

export default class Requester {
  constructor(props) {
    const { apiBaseUrl } = props
    this.apiBaseUrl = apiBaseUrl
  }


  _getFullUrl(endpoint) {
    return `${this.apiBaseUrl}/${endpoint}`
  }

  _handleError(error) {
    if (error.response && error.response.status === 401) {
      this._handle401Error();
    }
    return error.response ? error.response.data : {}
  }

  _handle401Error() {
    //clearLocalStorage()
    //window.location.href = '/admin/logout';
    return
  }

  _handleResponse(response) {
    return response.data.responseData || response.data.content || response.data
  }

  _handleResponseCount(response) {
    return response.data.totalElements || response.data.count
  }

  async _makeHttpRequest(params) {
    const accessToken = getAccessToken()
    let { url, method, headers, args, body } = params;

    if(headers) {
      headers['content-type'] = 'application/json'
      headers['Authorization'] = `${accessToken}`
    }else{
      headers = {
        'content-type': 'application/json',
        'Authorization': `${accessToken}`,
      }
    }

    return axios({
      url, 
      method,
      headers,
      params: args,
      data: body,
      mode: 'no-cors',
      proxy: {
        host: '172.16.10.20',
        port: 8080
      }
    })
  }
  
  async post(params) {
    const { endpoint, headers, body, args } = params;
    try {
      const response = await this._makeHttpRequest({
        url: this._getFullUrl(endpoint),
        method: POST_METHOD,
        headers: headers,
        body: body,
        args: args
      })
      return {
        status: 'SUCCESS', 
        response: this._handleResponse(response),
        count: this._handleResponseCount(response)
      }
    }

    catch (error) {
      return {
        status: 'ERROR', 
        response: this._handleError(error)
      }
    }
  }

  async get(params) {
    const { endpoint, headers, args } = params;

    try {
      const response = await this._makeHttpRequest({
        url: this._getFullUrl(endpoint),
        method: GET_METHOD,
        headers: headers,
        args: args,
        body: null
      })
      return {
        status: 'SUCCESS', 
        response: this._handleResponse(response),
        count: this._handleResponseCount(response)
      }
    }
    
    catch (error) {
      return {
        status: 'ERROR', 
        response: this._handleError(error)
      }
    }
  }

  async put(params) {
    const { endpoint, headers, body, args } = params;

    try {
      const response = await this._makeHttpRequest({
        url: this._getFullUrl(endpoint),
        method: PUT_METHOD,
        headers: headers,
        args: args,
        body: body
      })
      return {
        status: 'SUCCESS', 
        response: this._handleResponse(response)
      }
    }
    
    catch (error) {
      return {
        status: 'ERROR', 
        response: this._handleError(error)
      }
    }
  }

  async delete(params) {
    const { endpoint, headers, body, args } = params;

    try {
      const response = await this._makeHttpRequest({
        url: this._getFullUrl(endpoint),
        method: DELETE_METHOD,
        headers: headers,
        args: args,
        body: body
      })
      return {
        status: 'SUCCESS', 
        response: this._handleResponse(response)
      }
    }
    
    catch (error) {
      return {
        status: 'ERROR', 
        response: this._handleError(error)
      }
    }
  }

}