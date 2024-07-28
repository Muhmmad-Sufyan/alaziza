import React from 'react'
import './RegisterAsOrganization.css'
import Navbar from '../../components/navbar/Navbar'
const RegisterAsOrganization = () => {
  return (
    <div>
      <Navbar />
      <div className="register-container">
      <div className="register-header">
        <h1 style={{color:'white',textAlign:'start'}}>Register As Organization</h1>
      </div>
      <form className="register-form">
        <div className='first'>

        <div className="form-group">
          <label htmlFor="organization-name">Organization Name</label>
          <input type="text" id="organization-name" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea id="address" placeholder="Type Here"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="head-of-organization">Head of Organization</label>
          <input type="text" id="head-of-organization" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="phone-number" placeholder="Number" />
        </div>
        </div>
        <div className="submit-group1">
          <button type="submit" className="submit-button1">
            Submit <i className='bx bx-check'></i>
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default RegisterAsOrganization
