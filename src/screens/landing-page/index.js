import './landingPage.css';
import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  const [showRegister, setShowRegister] = React.useState(false)
  const onRegisterLinkClick = () => setShowRegister(true)
  const onLoginLinkClick = () => setShowRegister(false)
  return (
    <div className="App">
      <div class="banner-information row">
        <div class="col-lg-5">
          <h6>Jai Congress!!</h6>
        </div>
        <div class="col-lg-5">
          <h6 class="pull-right">Jay Ho Rahul Gandhi!!!</h6>
        </div><br/>
        <div>
          <h2 class="center-text">Join hands for the change</h2>
          <h1 class="black-color"> 
            <img src="../../assets/images/logo.png" class="logo" />
            <span>All India Rahul Gandhi Brigade Congress</span>
          </h1>
        </div> 
      </div>
      <svg viewBox="0 50 500 500" 
        preserveAspectRatio="xMinYMin meet"
        style={{zIndex: -1}}> 
          
        <path d="M0, 100 C150, 200 350, 
            0 500, 100 L500, 00 L0, 0 Z" 
            style={{stroke: 'none', fill: '#FA8223'}}> 
        </path> 
      </svg>
      <svg viewBox="0 40 500 500" 
        preserveAspectRatio="xMinYMin meet"
        style={{zIndex: -2}}> 
          
        <path d="M0, 100 C150, 200 350, 
            0 500, 100 L500, 00 L0, 0 Z" 
            style={{stroke: 'none', fill: '#FD9A24'}}> 
        </path> 
      </svg> 
      <svg viewBox="0 30 500 500" 
        preserveAspectRatio="xMinYMin meet"
        style={{zIndex: -2}}> 
          
        <path d="M0, 100 C150, 200 350, 
            0 500, 100 L500, 00 L0, 0 Z" 
            style={{stroke: 'none', fill: '#FBB124'}}> 
        </path> 
      </svg> 
      <svg viewBox="0 40 500 500" 
        preserveAspectRatio="xMinYMin meet"
        style={{zIndex: -2}}> 
          
        <path d="M0, 100 C150, 200 350, 
            0 500, 100 L500, 00 L0, 0 Z" 
            style={{stroke: 'none', fill: '#FD9A24'}}> 
        </path> 
      </svg> 
      <div class="main">
        <div class="form col-md-4">
          {!showRegister && <form>
            <h3 style={{textAlign: 'center'}}>Existing Member</h3>
            <hr/>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Address/Phone Number</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your details with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group">
              <Link class="pull-right" onClick={onRegisterLinkClick}>Become a member</Link>
              <Link class="pull-left" to="/forgot-password">Forgot Password?</Link>
            </div><br/><br/>
            <button type="submit" class="btn btn-primary">Sign In</button>
          </form>}
          {showRegister && <form>
            <h3 style={{textAlign: 'center'}}>New Member</h3>
            <hr/>
            <div class="form-group">
              <label for="exampleInputEmail1">Email Address/Phone Number</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your details with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group">
              <Link class="pull-right" onClick={onLoginLinkClick}>Already a member, login</Link>
              </div><br/><br/>
            <button type="submit" class="btn btn-primary">Become a member</button>
          </form>}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
