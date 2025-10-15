
import React, { useState } from 'react'
import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/homepage'
import LandingPage from './components/landingpage'
import SigningIn from './components/signingIn'
import SignupPage from './components/signUp'

export function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigningIn />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
