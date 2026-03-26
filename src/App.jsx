import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Relevent from './pages/Relevent'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Relevent />}/>
   </Routes>
   </>
  )
}

export default App
