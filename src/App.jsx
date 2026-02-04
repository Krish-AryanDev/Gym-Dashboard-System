import { useState } from 'react'
import LoginPage from './Components/LoginPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
function App() {
  

  return (
    <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        
    </Routes>
  )
}

export default App
