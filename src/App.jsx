import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddtoCart from './component/AddtoCart'
import Favitem from './component/Favitem'
import Nav from './component/Nav'
import Productshow from './component/Productshow'

const App = () => {
  return (
    <div className=' container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Productshow/>} />
        <Route path='/fav' element={<Favitem/>} />
        <Route path='/addcart' element={<AddtoCart/>} />
      </Routes>
    </div>
  )
}

export default App