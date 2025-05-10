import { useState } from 'react';
import axios from '../services/mockApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', email: '', course: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) {
      return toast.error(' All fields are required');
    }

    axios.post('/students', form).then((res) => {
      onAdd(res.data);
      setForm({ name: '', email: '', course: '' });
      toast.success(` ${res.data.name} added successfully!`);
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/60 border border-gray-500 text-white p-6 rounded-2xl shadow-lg backdrop-blur-md space-y-4 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-center text-rose-400">Add New Student</h2>

        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full Name"
          className="w-full p-3 bg-gray-800/60 text-white placeholder-gray-400 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
        />

        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email Address"
          className="w-full p-3 bg-gray-800/60 text-white placeholder-gray-400 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
        />

        <input
          value={form.course}
          onChange={(e) => setForm({ ...form, course: e.target.value })}
          placeholder="Course Name"
          className="w-full p-3 bg-gray-800/60 text-white placeholder-gray-400 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-pink-700 shadow-md transition-transform hover:scale-105"
        >
          Add Student
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddStudent;
