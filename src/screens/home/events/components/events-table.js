import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'
import { formatDate } from '../../../../utils/formatter'

function EventsTable({ data }) {
    console.log("table data ", data)
    const eventsTable = <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Descripton</th>
            <th scope="col">Start Date</th>
            <th scope="col">Duration</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((event, index) => <tr>
                <th scope="row">{index + 1}</th>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{event.startDateTime ? formatDate(event.startDateTime) : ''}</td>
                <td>{event.durationHrs}</td>
                <td><span class={`${event.active ? 'badge badge-success' : 'badge badge-danger'}`}>{event.active ? 'Active' : 'Inactive'}</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>)}
        </tbody>
    </table>
    return (
        <HeadedCard 
            title={'All Events'}
            body={eventsTable}
        />
    );
}

export default EventsTable;
