import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, MapPin, Building2 } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 relative">
     
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none" />
      
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
           
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=800&q=80"
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h1 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
                  Get in Touch
                </h1>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Building2 className="h-5 w-5 text-indigo-600" />
                    <div>
                      <h3 className="font-medium">Our Office</h3>
                      <p className="text-sm">123 Business Avenue, Suite 100</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Phone className="h-5 w-5 text-indigo-600" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <Mail className="h-5 w-5 text-indigo-600" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm">contact@company.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City/Village
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your city or village"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {submitted && (
                  <div className="mt-4 p-4 bg-green-50 rounded-md animate-fade-in">
                    <p className="text-green-800 text-sm text-center">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;