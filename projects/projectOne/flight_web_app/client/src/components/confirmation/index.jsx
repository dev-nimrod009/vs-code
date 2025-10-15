import React from 'react'
import './styles.scss'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'

export default function ConfirmPage() {
  const location = useLocation()
  const flightDetails = location.state?.flightDetails
  const personalDetails = location.state?.personalDetails
  // const [flightDetails, setFlightDetails] = useState([])
  // const [personalDetails, setPersonalDetails] = useState([])

  // useEffect(() => {
  //   const getDetails = async () => {
  //     try {
  //       const feedBack = axios.get('http://localhost:3001/api/bookings')
  //       setFlightDetails(feedBack.data)
  //       setPersonalDetails(feedBack.data)



  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getDetails()
  // }, [])


  return (
    <div className="main">
      <section className="main__confirmation-message">
        <h2>Booking Confirmed!</h2>
        <p>Thank you for booking with us. Your flight details are as follows:</p>
      </section>

      <section className="main__booking-details">
        <h3>Booking Reference Number</h3>
        <p><strong>Reference:</strong>   {flightDetails.id}</p>

        <h3>Flight Details</h3>
        <p><strong>Airline:</strong> {flightDetails.airlineName}  </p>
        <p><strong>From:</strong>   {flightDetails.from}</p>
        <p><strong>To:</strong> {flightDetails.to}</p>
        <p><strong>Departure:</strong> {flightDetails.departure}</p>
        <p><strong>Arrival:</strong> {flightDetails.arrival}</p>

        <h3>Passenger Details</h3>
        <p><strong>Name:</strong> {personalDetails.name}</p>
        <p><strong>Email:</strong> {personalDetails.email}</p>
        <p><strong>Phone:</strong> {personalDetails.phone}</p>

        <h3>Total Price</h3>
        <p><strong>Amount Paid:</strong> $200</p>
      </section>

      <section className="main__call-to-action">
        <button onclick="window.print()">Print Ticket</button>
        <button  >View Bookings</button>
        <button  >Contact Us</button>
      </section>
    </div>
  )
}
