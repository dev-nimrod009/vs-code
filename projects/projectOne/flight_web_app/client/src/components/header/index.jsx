import React from 'react'
import './styles.scss'
import { useLocation } from 'react-router-dom'




export default function Header() {

  const location = useLocation()

  if (location.pathname === '/signin') {
    return (
      <div className="header">
        <p>AIRLOVERS</p>

      </div>
    )
  } else if (location.pathname === '/signup') {
    return (
      <div className="header">
        <p>AIRLOVERS</p>

      </div>
    )
  }
  else if (location.pathname === '/') {
    return (
      <div className="header">


        <div className="header__homeheader">

          <p>AIRLOVERS</p>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contacts</a>
        </div>

        <div className="header__headersign">
          <a href="/signup">Sign Up</a>
          <a href="signin">Sign In</a>
        </div>



      </div>)
  }
  else {
    return (
      <div className="header">


        <div className="header__homeheader">

          <p>AIRLOVERS</p>
          <a href="/home">Home</a>
          <a href="">About</a>
          <a href="/contact">Contacts</a>
        </div>

        <div className="header__headersign">

        </div>
        <a href="/account" className="account" >Account</a>


      </div>
    )

  }
}




