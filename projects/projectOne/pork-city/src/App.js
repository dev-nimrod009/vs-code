import React, { useState } from 'react'

import './App.css'
import Header from './components/header'
import Breakfast from './components/breakfast'
import Navbar from './components/nav-bar'




function App() {
  const [category, setCategory] = useState('breakfast');
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory)
  }

  return (
    <div className="app">

      <Header />
      <Navbar handleCategoryChange={handleCategoryChange} />
      <Breakfast category={category} />
    </div>
  )
}


export default App

