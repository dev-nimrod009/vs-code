import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Homepage from './components/homepage'
import Flights from './components/flights'
import SignIn from './components/SignIn'
import SignUp from './components/sign-up'
import Account from './components/account'
import Booking from './components/booking'
import ConfirmPage from './components/confirmation'
import LandingPage from './components/landingPage'

function App() {


  return (

    <BrowserRouter>

      <div className="app">

        <Header />

        <div className="app__main-page">
           <Routes>
             <Route path="/signup" element={<SignUp />} /> 
              <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/home" element={<Homepage />} />  
            <Route path="/flights" element={<Flights />} />
          <Route path="/booking" element={<Booking />} />
            <Route path="/confirmpage" element={<ConfirmPage />} />  
          </Routes> 
        </div>

        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App
