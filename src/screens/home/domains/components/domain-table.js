import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'

function DomainTable() {
    const domainTable = <table class="table table-hover">
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
                <td>Domain 1</td>
                <td><span class="badge badge-success">Active</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Domain 2</td>
                <td><span class="badge badge-success">Active</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Domain 3</td>
                <td><span class="badge badge-danger">Inactive</span></td>
                <td><button type="button" class="btn btn-primary btn-sm">View</button></td>
            </tr>
        </tbody>
    </table>
    return (
        <HeadedCard 
            title={'All Domains'}
            body={domainTable}
        />
    );
}

export default DomainTable;
