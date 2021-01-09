import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ChangePassword from './components/change-password'
import AdditionalSettings from './components/addtional-settings'

function AccountSettings() {

    return (
        <section>
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
