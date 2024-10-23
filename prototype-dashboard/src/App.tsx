import React from 'react';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import Notification from './components/Notification';
import DashboardOverview from './components/DashboardOverview';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import TeacherList from './components/TeacherList';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <TopNavBar />
        <Notification />
        <div className="p-6 overflow-y-auto">
          <DashboardOverview />
          <StudentList />
          <CourseList />
          <TeacherList />
        </div>
      </div>
    </div>
  );
};

export default App;
