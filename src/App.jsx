import { useState } from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Link to="/"><Home/></Link>
      {/* <Link to="/teams"><Teams/></Link>
      <Link to="/players"><Players/></Link>
      <Link to="/matches"><Matches/></Link> */}
    </>
  )
}

export default App
