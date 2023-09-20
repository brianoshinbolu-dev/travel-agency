import React, { useState } from 'react'
import './App.css'
import { Navbar , Home, Main, Footer} from './Components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <Home />
      <Main />
      <Footer />

    </>
  )
}

export default App
