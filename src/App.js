import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Product from './Pages/Product'

function App() {
  return (
    <div>
      <Routes>

      <Route path='/' element={<HomePage />}  />
      <Route path='/product' element={<Product /> } />

      </Routes>
    </div>
  )
}

export default App