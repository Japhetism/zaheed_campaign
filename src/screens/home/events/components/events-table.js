import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'

function EventsTable() {
    const eventsTable = <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Event 1</td>
                <td><span class="badge badge-success">Active</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Event 2</td>
                <td><span class="badge badge-success">Active</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Event 3</td>
                <td><span class="badge badge-danger">Inactive</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>
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
