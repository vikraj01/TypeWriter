import { useState } from 'react'
import Navbar from './components/navigation/navbar.component';
import TypingText from './components/text/TypingText';

import Home from './pages/home/home.page';

function App() {

  return (
    <>
      <Navbar/>
      <TypingText/>
    </>
  )
}

export default App
