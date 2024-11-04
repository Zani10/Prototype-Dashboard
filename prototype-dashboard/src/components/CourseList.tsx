import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaBook, FaClock } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentCountFilter, setStudentCountFilter] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const enrollmentPercentages = {
    'Communication III': 85,
    'Design V': 80,
    'Grow III': 70,
    'Development V': 90,
    'Expert Lab': 85,
    'Internship': 100,
    'Final Work': 100,
  };


  useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched courses data:', data); 
        setCourses(data[0]?.courses || []); 
      })
      .catch(error => console.error('Error fetching courses:', error));

    fetch('http://localhost:3000/api/students')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched students data:', data); 
        setStudents(data[0]?.students || []); 
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);


  const getEnrolledStudentsForCourse = (courseName: string, enrollmentPercentage: number) => {
    return students.filter(() => Math.random() < enrollmentPercentage / 100).length;
  };

  
  const filteredCourses = courses.filter(course =>
    (studentCountFilter ? getEnrolledStudentsForCourse(course.name, enrollmentPercentages[course.name]) >= studentCountFilter : true) &&
    (searchTerm ? course.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

 
  const studentDistributionData = {
    labels: filteredCourses.map(course => course.name),
    datasets: [
      {
        label: 'Student Distribution',
        data: filteredCourses.map(course => getEnrolledStudentsForCourse(course.name, enrollmentPercentages[course.name])),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold mb-6">Course Information</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by course title"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min students"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={studentCountFilter || ''}
          onChange={(e) => setStudentCountFilter(e.target.value ? parseInt(e.target.value) : null)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg font-bold mb-2">Student Distribution by Course</h3>
          <div className="flex justify-center">
            <div className="w-96 h-96"> 
              <Pie data={studentDistributionData} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaBook className="text-green-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
                  <p className="text-sm text-gray-600">Enrolled Students: {getEnrolledStudentsForCourse(course.name, enrollmentPercentages[course.name])}</p>
                </div>
              </div>
              <div className="text-gray-700 mb-2">
                <p className="flex items-center gap-2">
                  <FaClock className="text-blue-400" /> Schedule: {course.schedule?.map(s => `${s.day} (${s.time})`).join(', ') || 'No schedule data'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
