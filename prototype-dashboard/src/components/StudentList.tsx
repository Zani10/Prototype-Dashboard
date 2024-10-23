import React, { useState } from 'react';
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
import { FaUserGraduate, FaBookOpen } from 'react-icons/fa';
import data from '../data/data.json';

// Register necessary chart components
ChartJS.register(LineElement, PointElement, RadialLinearScale, LinearScale, CategoryScale, Filler, Tooltip, Legend);

const StudentList = () => {
  const [expandedStudentId, setExpandedStudentId] = useState<number | null>(null);

  const toggleExpand = (studentId: number) => {
    setExpandedStudentId(expandedStudentId === studentId ? null : studentId);
  };

  // Helper function to calculate the average grade for a student
  const calculateAverageGrade = (courses: { [key: string]: number }) => {
    const grades = Object.values(courses);
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return (total / grades.length).toFixed(2); // Rounded to 2 decimal places
  };

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold mb-6">Student Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.students.map((student) => (
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
                {Object.entries(student.courses).map(([course, grade]) => (
                  <li key={course}>
                    {course}: {grade}
                  </li>
                ))}
              </ul>
            </div>

            {expandedStudentId === student.id && (
              <div className="mt-4">
                {/* Performance Over Time (Line Chart) */}
                <h4 className="text-lg font-semibold">Average Grade</h4>
                <Line
                  key={`line-chart-${student.id}`} // Ensure unique key for each chart instance
                  data={{
                    labels: Object.keys(student.courses),
                    datasets: [
                      {
                        label: 'Course Grades',
                        data: Object.values(student.courses),
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

                {/* Course Proficiency (Radar Chart) */}
                <h4 className="text-lg font-semibold mt-4">Course Proficiency</h4>
                <Radar
                  key={`radar-chart-${student.id}`} // Ensure unique key for each chart instance
                  data={{
                    labels: Object.keys(student.courses),
                    datasets: [
                      {
                        label: 'Proficiency Level',
                        data: Object.values(student.courses),
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
    </div>
  );
};

export default StudentList;
