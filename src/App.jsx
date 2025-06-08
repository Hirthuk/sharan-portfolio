import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import Abouts from './components/Abouts'
import Contact from './components/Contact'
import { useProfile } from './context/profilecontext'

const App = () => {
  const {ham} = useProfile();
  return (
    <div >
      <NavBar/>
      <Home/>
      <Projects/>
      <Abouts/>
      <Contact/>
    </div>
  )
}

export default App
