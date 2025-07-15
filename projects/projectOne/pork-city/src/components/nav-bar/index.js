import React from 'react'
import './styles.css'


export default function Navbar({ handleCategoryChange }) {



    return (
        <nav className="navbar">

            <button className="breakfast" onClick={() => handleCategoryChange('breakfast')}> Breakfast and Snacks</button>
            <button className="foods" onClick={() => handleCategoryChange('foodsAndDrinks')}> Foods  </button>
            <button className="desserts" onClick={() => handleCategoryChange('desserts')}> Desserts and Drinks</button>

        </nav>
    )
}
