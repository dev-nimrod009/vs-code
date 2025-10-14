import React, { useState } from 'react'

import { Navigate, Routes, Route } from 'react-router-dom'
import './App.scss'
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

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <div className="app">



      {isAuthenticated && <Header />}
      <main className=" app__main-page">
        <Routes>


          <Route path='/signin' element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/booking' element={isAuthenticated ? <Booking /> : <Navigate to="/signin" />} />
          <Route path='/confirmpage' element={isAuthenticated ? <ConfirmPage /> : <Navigate to="/signin" />} />
          <Route path='/account' element={isAuthenticated ? <Account /> : <Navigate to="/signin" />} />
          <Route path='/' element={isAuthenticated ? <LandingPage /> : <Navigate to="/signin" />} />
          <Route path='/dashboard' element={isAuthenticated ? <Homepage /> : <Navigate to="/signin" />} />
          <Route path='/flights' element={isAuthenticated ? <Flights /> : <Navigate to="/signin" />} />
          <Route path='*' element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/signin" />} />



        </Routes>
      </main>
      {isAuthenticated && <Footer />}

    </div>
  )
}

export default App
