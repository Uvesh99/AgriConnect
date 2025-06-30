import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../apis/Auth_apis/Auth';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await loginUser(formData);
      console.log('Login successful:', response);
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('userId', response.user.id);
      localStorage.setItem("username", response.user.username);
      localStorage.setItem("email", response.user.email);
      localStorage.setItem("phone", response.user.phone);
      localStorage.setItem("role", response.user.role);
      window.dispatchEvent(new Event("authChange"));
      setSuccess(true);
      navigate('/');
    } catch (err) {
      console.error('Error logging in:', err);
      setError(err.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
    console.log('Login data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="flex w-full max-w-5xl p-4 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Log In
            </button>
            {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
            {success && <div className="mb-4 text-green-500 text-center">Login successfully!</div>}
            <p className="text-center text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
          {loading && (
            <div className="mt-4 text-center">
              <div className="loader">Loading...</div>
            </div>
          )}
        </div>

        <div className="hidden lg:block w-full max-w-md">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab"
              alt="Agricultural landscape"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
