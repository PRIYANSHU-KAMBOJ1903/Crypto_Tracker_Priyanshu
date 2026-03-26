import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Relevent from './pages/Relevent'
import DetailCrypto from './pages/DetailCrypto'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Relevent />}/>
    <Route path='/crypto/:id' element={<DetailCrypto />} />
   </Routes>
   </>
  )
}

export default App
