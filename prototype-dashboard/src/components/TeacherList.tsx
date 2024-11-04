import React, { useState, useEffect } from 'react';
import { FaChalkboardTeacher, FaCalendarCheck, FaFlask, FaBriefcase } from 'react-icons/fa';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [subjectFilter, setSubjectFilter] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3000/api/teachers')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched teachers data:', data); 
        setTeachers(data[0]?.teachers || []); 
      })
      .catch(error => console.error('Error fetching teachers:', error));
  }, []);

  const filteredTeachers = teachers.filter(teacher =>
    (nameFilter ? teacher.name.toLowerCase().includes(nameFilter.toLowerCase()) : true) &&
    (subjectFilter ? teacher.subject.toLowerCase().includes(subjectFilter.toLowerCase()) : true)
  );

  return (
    <div className="mt-6">
      <h2 className="text-3xl font-bold mb-6">Teacher Availability</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by subject"
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
        />
      </div>

      {/* Main Teacher Availability Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher._id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-4">
              <FaChalkboardTeacher className="text-purple-500 text-3xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-gray-600">Subject: {teacher.subject}</p>
              </div>
            </div>
            <div className="text-gray-700">
              <h4 className="text-lg font-semibold mb-2">Availability</h4>
              <ul className="list-disc list-inside">
                {teacher.availability && teacher.availability.length > 0 ? (
                  teacher.availability.map((a, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCalendarCheck className="text-blue-400" />
                      {a.day} ({a.time})
                    </li>
                  ))
                ) : (
                  <p>No availability data</p>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Expert Lab Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FaFlask className="text-green-500" /> Expert Lab Availability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) =>
            teacher.expertLabAvailability && teacher.expertLabAvailability.length > 0 ? (
              <div key={teacher._id} className="bg-gray-100 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <FaFlask className="text-green-500 text-3xl" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                    <p className="text-sm text-gray-600">Expert Lab</p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <ul className="list-disc list-inside">
                    {teacher.expertLabAvailability.map((a, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCalendarCheck className="text-blue-400" />
                        {a.day} ({a.time})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Internship Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FaBriefcase className="text-blue-500" /> Internship Participation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher._id} className="bg-gray-100 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaBriefcase className="text-blue-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                  <p className="text-sm text-gray-600">Internship</p>
                </div>
              </div>
              <div className="text-gray-700">
                <p>This teacher participates in the Internship program.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherList;
