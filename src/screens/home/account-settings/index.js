import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ChangePassword from './components/change-password'
import AdditionalSettings from './components/addtional-settings'
import BreadCrumb from '../../../components/breadcrumb'

function AccountSettings() {
    const [formData, setFormData] = useState({
        navigationLinks: [
            {name: 'Home', to: '/home', isActive: false},
            {name: 'Account Settings', to: '/home/account-settings', isActive: true}
        ]
    })
    return (
        <section>
            <BreadCrumb 
                links={formData.navigationLinks}
            />
            <div class="row">
                <div class="col-md-6">
                    <ChangePassword />
                </div>
                <div class="col-md-6">
                    <AdditionalSettings />
                </div>
            </div>
        </section>        
    );
}

export default AccountSettings;
