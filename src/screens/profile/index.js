//import logo from './logo.svg';
import './profile.css';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Razorpay } from 'razorpay'
// import { json } from 'express';

function Profile() {

  const initaitePayment =  () => {
    const instance = new Razorpay({
      key_id: "rzp_test_DjOGHnOds8Cb8I",
      key_secret: "p6DfBxc0xojtTyCgNo0Xs64o",
    });
    try {
      const options = {
        amount: 10 * 100, // amount == Rs 10
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 0,
   // 1 for automatic capture // 0 for manual capture
      };
    instance.orders.create(options,function (err, order) {
      console.log(order)
    //return res.status(200).json(order);
   });
  } catch (err) {
    console.log(err)
    //return res.status(500).json({
      //message: "Something Went Wrong",
    //});
   }
  }

  // const paymentHandler = async (e) => {
  //   const API_URL = 'http://localhost:8000/'
  //   e.preventDefault();
  //   // const orderUrl = `${API_URL}order`;
  //   // const response = await Axios.get(orderUrl);
  //   // const { data } = response;
  //   const data = {
  //     id: 1
  //   }
  //   const options = {
  //     key: 'rzp_test_DjOGHnOds8Cb8I',
  //     name: "zabass campaign",
  //     description: "Some Description",
  //     order_id: data.id,
  //     handler: async (response) => {
  //       try {
  //        const paymentId = response.razorpay_payment_id;
  //        const url = `${API_URL}capture/${paymentId}`;
  //        const captureResponse = await Axios.post(url, {})
  //        console.log(captureResponse.data);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //     theme: {
  //       color: "#686CFD",
  //     },
  //   };
  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  //   };


    const saveOrder = (e) => {
      axios.post("https://api.razorpay.com/v1/orders", {
        amount: 10 * 100, // amount == Rs 10
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 0,
      })
      .then((response) =>{
        console.log(response);
      })
      // const { status, response } = verifyOtpResponseObj
      // if(status === SUCCESS_STATUS) {
      //   console.log(response)
      //   setFormData(prevState => ({...prevState, redirect: true}))
      //   props.history.push("/profile");
      // }else{
      //   setFormData(prevState => ({...prevState, errorMessage: response ? response.error : "Something went wrong", disableOtpButton: false}))
      // }
    }


  return (
    <div class="profile">
      <div class="row">
        <div class="col-md-10">
          <img src="../../assets/images/logo.png" class="logo" />
          <span class="header-title">All India Rahul Gandhi Brigade Congress</span>
        </div>
      </div>
      <div class="container-fluid profile-title row">
        <div class="col-lg-12">
          <span>Profile Information</span>
        </div>
      </div>
      <div>
        <div class="form col-md-10 col-md-offset-1">
          <form>
            <h3 style={{textAlign: 'center'}}>Registration</h3>
            <hr/>
            <div class="form-group row">
              <div class="col-lg-4">
                <img src="../../assets/images/user-profile.jpg" class="profile-photo" />
                {/* <div class="upload-btn-wrapper">
                    <button class="upload-btn">
                      <span>+</span>
                    </button>
                    <input type="file" />
                </div> */}
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Salutation</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>

                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Middle Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Father/Husband Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Phone Number</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Password</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Account Type</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Blood Group</label>
                <select type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Sex</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Date of Birth</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">House Number</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Building Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Street</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">City/Town</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Pincode</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Taluk</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">District</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              
              <div class="col-lg-4">
                <label for="exampleInputEmail1">State</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Country</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Qualification</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>  
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Aadhar/PAN Card</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Lok Sabha</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Assembly</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Ward</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Polling Booth</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Category</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Subscription Type</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
                  <option>Select</option>
                </select>
              </div>
              <div class="col-lg-4">
                <label for="exampleInputEmail1">Identification Card</label>
                <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
              </div>
            </div>
            <button type="button" onClick={ saveOrder } cla ss="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
    </div>
  );
}

export default Profile;
