import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar';

const App = () => {
  const backgroundStyle = {
    backgroundImage: "url('../src/assets/Vector.svg')",
    backgroundRepeat: 'no-repeat', // Prevents repeating the image
  };

  return (
    <div className='overflow-x-hidden bg-[#222021] min-h-screen max-w-screen bg-cover bg-center ' style={backgroundStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div >
  )
}

export default App
