import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionsForm from '../components/subscriptions-form'
import BreadCrumb from '../../../../components/breadcrumb'
import { subscriptionsService } from '../../../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../../../constants/api'
import DummySubscriptions from '../../../../fixtures/subscriptions.json'
import { useParams } from 'react-router-dom';
import NotificationToast from '../../../../components/notification-alert'

function ViewSubscription() {
    const params = useParams()
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Subscriptions', to: '/home/subscriptions', isActive: false},
        {name: 'Subscription Details', to: '/home/subscriptions/view', isActive: true}
    ]
    const [formData, setFormData] = useState({
        errorMessage: '',
        successMessage: '',
        disableUpdateButton: false,
        isLoading: false,
        disabledField: false,
        showEditButton: true
    })
    const [subscriptionFormData, setSubscriptionFormData] = useState([])

    const updateFormData = (event) => {
        console.log("update form data ", event.target.name + " - " + event.target.value)
        setSubscriptionFormData({...subscriptionFormData, [event.target.name]: event.target.value})
    }

    const onUpdateButtonClick = async () => {
        console.log("Subscription form data ", subscriptionFormData)
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableUpdateButton: true, isLoading: true}))
        const subscriptionResponseObj = await subscriptionsService.updateSubscription(params.id, subscriptionFormData)
        const { status, response } = subscriptionResponseObj
        if(status === SUCCESS_STATUS) {
          setFormData(prevState => ({...prevState, successMessage: "Subscription update successfully", disableUpdateButton: false, isLoading: false}))
        }else{
          setFormData(prevState => ({...prevState, errorMessage: response.error, disableUpdateButton: false, isLoading: false}))
        }
    }

    const getSubscription = async (subscriptionId) => {
        console.log("Subscription form data ", subscriptionFormData)
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', isLoading: true}))
        const subscriptionResponseObj = await subscriptionsService.getSubscription(subscriptionId)
        const { status, response } = subscriptionResponseObj
        if(status === SUCCESS_STATUS) {
          setFormData(prevState => ({...prevState, successMessage: "Subscription update successfully", isLoading: false, disabledField: true}))
          setSubscriptionFormData(response.data ? response.data : getSubscriptionFromDummy(subscriptionId))
        }else{
          setFormData(prevState => ({...prevState, errorMessage: response.error, isLoading: false, disabledField: true}))
          setSubscriptionFormData(getSubscriptionFromDummy(subscriptionId))
        }
    }

    const getSubscriptionFromDummy = (subscriptionId) => {
        console.log("from get dummy subscription ", DummySubscriptions.filter(subscription => subscription.id == subscriptionId))
        return DummySubscriptions.filter(subscription => subscription.id == subscriptionId)[0]
    }

    const onEditButtonClick = () => {
        setFormData(prevState => ({...prevState, showEditButton: false, disabledField: false}))
    }

    const formValidation = () => {
        if(subscriptionFormData.name && subscriptionFormData.desc && subscriptionFormData.amount && subscriptionFormData.fee && subscriptionFormData.validity && subscriptionFormData.time_unit) {
          return false;
        }else{
          return true
        }
    }

    useEffect(() => {
        getSubscription(params.id)
        console.log("url id passed ", params)
        setFormData(prevState => ({ ...prevState, disableUpdateButton: formValidation()}))
    }, [])

    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
            />
            <div class="row">
                <div class="col-md-12">
                    <NotificationToast 
                        successMessage={formData.successMessage}
                        errorMessage={formData.errorMessage}
                    />
                    <SubscriptionsForm 
                        onChange={updateFormData}
                        onSubmit={onUpdateButtonClick}
                        isLoading={formData.isLoading}
                        disabledButton={formData.disableUpdateButton}
                        disabled={formData.disabledField}
                        title="Subscription Details"
                        showStatus={true}
                        data={subscriptionFormData}
                        showEditButton={formData.showEditButton}
                        onEdit={onEditButtonClick}
                    />
                </div>
            </div>
        </section> 
    );
}

export default ViewSubscription;
