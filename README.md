# React TypeScript Dashboard Platform

This is a dynamic dashboard platform built with React and TypeScript, featuring MongoDB as the database to manage and display data on students, teachers, and courses. The application provides insights through interactive charts and allows filtering across datasets, presenting a user-friendly interface for tracking performance metrics.

## Features

- Real-time Data Retrieval: Fetch data dynamically from MongoDB via an Express.js backend.
- Interactive Dashboard: Displays total counts of students, teachers, and courses with insights on average course performance.
- Dynamic Filtering: Search and filter students by name and enrolled subjects.
- Charts and Visualizations: View average course performance and student grade distributions.
- Responsive UI: Clean, intuitive design with dark mode support.
- Navigation: Efficient page transitions between dashboard, students, teachers, and courses pages.

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS, Chart.js (for data visualization)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (data stored and fetched from MongoDB collections)
- **Tools:** Visual Studio Code, Postman (for API testing)

## Setup Instructions

Follow these steps to set up the project on your local machine.

### Prerequisites

- Node.js and npm
- MongoDB Atlas or local MongoDB instance
- React and TypeScript

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Zani10/Prototype-Dashboard.git
   cd https://github.com/Zani10/Prototype-Dashboard.git

2. **Install backend dependencies:**
   ```bash
   cd dashboard-backend
   npm install

3. **Install frontend dependencies:**
   ```bash
   cd ../dashboard-frontend
   npm install
   
4. **Configure MongoDB Connection:**
   - In the backend directory, create a .env file and add your MongoDB connection string:
   ```bash
   MONGODB_URI=your-mongodb-connection-string
   PORT=3000
6. **Run Backend Server:**
   ```bash
   cd ../dashboard-backend
   node app.js
7. **Run Frontend Server:**
   ```bash
   cd ../dashboard-frontend
   npm run dev

8. **Access the Application: Open http://localhost:5173 in your web browser.**
  
   
## Features Overview
- Dashboard Overview: Displays the total number of students, teachers, and courses.
- Performance Metrics: Showcases average performance per course and grade distributions.
- Filterable Lists:
  - Students can be filtered by name and enrolled subjects.
  - Courses and teachers have customizable search filters for easy access.
- Navigation and Return to Dashboard: Easy navigation to detailed views and a return option to the dashboard from any section.
- Dark Mode Support: Toggle dark mode for a visually appealing user experience.

## Folder Structure
     |-- dashboard-backend/
     |   |-- controllers/
     |   |-- models/
     |   |-- routes/
     |   |-- app.js
     |   |-- db.js
     |   |-- .env
     |-- dashboard-frontend/
     |   |-- src/
     |       |-- assets/
     |       |-- components/
     |       |-- pages/
     |       |-- App.tsx
     |       |-- index.tsx
     |-- README.md


## SOURCES
Frontend
https://www.chartjs.org/docs/latest/getting-started/
https://tailwindcss.com/docs/installation
https://tailwindcss.com/docs
https://react.dev/learn/typescript
Backend
https://www.mongodb.com/docs/
https://expressjs.com/en/starter/basic-routing.html
Canvas web II modules & videos (API & MongoDB)
YT
https://www.youtube.com/watch?v=ZpfseYy5Hxg
https://www.youtube.com/watch?v=gxXPCSV_S7s
https://m.youtube.com/watch?v=RF57yDglDfE
https://m.youtube.com/watch?v=yOousFGfmZc
https://www.youtube.com/watch?v=Ly-9VTXJlnA
https://www.youtube.com/watch?v=OjgRmFcgBvw
Chatgpt
https://chatgpt.com/share/67293ca1-c2d4-800f-8f0b-3ca9b41f12d2
