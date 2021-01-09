import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventsTable from './components/events-table'
import BreadCrumb from '../../../components/breadcrumb'

function Events() {
    const [formData, setFormData] = useState({
        navigationLinks: [
            {name: 'Home', to: '/home', isActive: false},
            {name: 'Events', to: '/home/events', isActive: true}
        ]
    })
    return (
        <section>
            <BreadCrumb 
                links={formData.navigationLinks}
            />
            <div class="row">
                <div class="col-md-12">
                    <EventsTable />
                </div>
            </div>
        </section> 
    );
}

export default Events;
