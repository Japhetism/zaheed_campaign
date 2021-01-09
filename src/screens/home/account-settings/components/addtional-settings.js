import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'

function AccountSettings() {
    return (
        <React.Fragment>
            <HeadedCard 
                title={'Additional Settings'}
            />
        </React.Fragment>
    );
}

export default AccountSettings;
