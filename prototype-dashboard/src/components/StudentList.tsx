import React, { useState, useEffect } from 'react';
import { Line, Radar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  LineElement, 
  PointElement, 
  RadialLinearScale, 
  LinearScale, 
  CategoryScale, 
  Filler, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { FaUserGraduate } from 'react-icons/fa';

ChartJS.register(LineElement, PointElement, RadialLinearScale, LinearScale, CategoryScale, Filler, Tooltip, Legend);

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [expandedStudentId, setExpandedStudentId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/students")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data); 
        setStudents(data[0].students); 
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const toggleExpand = (studentId: number) => {
    setExpandedStudentId(expandedStudentId === studentId ? null : studentId);
  };

  const handleCheckboxChange = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const uniqueSubjects = Array.from(
    new Set(students.flatMap((student: any) => Object.keys(student.courses || {})))
  );

  const filteredStudents = students.filter((student: any) =>
    (student.name?.toLowerCase() || "").includes(searchTerm.toLowerCase()) &&
    (selectedSubjects.length === 0 || selectedSubjects.every(subject => subject in student.courses))
  );

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold mb-6">Student Performance</h2>

      <div className="mb-4 w-full md:w-64">
        <input
          type="text"
          placeholder="Search by student name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
        />
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Filter by Subjects:</h4>
        <div className="flex flex-wrap gap-3">
          {uniqueSubjects.map((subject) => (
            <button
              key={subject}
              onClick={() => handleCheckboxChange(subject)}
              className={`px-4 py-2 rounded-full shadow-md transition transform ${
                selectedSubjects.includes(subject)
                  ? 'bg-blue-500 text-white scale-105'
                  : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {filteredStudents.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudents.map((student: any) => (
            <div
              key={student.id} 
              className={`bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                expandedStudentId === student.id ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => toggleExpand(student.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <FaUserGraduate className="text-blue-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{student.name}</h3>
                </div>
              </div>

              <div className="text-gray-700 mb-3">
                <h4 className="font-semibold">Courses and Grades</h4>
                <ul>
                  {Object.entries(student.courses || {}).map(([course, grade]) => (
                    <li key={`${student.id}-${course}`}>
                      {course}: {grade}
                    </li>
                  ))}
                </ul>
              </div>

              {expandedStudentId === student.id && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Average Grade</h4>
                  <Line
                    key={`line-chart-${student.id}`}
                    data={{
                      labels: Object.keys(student.courses || {}),
                      datasets: [
                        {
                          label: 'Course Grades',
                          data: Object.values(student.courses || {}),
                          borderColor: '#36A2EB',
                          backgroundColor: 'rgba(54, 162, 235, 0.2)',
                          tension: 0.4,
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                        },
                      },
                    }}
                  />

                  <h4 className="text-lg font-semibold mt-4">Course Proficiency</h4>
                  <Radar
                    key={`radar-chart-${student.id}`}
                    data={{
                      labels: Object.keys(student.courses || {}),
                      datasets: [
                        {
                          label: 'Proficiency Level',
                          data: Object.values(student.courses || {}),
                          backgroundColor: 'rgba(99, 255, 132, 0.2)',
                          borderColor: '#63FF84',
                          borderWidth: 2,
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        r: {
                          ticks: {
                            beginAtZero: true,
                            max: 100,
                          },
                        },
                      },
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;
