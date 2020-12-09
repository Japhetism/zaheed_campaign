import logo from '../../assets/images/logo.png'
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { SUCCESS_STATUS, ERROR_STATUS } from '../../constants/api'
import NotificationToast from '../../components/notification-alert'

function Profile() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
    }); 
  }

  const displayRazorpay = async () => {
    let errorMessage = ""
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      errorMessage = "Razorpay failed to load. Check your network connectivity"
      alert(errorMessage)
      setFormData({...formData, errorMessage: errorMessage})
      return;
    }
    const result = await axios.post("http://localhost:5000/payment/orders");
    if (!result) {
      errorMessage = "An error occurred, please try again"
      alert(errorMessage)
      setFormData({...formData, errorMessage: errorMessage})
      return;
    }
    const { amount, id: order_id, currency } = result.data;
    const options = {
      key: "rzp_test_77JPgUqaflqdlE", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Brigade Congress.",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        const result = await axios.post("http://localhost:5000/payment/success", data);
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: `${formData.email}`,
        contact: `${formData.phoneNumber}`,
      },
      notes: {
        address: `${formData.houseNumber}, ${formData.buildingName}, ${formData.street}, ${formData.city}`,
      },
      theme: {
        color: "#FA8223",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const firstRender = useRef(true)
  const [formData, setFormData] = useState({
    aadharOrPAN: "",
    accountType: "",
    address: "",
    bloodGroup: "",
    category: "",
    dateOfBirth: "",
    // domain: [
    //   {
    //     "domainType": {
    //       "domains": [
    //         null
    //       ],
    //       "id": 0,
    //       "name": "string",
    //       "permissions": [
    //         {
    //           "description": "string",
    //           "enabled": true,
    //           "id": 0,
    //           "name": "string"
    //         }
    //       ]
    //     },
    //     "enabled": true,
    //     "id": 0,
    //     "name": "string",
    //     "persons": [
    //       null
    //     ]
    //   }
    // ],
    email: "",
    fatherOrHusbandsName: "",
    firstName: "",
    lastName: "",
    middleName: "",
    phoneNumber: "",
    profilePhoto: "",
    qualification: "",
    referrer: 0,
    saluation: "",
    sex: "",
    subscription: "",
    // subscription": {
    //   "end": "2020-12-07T16:39:49.778Z",
    //   "id": 0,
    //   "start": "2020-12-07T16:39:49.779Z",
    //   "subscriptionType": {
    //     "amount": 0,
    //     "description": "string",
    //     "duration": "string",
    //     "id": 0,
    //     "name": "string",
    //     "subscriptions": [
    //       null
    //     ]
    //   }
    // },
    title: "",
    disablePaymentButton: true,
    successMessage: null,
    errorMessage: null
  })

  const updateFormData = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const encodeImageFileAsURL = (element) => {
    console.log(element.target.files)
    var file = element.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      setFormData({...formData, profilePhoto: reader.result})
    }
    reader.readAsDataURL(file);
  }

  const formValidation = () => {
    if(formData.firstName && formData.lastName && formData.email && formData.phoneNumber) {
      return false;
    }else{
      return true
    }
  }

  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false
      return
    }
    console.log(formData)
    setFormData(prevState => ({ ...prevState, disablePaymentButton: formValidation()}))
  }, [formData.email, formData.firstName, formData.lastName, formData.email, formData.phoneNumber])

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10">
          <img src="../../assets/images/logo.png" class="logo" />
          <span class="header-title">All India Rahul Gandhi Brigade Congress</span>
        </div>
      </div>
      <div class="container-fluid profile-title row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <span>Profile Information</span>
        </div>
      </div>
      <NotificationToast 
        successMessage={formData.successMessage}
        errorMessage={formData.errorMessage}
      />
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-lg-offset-2 col-lg-10 col-lg-offset-2">
            <form class="form">
              <h3 style={{textAlign: 'center'}}>Biodata</h3>
              <hr/>
              <div class="form-group row">
                <div class="col-lg-4">
                  {formData.profilePhoto && <img src={formData.profilePhoto} class="profile-photo" alt="profile-photo" />}
                  <input type="file" id="actual-btn" style={{display: 'none'}} onChange={ event => encodeImageFileAsURL(event) }/><br/>
                  <label class="profile-label" for="actual-btn">Profile Photo</label>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Salutation</label>
                  <select class="form-control" id="salutation" name="salutation" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>

                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">First Name</label>
                  <input type="text" class="form-control" id="firstName"  name="firstName" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Middle Name</label>
                  <input type="text" class="form-control" id="middleName" name="middleName" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input type="text" class="form-control" id="lastName" name="lastName" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Father/Husband Name</label>
                  <input type="text" class="form-control" id="fatherOrHusbandName" name="fatherOrHusbandName" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Phone Number</label>
                  <input type="text" class="form-control" id="phoneNumber" name="phoneNumber" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Password</label>
                  <input type="text" class="form-control" id="password" name="password" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Account Type</label>
                  <select class="form-control" id="accountType" name="accountType" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Blood Group</label>
                  <select type="text" class="form-control" id="bloodGroup" name="bloodGroup" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Sex</label>
                  <select class="form-control" id="sex" name="sex" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Date of Birth</label>
                  <input type="date" class="form-control" id="dateOfBirth" name="dateOfBirth" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">House Number</label>
                  <input type="text" class="form-control" id="houseNumber" name="houseNumber" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Building Name</label>
                  <input type="text" class="form-control" id="buildingName" name="buildingName" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Street</label>
                  <input type="text" class="form-control" id="street" name="street" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">City/Town</label>
                  <select class="form-control" id="city" name="city" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Pincode</label>
                  <input type="text" class="form-control" id="pinCode" name="pinCode" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Taluk</label>
                  <input type="text" class="form-control" id="taluk" name="taluk" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">District</label>
                  <select class="form-control" id="district" name="district" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>  
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">State</label>
                  <select class="form-control" id="state" name="state" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Country</label>
                  <select class="form-control" id="country" name="country" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Qualification</label>
                  <input type="text" class="form-control" id="qualification" name="qualification" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>  
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Aadhar/PAN Card</label>
                  <input type="text" class="form-control" id="aadharOrPAN" name="aadharOrPAN" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Lok Sabha</label>
                  <select class="form-control" id="lokSabha" name="lokSabha" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Assembly</label>
                  <select class="form-control" id="assembly" name="assembly" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Ward</label>
                  <select class="form-control" id="ward" name="ward" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Polling Booth</label>
                  <select class="form-control" id="pollingBooth" name="pollingBooth" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Category</label>
                  <select class="form-control" id="category" name="category" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Subscription Type</label>
                  <select class="form-control" id="subscription" name="subscription" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}>
                    <option>Select</option>
                  </select>
                </div>
                <div class="col-lg-4">
                  <label for="exampleInputEmail1">Identification Card</label>
                  <input type="file" class="form-control" id="identificationCard" name="identificationCard" aria-describedby="emailHelp" placeholder="" onChange={updateFormData}/>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                  <button type="button" class="btn btn-default-color">Save</button>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 payment-button">
                  <button type="button" onClick={ displayRazorpay } class="btn btn-default-color" disabled={formData.disablePaymentButton}>Proceed to Payment</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
