import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventsTable from '../components/events-table'
import BreadCrumb from '../../../../components/breadcrumb'

function EventGrid() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Events', to: '/home/events', isActive: true}
    ]
    const newEventButton = <button class="btn btn-primary ml-auto"><Link to="/home/events/add">New Event</Link></button>
    const [formData, setFormData] = useState([])
    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
                button={newEventButton}
            />
            <div class="row">
                <div class="col-md-12">
                    <EventsTable />
                </div>
            </div>
        </section> 
    );
}

export default EventGrid;
