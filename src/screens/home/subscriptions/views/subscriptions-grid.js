import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionsTable from '../components/subscriptions-table'
import BreadCrumb from '../../../../components/breadcrumb'
import { subscriptionsService } from '../../../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../../../constants/api'
import DummySubscriptions from '../../../../fixtures/subscriptions.json'
import NotificationToast from '../../../../components/notification-alert'

function SubscriptionGrid() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Subscriptions', to: '/home/subscriptions', isActive: true}
    ]
    const newSubscriptionButton = <button class="btn btn-primary ml-auto"><Link to="/home/subscriptions/add">New Subscription</Link></button>
    const [formData, setFormData] = useState({
        errorMessage: '',
        successMessage: '',
        disableSearchButton: false,
        isLoading: false
    })
    const [subscriptions, setSubscriptions] = useState([])

    const getAllSubscriptions = async () => {
        setSubscriptions([])
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', isLoading: true}))
        const subscriptionResponseObj = await subscriptionsService.getSubscriptions()
        const { status, response } = subscriptionResponseObj
        if(status === SUCCESS_STATUS) {
            console.log("Domain subscriptions are ", response.data)
            setFormData(prevState => ({...prevState, isLoading: false}))
            setSubscriptions(response.data.length ? response.data : DummySubscriptions)
        }else{
            setFormData(prevState => ({...prevState, errorMessage: response.error, isLoading: false}))
            setSubscriptions(DummySubscriptions)
        }
    }

    useEffect(() => {
        getAllSubscriptions();
    }, [])

    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
                button={newSubscriptionButton}
            />
            <div class="row">
                <div class="col-md-12">
                    <NotificationToast 
                        successMessage={formData.successMessage}
                        errorMessage={formData.errorMessage}
                    />
                    <SubscriptionsTable 
                        data={subscriptions}
                    />
                </div>
            </div>
        </section> 
    );
}

export default SubscriptionGrid;
