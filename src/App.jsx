import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  const backgroundStyle = {
    backgroundImage: "url('../src/assets/Group9.svg')",
    backgroundRepeat: 'no-repeat', // Prevents repeating the image
  };

  return (
    <div className='overflow-x-hidden bg-[#222021] min-h-screen max-w-screen bg-cover bg-center ' style={backgroundStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
    </div >
  )
}

export default App
