import React, { useState } from 'react'
import './styles.scss'
import { useLocation, useNavigate } from 'react-router-dom'



export default function Booking() {
  const location = useLocation()
  const navigate = useNavigate()
  const flightDetails = location.state?.flightDetails

  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const handleInput = (event) => {
    setPersonalDetails({ ...personalDetails, [event.target.name]: event.target.value })
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    navigate('/confirmpage', { state: { flightDetails, personalDetails } }
    )
  }
  return (

    <div className="booking_container">
      <section className="booking_container__flight_summary">
        <h2>Flight Details Summary</h2>
        <div className="booking_container__flight_summary__flight_details">
          <p><strong>Airline:</strong> AirLovers Airlines</p>
          <p><strong>From:</strong> {flightDetails.from}</p>
          <p><strong>To:</strong> {flightDetails.to}</p>
          <p><strong>Departure:</strong>{flightDetails.departure}</p>
          <p><strong>Arrival:</strong> {flightDetails.arrival}</p>
          <p><strong>Price:</strong> ${flightDetails.price}</p>
        </div>
      </section>

      <section className="booking_container__passenger_details">
        <h2>Passenger Details</h2>
        <form method="POST" onSubmit={handleConfirm}>
          <div className="booking_container__passenger_details__form_group">
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="name" placeholder="Enter your full name" value={personalDetails.name} onChange={handleInput} required />
          </div>
          <div className="booking_container__passenger_details__form_group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={personalDetails.email} onChange={handleInput} required />
          </div>
          <div className="booking_container__passenger_details__form_group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" value={personalDetails.phone} onChange={handleInput} required />
          </div>

          <button type="submit">Confirm Booking</button>
        </form>
      </section>
    </div>

  )
}
