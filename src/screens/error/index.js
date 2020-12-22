import React, { useRef, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

function Error() {
  const firstRender = useRef(true)  
    
  return (
    <div class="container h-100 forgot-password">
      <div class="row h-100 justify-content-center align-items-center">
        <label class="error-404">404</label>
        <span></span>
      </div>
    </div>
  );
}

export default Error;