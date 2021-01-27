import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function ImageContainer(props) {
    return (
        <React.Fragment>
            <div class="uploaded-profile-photo-container">
                <img src={props.profileDetails.profilePhoto} alt="user profile photo" class="uploaded-profile-photo" />
            </div>
            {props.editProfile && <div>
                <input type="file" id="actual-btn" style={{display: 'none'}} onChange={ event => props.encodeImageFileAsURL }/><br/>
                <label class="profile-label" for="actual-btn">Profile Photo</label>
            </div>}
        </React.Fragment>
    );
}

export default ImageContainer;
