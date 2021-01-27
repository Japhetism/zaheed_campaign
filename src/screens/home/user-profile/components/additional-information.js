import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import BloodGroups from '../../../../fixtures/blood-groups.json'

function AdditionalInformation(props) {
    return (
        <div>
            <h5><strong>Additional Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Blood Group</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.bloodGroup}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="bloodGroup" name="bloodGroup" disabled={props.disabled} defaultValue={props.profileDetails.bloodGroup} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {BloodGroups.map(value => <option value={value.value}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Father/Husband Name</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.husbandName}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="husbandName" name="husbandName" disabled={props.disabled} defaultValue={props.profileDetails.husbandName} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Qualification</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.qualification}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="qualification" name="qualification" disabled={props.disabled} defaultValue={props.profileDetails.qualification} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Aadhar/PAN Card</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.aadhar}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="aadhar" name="aadhar" disabled={props.disabled} defaultValue={props.profileDetails.aadhar} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Lok Sabha</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.lokSabha}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="lokSabha" name="lokSabha" disabled={props.disabled} defaultValue={props.profileDetails.lokSabha} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Assembly</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.assembly}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="assembly" name="assembly" disabled={props.disabled} defaultValue={props.profileDetails.assembly} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Ward</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.ward}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="ward" name="ward" disabled={props.disabled} defaultValue={props.profileDetails.ward} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Polling Booth</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.pollingBooth}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="pollingBooth" name="pollingBooth" disabled={props.disabled} defaultValue={props.profileDetails.pollingBooth} onChange={props.updateFormData} />
                    </div>}
                </div>
            </form>
            <br/><br/>
        </div>                    
    );
}

export default AdditionalInformation;
