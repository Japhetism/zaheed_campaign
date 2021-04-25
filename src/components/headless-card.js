import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function HeadLessCard(props) {
    return (
        <React.Fragment>
            <div>
                {props.body}
            </div>
        </React.Fragment>                   
    );
}

export default HeadLessCard;
