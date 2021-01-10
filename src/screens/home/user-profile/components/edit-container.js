import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function EditContainer(props) {
    return (
        <React.Fragment>
            <button type="button" class="btn btn-primary btn-sm" disabled={!props.disabled}><i class="fa fa-edit"></i>Edit Profile</button>
        </React.Fragment>
    );
}

export default EditContainer;
