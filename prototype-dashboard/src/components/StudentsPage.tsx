import React from 'react';
import data from '../data/data.json';

const StudentsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.students.map(student => (
          <div key={student.id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p>Year: {student.year}</p>
            <h3 className="font-semibold mt-2">Courses and Grades</h3>
            <ul>
              {Object.entries(student.courses).map(([course, grade]) => (
                <li key={course}>{course}: {grade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsPage;
