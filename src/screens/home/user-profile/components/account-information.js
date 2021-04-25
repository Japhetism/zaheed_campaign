import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import AccountTypes from '../../../../fixtures/account-types.json'
import Subscriptions from '../../../../fixtures/subscriptions.json'

function AccountInformation(props) {
    return (
        <div>
            <h5><strong>Account Information</strong></h5>
            <form class="form-vertical">
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Subscription Type</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.subscription}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="subscription" name="subscription" disabled={props.disabled} defaultValue={props.profileDetails.subscription} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {Subscriptions.map(value => <option value={value.amount+value.fee}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Account Type</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.accountType}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="accountType" name="accountType" disabled={props.disabled} defaultValue={props.profileDetails.accountType} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {AccountTypes.map(value => <option value={value.value}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
                <div class="form-group row">
                    <label for="inputEmail3" class="col-lg-4">Category</label>
                    {!props.editProfile && <span class="col-lg-8">{props.profileDetails.category}</span>}
                    {props.editProfile && <div class="col-lg-8">
                        <select class="form-control" id="category" name="category" disabled={props.disabled} defaultValue={props.profileDetails.category} onChange={props.updateFormData}>
                            <option selected disabled>Select</option>
                            {AccountTypes.map(value => <option value={value.value}>{value.name}</option>)}
                        </select>
                    </div>}
                </div>
            </form>
            <br/><br/>
        </div>   
    );
}

export default AccountInformation;
