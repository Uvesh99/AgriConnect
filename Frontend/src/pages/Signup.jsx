// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { registerUser } from '../apis/Auth_apis/Auth';

// const Signup = () => {
//   const [userType, setUserType] = useState('consumer');
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     role: '',
//     phone: '',
//     location: '',
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);

//     if (!formData.name || !formData.username || !formData.email || !formData.password || !formData.phone || !formData.location) {
//       setError("All fields are required.");
//       return;
//     }

//     const userData = {
//       ...formData,
//       role: userType,
//     };

//     try {
//       const response = await registerUser(userData);
//       console.log("User registered successfully:", response);
//       setSuccess(true); // Set success message
//       // Optionally redirect the user or clear the form:
//       setFormData({
//         name: '',
//         username: '',
//         email: '',
//         password: '',
//         phone: '',
//         location: '',
//       });
//     } catch (err) {
//       console.error("Error registering user:", err);
//       setError(err.response ? err.response.data.message : "Registration failed.");
//     }

//     console.log('Signup data:', { ...formData, userType });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
//       <div className="flex w-full max-w-5xl p-4 gap-8">
//         {/* Form Section */}
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Create Account</h2>

//           {/* User Type Toggle */}
//           <div className="flex gap-4 mb-6">
//             <button
//               className={`flex-1 py-3 rounded-lg font-medium transition-colors ${userType === 'farmer'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-green-100 text-green-800'
//                 }`}
//               onClick={() => setUserType('farmer')}
//             >
//               🌾 Farmer
//             </button>
//             <button
//               className={`flex-1 py-3 rounded-lg font-medium transition-colors ${userType === 'consumer'
//                   ? 'bg-green-600 text-white'
//                   : 'bg-green-100 text-green-800'
//                 }`}
//               onClick={() => setUserType('consumer')}
//             >
//               🛒 Consumer
//             </button>
//           </div>
//           {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
//           {success && <div className="mb-4 text-green-500 text-center">User registered successfully!</div>}

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="Enter your username"
//                 value={formData.username}
//                 onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="Enter your Email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="Enter your Password"
//                 value={formData.password}
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 phone
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="Enter your phone number"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Location
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 placeholder="Enter your location"
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//               />
//             </div>
//             <Link to='/login'>
//               <button
//                 type="submit"
//                 className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
//               >
//                 Sign Up
//               </button>
//             </Link>
//             <p className="text-center text-gray-600 mt-4">
//               Already have an account?{' '}
//               <Link to="/login" className="text-green-600 hover:underline">
//                 Log In
//               </Link>
//             </p>

//           </form>
//         </div>

//         {/* Image Section */}
//         <div className="hidden lg:block w-full max-w-md">
//           <div className="h-full rounded-lg overflow-hidden">
//             <img
//               src={userType === 'farmer'
//                 ? "https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
//                 : "https://images.unsplash.com/photo-1542838132-92c53300491e"}
//               alt={userType === 'farmer' ? "Farmer in field" : "Fresh produce"}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../apis/Auth_apis/Auth'; // Adjust the import path based on your folder structure

const Signup = () => {
  const [userType, setUserType] = useState('consumer');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    location: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false); // Reset success state

    // Validate form data
    if (!formData.name || !formData.username || !formData.email || !formData.password || !formData.phone || !formData.location) {
      setError("All fields are required.");
      return;
    }

    // Prepare user data including role
    const userData = {
      ...formData,
      role: userType,
    };

    try {
      const response = await registerUser(userData);
      console.log("User registered successfully:", response);
      setSuccess(true); 
      localStorage.clear();
      localStorage.setItem("username", formData.username);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("phone", formData.phone);
      localStorage.setItem("role", userType);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.error("Error registering user:", err);
      setError(err.response ? err.response.data.message : "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="flex w-full max-w-5xl p-4 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Create Account</h2>

          {/* User Type Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${userType === 'farmer' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
              onClick={() => setUserType('farmer')}
            >
              🌾 Farmer
            </button>
            <button
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${userType === 'consumer' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
              onClick={() => setUserType('consumer')}
            >
              🛒 Consumer
            </button>
          </div>

          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          {success && <div className="mb-4 text-green-500 text-center">User registered successfully!</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600 mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 hover:underline">Log In</Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-full max-w-md">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={userType === 'farmer'
                ? "https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                : "https://images.unsplash.com/photo-1542838132-92c53300491e"}
              alt={userType === 'farmer' ? "Farmer in field" : "Fresh produce"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;