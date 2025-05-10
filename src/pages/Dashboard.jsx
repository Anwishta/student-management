import { useEffect, useState } from 'react';
import axios from '../services/mockApi';
import StudentList from '../components/StudentList';

const Dashboard = ({ isAuthenticated }) => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState(''); 

  useEffect(() => {
    axios.get('/students').then((res) => setStudents(res.data));
  }, []);

  const filteredStudents = students.filter((s) =>
    s.course.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="pt-0 px-0">
      
      <input
        type="text"
        placeholder="Filter by course"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 px-4 py-2 border rounded-lg w-full md:w-1/3"
      />

      <StudentList students={filteredStudents} />

    </div>
  );
};

export default Dashboard;
