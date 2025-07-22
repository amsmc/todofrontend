import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthController from "../../controllers/AuthController";
import Swal from "sweetalert2";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false
  });
  const register = AuthController((state) => state.register);
  const error = AuthController((state) => state.error);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Registering...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await register(form, navigate);
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You have successfully registered. Please login."
      }); 
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data?.message || "Registration failed, please try again later",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl px-8 py-12 rounded-2xl w-full max-w-md border border-blue-100">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 p-3 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 15a4 4 0 004 4h10a4 4 0 004-4v-1m-7.5-3l-.5.5m3.5-.5l.5.5m-7.5-3l.5.5m3.5-.5l-.5.5" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Create Account</h1>
        <p className="text-center text-gray-500 mb-8">Join us today</p>
        
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className={`relative transition-all duration-200 ${isFocused.name ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
              <input
                type="text"
                placeholder="John Doe"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black transition-all duration-200"
              />
              {isFocused.name && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className={`relative transition-all duration-200 ${isFocused.email ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
              <input
                type="email"
                placeholder="your@email.com"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black transition-all duration-200"
              />
              {isFocused.email && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className={`relative transition-all duration-200 ${isFocused.password ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                minLength={6}
                type="password"
                placeholder="••••••••"
                required
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-black transition-all duration-200"
              />
              {isFocused.password && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          
          {error && (
            <div className="mt-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;