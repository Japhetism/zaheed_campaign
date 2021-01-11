import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PersonalInformation from './components/personal-information'
import ContactInformation from './components/contact-information'
import AccountInformation from './components/account-information'
import AdditionalInformation from './components/additional-information'
import Identification from './components/identification'
import ImageContainer from './components/image-container'
import EditContainer from './components/edit-container'
import BreadCrumb from '../../../components/breadcrumb'
import { retrieveStoredData } from '../../../utils/storage'
import PhoneNumberVerification from './components/phone-number-verification'
import { authentication } from '../../../mixins/api'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../../constants/api'
import { OTP_LENGTH } from '../../../constants/application'
import NotificationToast from '../../../components/notification-alert'

function UserProfile() {
    const firstRender = useRef(true)
    const [formData, setFormData] = useState({
        navigationLinks: [
            {name: 'Home', to: '/home', isActive: false},
            {name: 'My Profile', to: '/home/user-profile', isActive: true}
        ],
        profileDetails: [],
        canEditProfile: false,
        otp: '',
        sessionId: '',
        disableOtpButton: false,
        isLoading: false,
        errorMessage: '',
        successMessage: ''
    })
    
    const getProfileDetails = () => {
        const { person } = JSON.parse(retrieveStoredData('userInfo'))
        const { phoneVerified, otpSession } = person
        console.log(otpSession)
        setFormData({...formData, profileDetails: person, canEditProfile: phoneVerified, sessionId: otpSession})
    }

    const otpFormValidation = () => {
        if(formData.otp && formData.otp.length === OTP_LENGTH) {
          return false;
        }else{
          return true
        }
    }
    
    useEffect(() => {
        if(firstRender.current) {
            getProfileDetails()
            firstRender.current = false
            return
        }

        setFormData(prevState => ({ 
            ...prevState, 
            disableOtpButton: otpFormValidation()
        }))
    }, [formData])

    const handleSendOtp = async (e) => {
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableRegisterButton: true}))
        const sendOtpResponseObj = await authentication.sendOtp(formData.registerUsername)
        const { status, response } = sendOtpResponseObj
        if(status === SUCCESS_STATUS) {
          setFormData(prevState => ({...prevState, successMessage: "OTP sent successfully"}))
        }else{
          setFormData(prevState => ({...prevState, errorMessage: response.error}))
        }
    }

    const handleOtpVerification = async (e) => {
        setFormData(prevState => ({...prevState, errorMessage: '', successMessage: '', disableOtpButton: true, isLoading: true}))
        const verifyOtpFormData = {
          otp: formData.otp,
          sessionId: formData.sessionId
        }
        const verifyOtpResponseObj = await authentication.verifyOtp(verifyOtpFormData)
        const { status, response } = verifyOtpResponseObj
        if(status === SUCCESS_STATUS) {
          setFormData(prevState => ({...prevState, redirect: true}))
        }else{
          setFormData(prevState => ({...prevState, errorMessage: response, disableOtpButton: false, isLoading: false}))
        }
    }

    const updateFormData = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <section>
            <BreadCrumb 
                links={formData.navigationLinks}
            />
            <NotificationToast 
                successMessage={formData.successMessage}
                errorMessage={formData.errorMessage}
            />
            <div class="row">
                <div class="col-md-3">
                    <ImageContainer />
                </div>
                <div class="col-md-6">
                    <PersonalInformation profileDetails={formData.profileDetails} />
                    <ContactInformation profileDetails={formData.profileDetails} />
                    <AccountInformation profileDetails={formData.profileDetails} />
                    <AdditionalInformation profileDetails={formData.profileDetails} />
                    <Identification profileDetails={formData.profileDetails} />
                </div>
                <div class="col-md-3">
                    <PhoneNumberVerification 
                        handleSendOtp={handleSendOtp}
                        handleOtpVerification={handleOtpVerification}
                        updateFormData={updateFormData}
                        disableButton={formData.disableOtpButton}
                        otpLength={OTP_LENGTH}
                        isLoading={formData.isLoading}
                        canVerifyPhone={formData.canEditProfile}
                    />
                    <EditContainer disabled={formData.canEditProfile} />
                </div>
            </div>
        </section>          
    );
}

export default UserProfile;
