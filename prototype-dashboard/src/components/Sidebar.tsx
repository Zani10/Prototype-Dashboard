import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/students" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 cursor-pointer w-full">
              <FaUserGraduate />
              <span>Students</span>
            </Link>
          </li>
          <li>
            <Link to="/courses" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 cursor-pointer w-full">
              <FaBook />
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/teachers" className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 cursor-pointer w-full">
              <FaChalkboardTeacher />
              <span>Teachers</span>
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-sm">© 2024 Your Dashboard</p>
    </div>
  );
};

export default Sidebar;
