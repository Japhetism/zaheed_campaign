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
import { retrieveStoredData, saveData } from '../../../utils/storage'
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
        successMessage: '',
        editProfile: false,
    })
    
    const getProfileDetails = () => {
        const { person } = JSON.parse(retrieveStoredData('userInfo'))
        const { phoneVerified, otpSession } = person
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
          const userInfo = JSON.parse(retrieveStoredData('userInfo'))
          userInfo.person.phoneVerified = true
          saveData("userInfo", JSON.stringify(userInfo))
          setFormData(prevState => ({...prevState, successMessage: 'Your phone number is verified', canEditProfile: true}))
        }else{
          setFormData(prevState => ({...prevState, errorMessage: response, disableOtpButton: false, isLoading: false}))
        }
    }

    const updateFormData = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onEditButtonClick = () => {
        setFormData({...formData, editProfile: true})
    }

    const onCancelButtonClick = () => {
        setFormData({...formData, editProfile: false})
    }

    const onSaveButtonClick = () => {

    }

    const encodeImageFileAsURL = (element) => {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          setFormData({...formData, profilePhoto: reader.result})
        }
        reader.readAsDataURL(file);
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
                    <ImageContainer profileDetails={formData.profileDetails} encodeImageFileAsURL={encodeImageFileAsURL} />
                </div>
                <div class="col-md-6">
                    <PersonalInformation profileDetails={formData.profileDetails} editProfile={formData.editProfile} updateFormData={updateFormData} />
                    <ContactInformation profileDetails={formData.profileDetails} editProfile={formData.editProfile} updateFormData={updateFormData} />
                    <AccountInformation profileDetails={formData.profileDetails} editProfile={formData.editProfile} updateFormData={updateFormData} />
                    <AdditionalInformation profileDetails={formData.profileDetails} editProfile={formData.editProfile} updateFormData={updateFormData} />
                    <Identification profileDetails={formData.profileDetails} editProfile={formData.editProfile} updateFormData={updateFormData} />
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
                    <EditContainer 
                        disabled={formData.canEditProfile} 
                        editProfile={formData.editProfile} 
                        onEditButtonClick={onEditButtonClick} 
                        onCancelButtonClick={onCancelButtonClick}
                        onSaveButtonClick={onSaveButtonClick}
                    />
                </div>
            </div>
        </section>          
    );
}

export default UserProfile;
