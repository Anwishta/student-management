import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import AddStudent from './pages/AddStudent';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('isAuthenticated') === 'true'
  );
const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="App">
        <Navbar onLogout={() => setIsAuthenticated(false)} isAuthenticated={isAuthenticated} />

        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Dashboard isAuthenticated={isAuthenticated} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <Login onLogin={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isAuthenticated ? (
                <Navigate to="/" />
              ) : (
                <SignUp onRegister={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/add-student"
            element={
              isAuthenticated ? (
                 <AddStudent onAdd={handleAddStudent} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
