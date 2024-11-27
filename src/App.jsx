import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutUsPage from './pages/AboutUsPage';
import NotFound from './pages/NotFound';
import { ImageContext } from './context/ImageContext';
import gsap from 'gsap';

const App = () => {
  const { isLoading } = useContext(ImageContext); // Access isLoading from context
  const location = useLocation(); // Get the current location
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingText((prev) => {
          if (prev === 'Loading') return 'Loading.';
          if (prev === 'Loading.') return 'Loading..';
          if (prev === 'Loading..') return 'Loading...';
          return 'Loading';
        });
      }, 200); // Change text every 200ms

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      gsap.to('.loader-container', {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        onComplete: () => gsap.to('.page-container', {
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out'
        })
      });
    }
  }, [isLoading]);

  useEffect(() => {
    // Triggering the page transition animation whenever the route changes
    gsap.fromTo(
      '.page-container',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
  }, [location]);

  const backgroundStyle = {
    backgroundImage: "url('/Group9.svg')",
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div
      className="overflow-x-hidden bg-[#222021] min-h-screen max-w-screen bg-cover bg-center
      "
      style={backgroundStyle}
    >
      <Navbar />
      {isLoading ? (
        <div className="loader-container fixed inset-0 flex flex-col items-center justify-center bg-[#222021]">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <p className="text-slate-400 mt-4 text-lg font-semibold tracking-wider">{loadingText}</p>
        </div>
      ) : (
        <div className="page-container" style={{ opacity: 0 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
