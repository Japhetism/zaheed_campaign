import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'
import States from '../../../../fixtures/states.json'

function SubscriptionsForm(props) {
    const eventsForm = <form>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="title" onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-6">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={props.onChange}></textarea>
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Start Date</label>
            <div class="col-sm-6">
                <input type="datetime-local" class="form-control" id="inputEmail3" name="startDateTime" onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Duration (in hours)</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" id="inputEmail3" name="durationHrs" onChange={props.onChange} />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">State</label>
            <div class="col-sm-6">
                <select class="form-control" id="exampleFormControlSelect1" name="domain" onChange={props.onChange}>
                    <option selected disabled>Select</option>
                    {States.map(value => <option value={value.id}>{value.val}</option>)}
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-10 ml-auto">
                <button type="button" class="btn btn-primary" disabled={props.disabled} onClick={props.onSubmit}>{props.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Save</button>
            </div>
        </div>
    </form>
    return (
        <HeadedCard 
            title={'New Event'}
            body={eventsForm}
        />
    );
}

export default SubscriptionsForm;
