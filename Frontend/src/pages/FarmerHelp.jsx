import React, { useState } from 'react';
import { Plane as Plant, CloudRain, Sun, Wheat, Users, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function FarmerHelp() {
  const [activeTab, setActiveTab] = useState('crops');

  const tabs = [
    { id: 'crops', label: 'Crop Guide', icon: Plant },
    { id: 'weather', label: 'Weather Updates', icon: CloudRain },
    { id: 'resources', label: 'Resources', icon: Sun },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'crops':
            return (
            <Link to='https://huggingface.co/spaces/prince22/Crop-recommendation-and-rotation-plan'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000"
                alt="Wheat Field"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Seasonal Crop Guide</h3>
              <p className="text-gray-600">Learn about the best crops for current season and optimal planting times.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000"
                alt="Farming Tips"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Crop Rotation Plan</h3>
              <p className="text-gray-600">Expert tips on pest control, irrigation, and fertilization techniques.</p>
            </div>
                    </div>
                    </Link>
        );
      case 'weather':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Local Weather Forecast</h3>
              <CloudRain className="text-blue-500 w-8 h-8" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Monday</h4>
                    <p className="text-gray-600">Partly Cloudy</p>
                  <p className="text-lg font-semibold">24°C</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Tuesday</h4>
                    <p className="text-gray-600">Partly Cloudy</p>
                  <p className="text-lg font-semibold">22°C</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Wednesday</h4>
                    <p className="text-gray-600">Sunny</p>
                  <p className="text-lg font-semibold">28°C</p>
                    </div>
                    </div>
       
          </div>
        );
      case 'resources':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Educational Resources</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-blue-600 hover:text-blue-800">
                  <Sun className="w-5 h-5 mr-2" />
                  <a href="https://www.unep.org/news-and-stories/story/beginners-guide-sustainable-farming" className="hover:underline">Sustainable Farming Guide</a>
                </li>
                <li className="flex items-center text-blue-600 hover:text-blue-800">
                  <Sun className="w-5 h-5 mr-2" />
                  <a href="https://www.indiafilings.com/learn/organic-farming-certification-in-india/" className="hover:underline">Organic Certification Process</a>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tools & Equipment</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-blue-600 hover:text-blue-800">
                  <Sun className="w-5 h-5 mr-2" />
                  <a href="https://www.munichre.com/content/dam/munichre/hsb/hsb-iic/documents/hsb-equipment-maintenance-checklist.pdf/_jcr_content/renditions/original./hsb-equipment-maintenance-checklist.pdf" className="hover:underline">Equipment Maintenance Guide</a>
                </li>
                <li className="flex items-center text-blue-600 hover:text-blue-800">
                  <Sun className="w-5 h-5 mr-2" />
                  <a href="https://www.researchgate.net/publication/354624467_New_Agriculture_Technology_in_Modern_Farming" className="hover:underline">Modern Farming Tools</a>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Help & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Contact Support</h4>
                        <p className="text-gray-600">Available 24/7 for your farming needs</p>
                        <Link to='/contact'>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  Contact Us
                            </button>
                            </Link>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-medium">FAQs</h4>
                <ul className="space-y-2">
                  <li className="text-blue-600 hover:underline cursor-pointer">How to get started?</li>
                  <li className="text-blue-600 hover:underline cursor-pointer">Common farming issues</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Farmer's Help Center</h1>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default FarmerHelp;