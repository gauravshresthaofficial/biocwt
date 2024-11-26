import React, { useContext, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutUsPage from './pages/AboutUsPage';
import NotFound from './pages/NotFound';

import { ImageContext } from './context/ImageContext';

const App = () => {
  const { isLoading } = useContext(ImageContext);  // Access isLoading from context

  const backgroundStyle = {
    backgroundImage: "url('/Group9.svg')",
    backgroundRepeat: 'no-repeat', // Prevents repeating the image
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#222021]">
        <div className="text-center">
          <div className="loader"></div> {/* You can replace this with your actual loader component */}
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (

      <div
        className='overflow-x-hidden bg-[#222021] min-h-screen max-w-screen bg-cover bg-center'
        style={backgroundStyle}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    // </ImageProvider>
  );
};

export default App;
