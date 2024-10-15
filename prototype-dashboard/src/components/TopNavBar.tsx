import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const TopNavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <FaBell className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500" />
        <FaUserCircle className="text-gray-600 dark:text-gray-300 text-3xl cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default TopNavBar;
