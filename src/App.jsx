import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <Footer/>
    </div>
  )
}

export default App
