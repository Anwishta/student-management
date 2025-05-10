import React, { useState } from 'react';
import StudentDetails from './StudentDetails';

const StudentList = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSelect = (student) => {
    setSelectedStudent(student);
  };

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.course}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 m-0 pt-15">
      <div className="w-full max-w-4xl p-8 rounded-2xl bg-white/20 border border-gray-300/30 backdrop-blur-xl shadow-lg animate-slide-in">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Student List</h2>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name, email, or course"
          className="w-full p-3 mb-6 rounded-lg bg-gray-800/60 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
        />

        <ul className="space-y-3">
          {filteredStudents.map((student) => (
            <li
              key={student.id}
              className="cursor-pointer p-4 rounded-lg bg-gray-800/60 text-white hover:bg-gray-700/70 transition-all duration-200"
              onClick={() => handleSelect(student)}
            >
              <p><span className="font-bold">ID:</span> {student.id}</p>
              <p><span className="font-bold">Name:</span> {student.name}</p>
              <p><span className="font-bold">Email:</span> {student.email}</p>
              <p><span className="font-bold">Course:</span> {student.course}</p>
            </li>
          ))}
        </ul>

        {selectedStudent && (
          <div className="mt-6 bg-white/20 p-4 rounded-lg shadow-lg backdrop-blur-xl text-white">
            <StudentDetails student={selectedStudent} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;
