import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Identification() {
    return (
        <div>
            <h5><strong>Identification</strong></h5>
            <form class="form-vertical">
                <div class="form-group">
                <img src="../../assets/images/voter-card.jpg" alt="user profile photo" class="uploaded-id" />
                </div>
            </form>
        </div>
    );
}
                                
export default Identification;
