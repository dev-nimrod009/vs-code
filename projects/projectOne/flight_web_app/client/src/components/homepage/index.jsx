import React, { useState } from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import tokyo from '../pictures/tokyo.jpg'
import paris from '../pictures/paris.jpg'
import newYork from '../pictures/newyork.jpg'

export default function Homepage() {

    const navigate = useNavigate()



    const [flightDetails, setFlightDetails] = useState({
        departure: '',
        from: '',
        to: ''
    })


    const handleBookNow = () => {

        navigate('/booking', { state: { flightDetails } })

    }
    const handleExplore = () => {
        navigate('/flights')
    }

    const handleInputChange = (event) => {
        setFlightDetails({ ...flightDetails, [event.target.name]: event.target.value })
    }

    const testimonials = [
        {
            summary: "AIRLOVERS made my trip to Paris unforgettable. Highly recommend!",
            name: "Francis franscisco "

        },
        {
            summary: "The booking process was seamless and easy. Great service!",
            name: "Bruno Fernades "

        },
    ]
    const destinationCards = [
        {
            destination: "Tokyo",
            image: tokyo

        },
        {
            destination: "Paris",
            image: paris

        },
        {
            destination: "NewYork",
            image: newYork

        }
    ]
    return (
        <div className="homepage">
            <div className="homepage__top">
                <h1 >The sky is never the limit again</h1>
            </div>

            <div className="homepage__popular_destinations">
                <h2>Popular Destinations</h2>
                <ul className="homepage__popular_destinations__cards">
                    {
                        destinationCards.map((destinations) => (<li className="homepage__popular_destinations__cards__card">
                            <img src={destinations.image} alt="Paris" />
                            <p>{destinations.destination}</p>

                        </li>
                        ))
                    }

                </ul>
            </div>
            <form className="homepage__box" onSubmit={handleBookNow}>

                <div className="homepage__box__box1">
                    <p>Flight</p>
                    <p>My Bookings</p>
                    <p>Flight Status</p>
                </div>
                <div className="homepage__box__box2">
                    <div className="homepage__box__box2__box2-1">

                        <div className="label-input-container">
                            <label>From</label>
                            <input type="text" placeholder="From" name="from" value={flightDetails.from} onChange={handleInputChange} required />
                        </div>

                        <div className="label-input-container">
                            <label>To</label>
                            <input type="text" placeholder="Destination" name="to" value={flightDetails.to} onChange={handleInputChange} required />
                        </div>
                    </div>

                    <div className="homepage__box__box2__box3">

                        <div className="label-input-container">
                            <label>Departure</label>
                            <input type="date" id="return" name="departure" value={flightDetails.departure} onChange={handleInputChange} required />
                        </div>

                        <div className="label-input-container">
                            <label>return</label>
                            <input type="date" id="arrival" name="return" value={flightDetails.arrival} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="homepage__box__box2__box4">
                        <div className="label-input-container">
                            <label>No. of Passengers</label>
                            <input type="number" name="passenger" required />
                        </div>

                        <div className="label-input-container">
                            <label>Passenger Class</label>
                            <select id="class" required>
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="firstClass">First Class</option>
                            </select>

                        </div>
                    </div>
                </div>

                <button type="submit"   >Book</button>

            </form>
            <div className="homepage__hero_section">
                <p>Book your next adventure with AIRLOVERS</p>
                <button onClick={handleExplore}>Explore Flights</button>

            </div>


            <div className="homepage__testimonials">
                <h2>What Our Customers Say</h2>

                <ul className="homepage__testimonials__cards">
                    {
                        testimonials.map((testimony) => (
                            <li className="testimonial">
                                <p>{testimony.summary}</p>
                                <span> {testimony.name}</span>
                            </li>
                        ))
                    }
                </ul>



            </div>
        </div>
    )
}
