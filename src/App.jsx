import './App.css'
import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {

  const [theme, setTheme] = useState(true)
  function toggleDarkMode() {
    setTheme(prevTheme => !prevTheme)
  }

  return (
    <>
      <div className='container'>
        <Navbar darkMode={theme} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={theme} />
      </div>
    </>
  )
}

export default App