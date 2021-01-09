import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import EventsTable from './components/events-table'

function Events() {
    return (
        <section>
            <div class="row">
                <div class="col-md-12">
                    <EventsTable />
                </div>
            </div>
        </section> 
    );
}

export default Events;
