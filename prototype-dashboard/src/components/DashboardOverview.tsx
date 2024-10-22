import React from 'react';
import data from '../data/data.json';

const DashboardOverview = () => {
  const totalStudents = data.students.length;
  const totalTeachers = data.teachers.length;
  const totalCourses = data.courses.length;

  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-lg shadow-lg flex justify-between items-center gap-6 mb-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Total Students</h2>
        <p className="text-4xl mt-2 font-semibold">{totalStudents}</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Total Teachers</h2>
        <p className="text-4xl mt-2 font-semibold">{totalTeachers}</p>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Total Courses</h2>
        <p className="text-4xl mt-2 font-semibold">{totalCourses}</p>
      </div>
    </div>
  );
};

export default DashboardOverview;
