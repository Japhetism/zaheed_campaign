import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SubscriptionsForm from '../components/subscriptions-form'
import BreadCrumb from '../../../../components/breadcrumb'

function ViewSubscription() {
    const navigationLinks = [
        {name: 'Home', to: '/home', isActive: false},
        {name: 'Subscriptions', to: '/home/subscriptions', isActive: false},
        {name: 'Subscription Details', to: '/home/subscriptions/view', isActive: true}
    ]
    const [formData, setFormData] = useState([])
    return (
        <section>
            <BreadCrumb 
                links={navigationLinks}
            />
            <div class="row">
                <div class="col-md-12">
                    <SubscriptionsForm />
                </div>
            </div>
        </section> 
    );
}

export default ViewSubscription;
