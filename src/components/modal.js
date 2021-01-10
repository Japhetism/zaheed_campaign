import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Modal(props) {
    return (
        <React.Fragment>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {props.body}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss={props.dismissModal ? "modal" : ""} disabled={ props.disableButton } onClick={ props.buttonAction }>{props.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}{props.buttonName}</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>                   
    );
}

export default Modal;
