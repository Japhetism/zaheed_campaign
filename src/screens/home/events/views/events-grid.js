import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventsTable from '../components/events-table'
import EventsSearch from '../components/events-search'
import BreadCrumb from '../../../../components/breadcrumb'
import { eventsService } from '../../../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../../../constants/api'

function EventGrid() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Events', to: '/home/events', isActive: true}
    ]
    const newEventButton = <button class="btn btn-primary ml-auto"><Link to="/home/events/add">New Event</Link></button>
    const [formData, setFormData] = useState({
        errorMessage: '',
        successMessage: '',
        disableSearchButton: false,
        isLoading: false
    })
    const [domainEvents, setDomainEvents] = useState([])

    const updateFormData = (event) => {
        console.log("update form data ", event.target.name + " - " + event.target.value)
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const onSearchButtonClick = async () => {
        setDomainEvents([])
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableSearchButton: true, isLoading: true}))
        const eventResponseObj = await eventsService.getDomainEvents(formData.domain)
        const { status, response } = eventResponseObj
        if(status === SUCCESS_STATUS) {
            console.log("Domain events are ", response.data)
            setFormData(prevState => ({...prevState, disableSearchButton: false, isLoading: false}))
            setDomainEvents(response.data.length ? response.data : [{title: "Test Event", description: "This is a test event", active: true, startDateTime: "2020-12-08T21:40:30.874Z", durationHrs: 5}])
        }else{
            setFormData(prevState => ({...prevState, errorMessage: response.error, disableSearchButton: false, isLoading: false}))
            setDomainEvents([])
        }
    }
    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
                button={newEventButton}
            />
            <div class="row">
                <div class="col-md-12">
                    <EventsSearch 
                        onChange={updateFormData}
                        onSubmit={onSearchButtonClick}
                        isLoading={formData.isLoading}
                        disabled={formData.disableSearchButton}
                    />
                    <EventsTable 
                        data={domainEvents}
                    />
                </div>
            </div>
        </section> 
    );
}

export default EventGrid;
