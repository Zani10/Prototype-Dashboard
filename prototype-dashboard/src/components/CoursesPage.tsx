import React from 'react';
import data from '../data/data.json';

const CoursesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.courses.map(course => (
          <div key={course.name} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p>Teacher: {course.teacher}</p>
            <p>Average Grade: {course.averageGrade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
