import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'


import { flightData } from '../myAssets/availablFlights'


export default function Flights() {
    const navigate = useNavigate()

    const handleSelect = (flight) => {
        navigate('/booking', { state: { flightDetails: flight } });

    }
    return (
        <div className="flights">

            <h1>Available Flights</h1>
            <div className="flight__cards">


                <ul>
                    {
                        flightData.map((flight, i) => (<li key={i}>
                            <img src={flight.logo} alt="Airline Logo" />
                            <h3>{flight.airlineName}</h3>
                            <p><strong>From:</strong> {flight.from}</p>
                            <p><strong>To:</strong> {flight.to}</p>
                            <p><strong>Departure:</strong> {flight.departure} HRS</p>
                            <p><strong>Arrival:</strong> {flight.arrival} HRS</p>
                            <p><strong>Price:</strong> ${flight.price}</p>
                            <button type="button" onClick={() => handleSelect(flight)}>Select Now</button>

                        </li>
                        ))}
                </ul>



            </div>

        </div>
    )
}
