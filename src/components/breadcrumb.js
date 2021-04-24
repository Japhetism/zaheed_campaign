import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function BreadCrumb(props) {  
    return (
        <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
                {props.links.map(link => <li class={`breadcrumb-item ${link.isActive ? 'active' : ''}`} key={link.to}><Link to={link.to}>{link.name}</Link></li>)}
                {props.button}
            </ol>
        </nav>
    );
}

export default BreadCrumb;
