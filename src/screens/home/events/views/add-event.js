import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventsForm from '../components/events-form'
import BreadCrumb from '../../../../components/breadcrumb'
import { eventsService } from '../../../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../../../constants/api'

function AddEvent() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Events', to: '/home/events', isActive: false},
        {name: 'Add Event', to: '/home/events/add', isActive: true}
    ]
    const [formData, setFormData] = useState({
        errorMessage: '',
        successMessage: '',
        disableSaveButton: false,
        isLoading: false
    })
    const [eventFormData, setEventFormData] = useState({
        domain: []
    })

    const updateFormData = (event) => {
        console.log("update form data ", event.target.name + " - " + event.target.value)
        let domainList = {}
        let selectedDomains = eventFormData.domain;
        if (event.target.name === "domain") {
            domainList.id = event.target.value
            selectedDomains.push(domainList)
            setEventFormData({...eventFormData, [event.target.name]: selectedDomains})
        } else {
            setEventFormData({...eventFormData, [event.target.name]: event.target.value})
        }
    }

    const onSaveButtonClick = async () => {
        console.log("Event form data ", eventFormData)
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableSaveButton: true, isLoading: true}))
        const eventResponseObj = await eventsService.addEvent(eventFormData)
        const { status, response } = eventResponseObj
        if(status === SUCCESS_STATUS) {
          setFormData(prevState => ({...prevState, successMessage: "Event added successfully", disableSaveButton: false, isLoading: false}))
        }else{
          setFormData(prevState => ({...prevState, errorMessage: response.error, disableSaveButton: false, isLoading: false}))
        }
    }
    
    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
            />
            <div class="row">
                <div class="col-md-12">
                    <EventsForm 
                        onChange={updateFormData}
                        onSubmit={onSaveButtonClick}
                        isLoading={formData.isLoading}
                        disable={formData.disableSaveButton}
                    />
                </div>
            </div>
        </section> 
    );
}

export default AddEvent;
