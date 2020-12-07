import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function NotificationAlert(props) {
  
  const firstRender = useRef(true)
  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return
    }
  }, [])

  return (
    <div>
      {props.successMessage && <div class="alert alert-success" role="alert">
        <a href="#" class="alert-link">{`Success! ${props.successMessage}.`}</a>
      </div>}
      {props.errorMessage && <div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link">{`Error! ${props.errorMessage}.`}</a>
      </div>}
    </div>
  );
}

export default NotificationAlert;
