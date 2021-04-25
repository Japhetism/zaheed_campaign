import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadLessCard from '../../../../components/headless-card'
import States from '../../../../fixtures/states.json'

function EventsSearch(props) {
    const eventsForm = <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">State</label>
                <select class="form-control" id="exampleFormControlSelect1" name="domain" onChange={props.onChange}>
                    <option selected disabled>Select</option>
                    {States.map(value => <option value={value.id}>{value.val}</option>)}
                </select>
            </div>
            <div class="form-group col-md-2">
                <button type="button" style={{marginTop: '30px'}} class="btn btn-primary" disabled={props.disabled} onClick={props.onSubmit}>{props.isLoading && <i class="fa fa-circle-o-notch fa-spin"></i>}Search</button>
            </div>
        </div>
    </form>
    return (
        <HeadLessCard 
            title={'New Event'}
            body={eventsForm}
        />
    );
}

export default EventsSearch;
