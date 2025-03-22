import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard'; 
import Marketplace from './pages/Marketplace'; 
import Footer from './components/Footer'; 
import Signup from './pages/Signup';
import Login from './pages/Login';
import UploadForm from './components/UploadForm';
import UploadProduct from './components/UploadProduct';

function App() {
 

  useEffect(() => {
    const scriptId = 'google-translate-script';

    const initGoogleTranslate = () => {
      window.gtranslateSettings = {
        default_language: 'en',
        detect_browser_language: true,
        wrapper_selector: '.gtranslate_wrapper',
      };
      
      
    };

    if (!document.querySelector(`#${scriptId}`)) {
      const script = document.createElement('script');
      script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
      script.defer = true;
      script.id = scriptId;
      document.body.appendChild(script);
      script.onload = initGoogleTranslate;
    } else {
      initGoogleTranslate();
    }

    return () => {
      const script = document.querySelector(`#${scriptId}`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <Router>
      
      <div className="min-h-screen flex flex-col">
          <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-farm" element={<UploadForm />} />
            <Route path="/add-product" element={<UploadProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            </Routes>
        </main>
        <div className="gtranslate_wrapper"></div>
       </div>
        <Footer />
        
        
      </Router>
      
  );
}

export default App;