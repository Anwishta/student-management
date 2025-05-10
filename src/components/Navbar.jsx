import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout, isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 border-b border-gray-700 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>

      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/add-student')}
            className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            Add Student
          </button>

          <button
            onClick={onLogout}
            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
