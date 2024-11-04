import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import { Link, useLocation } from 'react-router-dom';

const TopNavBar = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center">
      {!isDashboard && (
        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-500">
          Go back
        </Link>
      )}
      <div className="flex items-center gap-4 ml-auto">
        <DarkModeToggle />
        <FaBell className="text-gray-600 dark:text-gray-300 text-2xl cursor-pointer hover:text-blue-500" />
        <FaUserCircle className="text-gray-600 dark:text-gray-300 text-3xl cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default TopNavBar;
