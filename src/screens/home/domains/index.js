import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DomainTable from './components/domain-table'
import BreadCrumb from '../../../components/breadcrumb'

function Domains() {
    const [formData, setFormData] = useState({
        navigationLinks: [
            {name: 'Home', to: '/home', isActive: false},
            {name: 'Domains', to: '/home/domains', isActive: true}
        ]
    })
    return (
        <section>
            <BreadCrumb 
                links={formData.navigationLinks}
            />
            <div class="row">
                <div class="col-md-12">
                    <DomainTable />
                </div>
            </div>
        </section> 
    );
}

export default Domains;
