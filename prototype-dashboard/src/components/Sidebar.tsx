import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <FaUserGraduate />
            Students
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <FaBook />
            Courses
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
            <FaChalkboardTeacher />
            Teachers
          </li>
        </ul>
      </div>
      <p className="text-sm">© 2024 Your Dashboard</p>
    </div>
  );
};

export default Sidebar;
