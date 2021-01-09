import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function HeadedCard(props) {
    return (
        <React.Fragment>
            <div class="card">
                <div class="card-header">
                    {props.title}
                </div>
                <div class="card-body">
                    {props.body}
                </div>
            </div>
        </React.Fragment>                   
    );
}

export default HeadedCard;
