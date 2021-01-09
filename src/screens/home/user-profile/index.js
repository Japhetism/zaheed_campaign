import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PersonalInformation from './components/personal-information'
import ContactInformation from './components/contact-information'
import AccountInformation from './components/account-information'
import AdditionalInformation from './components/additional-information'
import Identification from './components/identification'
import ImageContainer from './components/image-container'
import EditContainer from './components/edit-container'
import BreadCrumb from '../../../components/breadcrumb'

function UserProfile() {
    const [formData, setFormData] = useState({
        navigationLinks: [
            {name: 'Home', to: '/home', isActive: false},
            {name: 'My Profile', to: '/home/user-profile', isActive: true}
        ]
    })
    return (
        <section>
            <BreadCrumb 
                links={formData.navigationLinks}
            />
            <div class="row">
                <div class="col-md-3">
                    <ImageContainer />
                </div>
                <div class="col-md-6">
                    <PersonalInformation />
                    <ContactInformation />
                    <AccountInformation />
                    <AdditionalInformation />
                    <Identification />
                </div>
                <div class="col-md-3">
                    <EditContainer />
                </div>
            </div>
        </section>          
    );
}

export default UserProfile;
