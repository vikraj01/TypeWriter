import { useState } from 'react'
import Navbar from './components/navigation/Navbar';
import TypingText from './components/text/TypingText';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <TypingText/>
      </Router>
    </div>
  )
}

export default App
