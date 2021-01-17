import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Salutations from '../../../../fixtures/salutations.json'
import Sex from '../../../../fixtures/sex.json'

function PersonalInformation(props) {
    return (
        <div>
            <h5><strong>Personal Information</strong></h5>
           
            <form class="form-vertical">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Salutation</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.saluation}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="salutation" name="salutation" defaultValue={props.profileDetails.saluation} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {Salutations.map(value => <option value={value.value}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">First Name</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.firstName}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="firstName" name="firstName" defaultValue={props.profileDetails.firstName} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Middle Name</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.middleName}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="middleName" name="middleName" defaultValue={props.profileDetails.middleName} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Last Name</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetailslastName}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="lastName" name="lastName" defaultValue={props.profileDetailslastName} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Date of Birth</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.dateOfBirth}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="date" class="form-control" id="dob" name="dob" defaultValue={props.profileDetails.dateOfBirth} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Sex</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.sex}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="sex" name="sex" defaultValue={props.profileDetails.sex} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {Sex.map(value => <option value={value.value}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
            </form>
            <br/><br/>
        </div>        
    );
}

export default PersonalInformation;
