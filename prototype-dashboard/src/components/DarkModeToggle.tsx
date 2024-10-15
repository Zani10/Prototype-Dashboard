import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="p-2 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <FaSun className="text-yellow-500 text-2xl hover:text-yellow-400 transition-colors duration-300" />
      ) : (
        <FaMoon className="text-gray-800 text-2xl hover:text-gray-600 transition-colors duration-300" />
      )}
    </div>
  );
};

export default DarkModeToggle;
