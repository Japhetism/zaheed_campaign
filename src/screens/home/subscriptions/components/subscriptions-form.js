import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'
import States from '../../../../fixtures/states.json'

function SubscriptionsForm(props) {
    console.log("data passed is ", props.data)
    const subscriptionsForm = <form>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="name" disabled={props.disabled} defaultValue={props.data.name} onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-6">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" disabled={props.disabled} defaultValue={props.data.desc} name="desc" onChange={props.onChange}></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Amount</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="amount" disabled={props.disabled} defaultValue={props.data.amount} onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Fee</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="fee" disabled={props.disabled} defaultValue={props.data.fee}onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Validity</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="validity" disabled={props.disabled} defaultValue={props.data.validity} onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Time Unit</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="time_unit" disabled={props.disabled} defaultValue={props.data.time_unit} onChange={props.onChange} />
            </div>
        </div>
        {props.showStatus && <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Status</label>
            <div class="col-sm-6">
                <select class="form-control" id="inputEmail3" name="enabled" disabled={props.disabled} defaultValue={props.data.enabled} onChange={props.onChange}>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
            </div>
        </div>}
        {!props.showEditButton && <div class="form-group row">
            <div class="col-sm-10 ml-auto">
                <button type="button" class="btn btn-primary" disabled={props.disableButton} onClick={props.onSubmit}>{props.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Save</button>
            </div>
        </div>}
        {props.showEditButton && <div class="form-group row">
            <div class="col-sm-10 ml-auto">
                <button type="button" class="btn btn-primary" onClick={props.onEdit}>Edit</button>
            </div>
        </div>}
    </form>
    return (
        <HeadedCard 
            title={props.title}
            body={subscriptionsForm}
        />
    );
}

export default SubscriptionsForm;
