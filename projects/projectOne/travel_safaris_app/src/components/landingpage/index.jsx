import React from 'react'
import './styles.css'
export default function LandingPage() {
  return (
    <div>
  

 
    <div class="hero">
        <h1>Explore the Hidden Wonders of Kenya</h1>
        <p>Find your next adventure today</p>
        <button class="cta-btn">Find Your Adventure</button>
    </div>

   
    <form class="search-filter">
        <select name="activity">
            <option value="">Activity Type</option>
            <option>Hiking</option>
            <option>Kayaking</option>
            <option>Climbing</option>
            <option>Safari</option>
        </select>
        <input type="text" name="location" placeholder="Location"/>
        <select name="duration">
            <option value="">Duration</option>
            <option>1 day</option>
            <option>2-3 days</option>
            <option>1 week+</option>
        </select>
        <select name="difficulty">
            <option value="">Difficulty</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Challenging</option>
        </select>
        <button type="submit">Search</button>
    </form>

    
    <div class="homepage">
        <div class="cards">
            
        </div>
    </div>

  
    <div class="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>Get the latest adventures and offers straight to your inbox.</p>
        <form>
            <input type="email" placeholder="Your email address" required/>
            <button type="submit">Subscribe</button>
        </form>
    </div>


    </div>
  )
}
