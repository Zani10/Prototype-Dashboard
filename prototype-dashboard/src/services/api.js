import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchStudents = async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
};

export const fetchCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const fetchTeachers = async () => {
  const response = await axios.get(`${API_URL}/teachers`);
  return response.data;
};
