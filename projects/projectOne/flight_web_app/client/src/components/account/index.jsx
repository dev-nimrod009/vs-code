import React from 'react'
import './styles.scss'
export default function Account() {
  return (


    <div className="main_body">
      <h1>Profile Details</h1>
      <div className="main_body__profile_details">
        <p>profile</p>
        <div className="main_body__profile_details__min_profile">
        </div>
      </div>
      <div className="main_body__email_details">
        <p>Email addresses</p>
        <div className="main_body__email_details__mini_email">
          <p><button>verify</button >email</p>
          <p>Do you want to add another email number?</p>
        </div>
      </div>

      <div className="main_body__phone_details">
        <p>Phone Number</p>
        <div className="main_body__phone_details__mini_number">
          <p>the following are your phone numbers would you like to add a new number?</p>
        </div>


      </div>

      <div className="main_body__connected_accounts">
        <p>Connected accounts</p>
        <div class="main_body__mini_accounts">
          <p>Your website is connected to the following social accounts</p>
        </div>

      </div>
    </div>


  )
}
