import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!', { autoClose: 3000 }); // Success toast
      onLogin();
    } catch (err) {
      console.error("Firebase Auth Error:", err.code, err.message);
      toast.error(`Login failed: ${err.message}`, { autoClose: 3000 }); // Error toast
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Logged in with Google!', { autoClose: 3000 }); // Success toast for Google login
      onLogin();
    } catch (err) {
      toast.error(`Google login failed: ${err.message}`, { autoClose: 3000 }); // Error toast for Google login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 pt-10">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/20 border border-gray-300/30 backdrop-blur-xl shadow-lg animate-slide-in">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>

        <div className="space-y-5">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-3.5 text-white cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Login
          </button>

          <p className="text-center text-white">or</p>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 transition flex items-center justify-center gap-3"
          >
            <FaGoogle className="text-xl text-blue-600" /> 
            Continue with Google
          </button>

          <div className="text-center text-white mt-4">
            <p>
              Don't have an account?{' '}
              <button onClick={() => navigate('/signup')} className="text-pink-500">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = `
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out forwards;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
