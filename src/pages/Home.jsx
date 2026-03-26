import React from 'react'
import Navbar from '../component/Navbar'
import Details from '../component/Details'
import Grid from '../component/Grid'

const Home = () => {
  return (
    <div className='app bg-blue-700 h-screen'>
      <Navbar />
      <Details />
      <Grid />
    </div>
  )
}

export default Home
