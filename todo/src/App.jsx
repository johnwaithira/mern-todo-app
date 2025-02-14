import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Update from './pages/Update'

const App = () => {

  document.title = "MERN - TODO App [Johnwaithira]"
  return (
    <div className='container m-auto'>
      <Nav />
      <div className="px-3">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </div>
    </div>
  )
}

export default App