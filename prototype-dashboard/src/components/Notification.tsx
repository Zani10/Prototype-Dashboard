import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showNotification) return null;

  return (
    <div className="fixed top-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg animate-fadeIn">
      <p className="text-sm font-semibold">Upcoming Exam Alert!</p>
      <p className="text-xs">Don't forget the Web II theory exam on Monday!</p>
    </div>
  );
};

export default Notification;
