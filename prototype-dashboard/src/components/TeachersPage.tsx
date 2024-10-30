import React from 'react';
import data from '../data/data.json';

const TeachersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <ul>
        {data.teachers.map(teacher => (
          <li key={teacher.id} className="bg-white p-4 shadow rounded mb-2">
            <h2 className="text-xl font-semibold">{teacher.name}</h2>
            <p>Subject: {teacher.subject}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersPage;
