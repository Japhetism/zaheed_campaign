import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeadedCard from '../../../../components/headed-card'

function ChangePassword() {
    const formBody = <form>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">Current Password</label>
            <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword" />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">New Password</label>
            <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword" />
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-4 col-form-label">Confirm Password</label>
            <div class="col-sm-8">
            <input type="password" class="form-control" id="inputPassword" />
            </div>
        </div>
        <button type="button" class="btn btn-primary">Change Password</button>
    </form>
    return (
        <React.Fragment>
            <HeadedCard 
                title={'Change Password'}
                body={formBody}
            />
        </React.Fragment>       
    );
}

export default ChangePassword;
