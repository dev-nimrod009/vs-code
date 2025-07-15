import { useState } from 'preact/hooks'
 import React from 'react'
 import './app.css'
import HomePage from './components/homepage'
import LandingPage from './components/landingpage'
import SigningIn from './components/signingIn'

export function App() {


  return (
    <>
      {/* <HomePage/>  
       <LandingPage/>*/}
       <SigningIn/>
    </>
  )
}
