import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function ImageContainer(props) {
    return (
        <React.Fragment>
            <div class="uploaded-profile-photo-container">
                <img src={props.profileDetails.profilePhoto} alt="user profile photo" class="uploaded-profile-photo" />
            </div>
        </React.Fragment>
    );
}

export default ImageContainer;
