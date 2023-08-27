import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from '../components'
import {CardDetails} from '../pages'


const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/details/:id' element={<CardDetails />} />
   </Routes>

  )
}

export default Routing