import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventsForm from '../components/events-form'
import BreadCrumb from '../../../../components/breadcrumb'

function ViewEvent() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Events', to: '/home/events', isActive: false},
        {name: 'Event Details', to: '/home/events/view', isActive: true}
    ]
    const [formData, setFormData] = useState([])
    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
            />
            <div class="row">
                <div class="col-md-12">
                    <EventsForm />
                </div>
            </div>
        </section> 
    );
}

export default ViewEvent;
