import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Identification(props) {
    return (
        <div>
            <h5><strong>Identification</strong></h5>
            <form class="form-vertical">
                <div class="form-group">
                    {!props.editProfile && <img src={props.profileDetails.identification}  class="uploaded-id" />}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="file" class="form-control" id="identification" name="identification" onChange={props.updateFormData} />
                    </div>}
                </div>
            </form>
        </div>
    );
}
                                
export default Identification;
