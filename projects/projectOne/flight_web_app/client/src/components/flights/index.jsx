import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.scss'
import axios from 'axios'


// import { flightData } from '../myAssets/availablFlights'


export default function Flights() {
    const navigate = useNavigate()
    const [flightData, setFlightData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {


        const getFlightsData = async () => {
            try {

                const response = await axios.get('http://127.0.0.1:3001/flights')
                setFlightData(response.data)
                setIsLoading(false)


            } catch (error) {
                console.log(error)
            }

        }
        getFlightsData()
    }, [])


    const handleSelect = (flight) => {
        navigate('/booking', { state: { flightDetails: flight } });

    }
    return (

        <div className="flights">

            <h1>Available Flights</h1>
            {isLoading ? (<p> Loading the flights Available.... </p>) :
                (
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
                )}
        </div>





    )
}
