import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function EditContainer(props) {
    return (
        <React.Fragment>
            {!props.editProfile && <button type="button" class="btn btn-primary btn-sm" disabled={!props.disabled} onClick={props.onEditButtonClick}><i class="fa fa-edit"></i>Edit Profile</button>}
            {props.editProfile && <button type="button" class="btn btn-primary btn-sm" disabled={props.disableSaveButton} onClick={props.onSaveButtonClick}><i class="fa fa-save"></i>Save Changes</button>}
            {props.editProfile && <button type="button" class="btn btn-default btn-sm" onClick={props.onCancelButtonClick}><i class="fa fa-cancel"></i>Cancel</button>}
        </React.Fragment>
    );
}

export default EditContainer;
