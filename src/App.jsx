import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Featuresection from './components/Featuresection'
import Workflow from './components/Workflow'
import Price from './components/Price'

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Herosection/>
    </div>
    <Featuresection/>
    <Workflow/>
    <Price/>
    </>
  )
}

export default App