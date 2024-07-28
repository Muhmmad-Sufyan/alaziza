import React from 'react'
import './Recipient.css'
import Navbar from '../../components/navbar/Navbar'
const Recipient = () => {
  return (
    <div>
      <Navbar />
      <div className="recipient-container">
      <div className="image-section">
        <img src="/recpient.jpeg" alt="Blood Donation" />
      </div>
      <div className="form-section">
        <div className="form-header">
          <h1>Recipient Details</h1>
        </div>
        <form className="recipient-form">
          <div className="form-group">
            <label htmlFor="blood-group">Blood Group</label>
            <select id="blood-group">
              <option value="">Select</option>
              {/* Add blood group options here */}
            </select>
          </div>
          <div className="form-group">
            <button type="button" className="location-button">
              Current Location
            </button>
          </div>
          <div className="or-divider">OR</div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select id="state">
              <option value="">Select</option>
              {/* Add state options here */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="district">District</label>
            <select id="district">
              <option value="">Select</option>
              {/* Add district options here */}
            </select>
          </div>
          <div className="form-group submit-group">
            <button type="submit" className="submit-button">
              Proceed <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Recipient
