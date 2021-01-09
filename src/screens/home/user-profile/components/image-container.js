import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function ImageContainer() {
    return (
        <React.Fragment>
            <div class="uploaded-profile-photo-container">
                <img src="../../assets/images/user-profile.jpg" alt="user profile photo" class="uploaded-profile-photo" />
            </div>
        </React.Fragment>
    );
}

export default ImageContainer;
