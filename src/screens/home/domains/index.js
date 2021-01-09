import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DomainTable from './components/domain-table'

function Domains() {
    return (
        <section>
            <div class="row">
                <div class="col-md-12">
                    <DomainTable />
                </div>
            </div>
        </section> 
    );
}

export default Domains;
