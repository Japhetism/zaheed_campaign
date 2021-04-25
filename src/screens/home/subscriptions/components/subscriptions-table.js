import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'
import { formatDate } from '../../../../utils/formatter'

function SubscriptionsTable({ data }) {
    console.log("table data ", data)
    const subscriptionsTable = <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Descripton</th>
            <th scope="col">Amount</th>
            <th scope="col">Fee</th>
            <th scope="col">Validity</th>
            <th scope="col">Time Unit</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((subscription, index) => <tr>
                <th scope="row">{index + 1}</th>
                <td>{subscription.name}</td>
                <td>{subscription.desc}</td>
                <td>{subscription.amount}</td>
                <td>{subscription.fee}</td>
                <td>{subscription.validity}</td>
                <td>{subscription.time_unit}</td>
                <td><span class={`${subscription.enabled ? 'badge badge-success' : 'badge badge-danger'}`}>{subscription.enabled ? 'Active' : 'Inactive'}</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>)}
        </tbody>
    </table>
    return (
        <HeadedCard 
            title={'All Subscriptions'}
            body={subscriptionsTable}
        />
    );
}

export default SubscriptionsTable;
