import React, { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignUp from './pages/Sign-up'
import SignIn from './pages/Sign-in'
import Dashboard from './pages/dashboard'
import TransactionsPage from './pages/Transactions'
import Header from './pages/header'
import Accounts from './pages/accounts'
import Settings from './pages/settings'
import Reports from './pages/report'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="app-container">
      <BrowserRouter>

        {isAuthenticated && <Header />}
        <main className=" app-container__main">
          <Routes>
            <Route path='/signin' element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />


            <Route path='/lists' element={isAuthenticated ? <TransactionsPage /> : <Navigate to="/signin" />} />
            <Route path='/' element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/accounts' element={isAuthenticated ? <Accounts /> : <Navigate to="/signin" />} />
            <Route path='/report' element={isAuthenticated ? <Reports /> : <Navigate to="/signin" />} />
            <Route path='/settings' element={isAuthenticated ? <Settings /> : <Navigate to="/signin" />} />

            <Route path='*' element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/signin" />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
