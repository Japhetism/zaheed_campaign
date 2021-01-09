import React, { useRef, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { deleteStoredData } from '../../utils/storage'

function Logout(props) {
    useEffect(() => {
        logoutUser()
    }, [])

    const logoutUser = () => {
        deleteStoredData('userInfo')
        props.history.push("/");
    }
  return null
}

export default Logout;