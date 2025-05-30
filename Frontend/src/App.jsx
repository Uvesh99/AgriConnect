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
import Profile from './components/Profile';
import DirectMessagesPage from './pages/DirectMessagesPage';
import Groups from './pages/Groups';
import MarketUpdates from './pages/MarketUpdates';
import Community from './pages/Community';
import Bid from './pages/Bid';
import Chatbot from './components/Chatbot';
import VerifyFarmer from './components/VerifyFarmer';
import FarmerHelp from './pages/FarmerHelp';
import Contact from './pages/Contact';
function App() {
 

  useEffect(() => {
    const scriptId = 'google-translate-script';
    const scriptIdChatbase = 'chatbase-script';

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
            <Route path="/add-farm" element={<VerifyFarmer />} />
            <Route path="/add-product" element={<UploadProduct />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/bid/:productId" element={<Bid />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/messages" element={<DirectMessagesPage />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/market-updates" element={<MarketUpdates />} />
            <Route path="/help" element={<FarmerHelp />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
            <Chatbot/>
        </main>
        <div className="gtranslate_wrapper"></div>
       </div>
        <Footer />
        
        
      </Router>
      
  );
}

export default App;