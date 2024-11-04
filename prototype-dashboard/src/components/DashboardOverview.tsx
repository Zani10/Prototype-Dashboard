import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { FaUserGraduate, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DashboardOverview = () => {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [gradeDistributionData, setGradeDistributionData] = useState(null);
  const [averagePerformanceData, setAveragePerformanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentRes = await fetch("http://localhost:3000/api/students");
        const studentData = await studentRes.json();
        setTotalStudents(studentData[0]?.students.length || 0);

        const teacherRes = await fetch("http://localhost:3000/api/teachers");
        const teacherData = await teacherRes.json();
        setTotalTeachers(teacherData[0]?.teachers.length || 0);

        const courseRes = await fetch("http://localhost:3000/api/courses");
        const courseData = await courseRes.json();
        setTotalCourses(courseData[0]?.courses.length || 0);

        
        const courseNames = courseData[0]?.courses.map(course => course.name) || [];
        const courseAverages = courseNames.map(courseName => {
          const totalScore = studentData[0].students.reduce((acc, student) => acc + (student.courses[courseName] || 0), 0);
          return (totalScore / studentData[0].students.length).toFixed(2);
        });

        setAveragePerformanceData({
          labels: courseNames,
          datasets: [
            {
              label: 'Average Performance per Course',
              data: courseAverages,
              backgroundColor: '#36A2EB',
            },
          ],
        });

        
        const gradeRanges = ["<60%", "60-70%", "70-80%", "80-90%", "90-100%"];
        const gradeDistribution = gradeRanges.map(range => {
          return courseNames.map(courseName => {
            const count = studentData[0].students.filter(student => {
              const grade = student.courses[courseName] || 0;
              if (range === "<60%") return grade < 60;
              if (range === "60-70%") return grade >= 60 && grade < 70;
              if (range === "70-80%") return grade >= 70 && grade < 80;
              if (range === "80-90%") return grade >= 80 && grade < 90;
              if (range === "90-100%") return grade >= 90;
            }).length;
            return count;
          });
        });

        setGradeDistributionData({
          labels: courseNames,
          datasets: gradeRanges.map((range, index) => ({
            label: range,
            data: gradeDistribution[index],
            backgroundColor: `hsl(${index * 40}, 70%, 60%)`,
          })),
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg shadow-lg flex justify-between items-center gap-6">
        <div className="text-center">
          <FaUserGraduate className="text-4xl mx-auto" />
          <h2 className="text-3xl font-bold">Total Students</h2>
          <p className="text-4xl mt-2 font-semibold">{totalStudents}</p>
        </div>
        <div className="text-center">
          <FaChalkboardTeacher className="text-4xl mx-auto" />
          <h2 className="text-3xl font-bold">Total Teachers</h2>
          <p className="text-4xl mt-2 font-semibold">{totalTeachers}</p>
        </div>
        <div className="text-center">
          <FaBookOpen className="text-4xl mx-auto" />
          <h2 className="text-3xl font-bold">Total Courses</h2>
          <p className="text-4xl mt-2 font-semibold">{totalCourses}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Average Performance per Course</h3>
          {averagePerformanceData ? (
            <Bar data={averagePerformanceData} options={{ scales: { y: { beginAtZero: true, max: 100 } } }} />
          ) : (
            <p>Loading performance data...</p>
          )}
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Student Grade Distribution</h3>
          {gradeDistributionData ? (
            <Bar data={gradeDistributionData} options={{ scales: { y: { beginAtZero: true } }, indexAxis: 'y' }} />
          ) : (
            <p>Loading grade distribution data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
