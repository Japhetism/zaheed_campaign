import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionsForm from '../components/subscriptions-form'
import BreadCrumb from '../../../../components/breadcrumb'
import { subscriptionsService } from '../../../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../../../constants/api'

function AddSubscription() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Subscriptions', to: '/home/subscriptions', isActive: false},
        {name: 'Add Subscription', to: '/home/subscriptions/add', isActive: true}
    ]
    const [formData, setFormData] = useState({
        errorMessage: '',
        successMessage: '',
        disableSaveButton: false,
        isLoading: false
    })
    const [subscriptionFormData, setSubscriptionFormData] = useState([])

    const updateFormData = (event) => {
        console.log("update form data ", event.target.name + " - " + event.target.value)
        setSubscriptionFormData({...subscriptionFormData, [event.target.name]: event.target.value})
    }

    const onSaveButtonClick = async () => {
        console.log("Subscription form data ", subscriptionFormData)
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableSaveButton: true, isLoading: true}))
        const subscriptionResponseObj = await subscriptionsService.addSubscription(subscriptionFormData)
        const { status, response } = subscriptionResponseObj
        if(status === SUCCESS_STATUS) {
          setFormData(prevState => ({...prevState, successMessage: "Subscription added successfully", disableSaveButton: false, isLoading: false}))
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
                    <SubscriptionsForm 
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

export default AddSubscription;
