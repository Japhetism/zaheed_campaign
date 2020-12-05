//import logo from './logo.svg';
import './profile.css';
import { Link } from 'react-router-dom'

function Profile() {
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
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        </div>
    </div>
  );
}

export default Profile;
