const StudentDetails = ({ student }) => {
  return (
    <div className="bg-gray-800/60 border border-gray-500 text-white p-6 rounded-2xl shadow-lg backdrop-blur-md">
      <h3 className="text-2xl font-bold mb-4 text-rose-400">Student Details</h3>
      <p className="mb-2"><span className="font-semibold text-gray-300">Name:</span> {student.name}</p>
      <p className="mb-2"><span className="font-semibold text-gray-300">Email:</span> {student.email}</p>
      <p className="mb-2"><span className="font-semibold text-gray-300">Course:</span> {student.course}</p>
    </div>
  );
};

export default StudentDetails;
