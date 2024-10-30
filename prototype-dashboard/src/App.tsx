import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import Notification from './components/Notification';
import DashboardOverview from './components/DashboardOverview'; 
import StudentList from './components/StudentList';  
import CourseList from './components/CourseList';    
import TeacherList from './components/TeacherList';  

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-100">
          <TopNavBar />
          <Notification />
          <div className="p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardOverview />} /> 
              <Route path="/students" element={<StudentList />} />  
              <Route path="/courses" element={<CourseList />} />  
              <Route path="/teachers" element={<TeacherList />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
