import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Cities from '../../../../fixtures/cities.json'
import States from '../../../../fixtures/states.json'

function ContactInformation(props) {
    return (
        <div>
            <h5><strong>Contact Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Email</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.email}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="email" class="form-control" id="email" name="email" disabled={props.disabled} defaultValue={props.profileDetails.email} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Phone Number</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.phoneNumber}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" disabled={props.disabled} defaultValue={props.profileDetails.phoneNumber} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Address</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.address}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="address" name="address" disabled={props.disabled} defaultValue={props.profileDetails.address} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">City</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.city}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="city" name="city" disabled={props.disabled} defaultValue={props.profileDetails.city} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {Cities.map(value => <option value={value.name}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">State</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.state}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="state" name="state" disabled={props.disabled} defaultValue={props.profileDetails.state} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {States.map(value => <option value={value.val}>{value.val}</option>)}
                        </select>
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">PinCode</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.pinCode}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="pincode" name="pinCode" disabled={props.disabled} defaultValue={props.profileDetails.pinCode} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Taluk</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.taluk}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="taluk" name="taluk" disabled={props.disabled} defaultValue={props.profileDetails.taluk} onChange={props.updateFormData} />
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">District</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.district}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <input type="text" class="form-control" id="district" name="district" disabled={props.disabled} defaultValue={props.profileDetails.district} onChange={props.updateFormData} />
                    </div>}
                </div>
            </form>
            <br/><br/>
        </div>                            
    );
}

export default ContactInformation;
