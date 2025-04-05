
import React, { useState } from 'react';
import { Search, MapPin, User, Clock, X } from 'lucide-react';

// Mock data for classrooms
const classroomsData = [
  {
    id: 101,
    name: "Room 101",
    building: "Science Building",
    floor: 1,
    capacity: 30,
    isOccupied: true,
    currentClass: "Introduction to Biology",
    timeRemaining: 45, // minutes
    professor: "Dr. Maria Rodriguez"
  },
  {
    id: 102,
    name: "Room 102",
    building: "Science Building",
    floor: 1,
    capacity: 25,
    isOccupied: false,
    currentClass: null,
    timeRemaining: null,
    professor: null
  },
  {
    id: 103,
    name: "Room 103",
    building: "Science Building",
    floor: 1,
    capacity: 25,
    isOccupied: true,
    currentClass: "Physics Lab",
    timeRemaining: 90,
    professor: "Dr. James Wilson"
  },
  {
    id: 201,
    name: "Room 201",
    building: "Science Building",
    floor: 2,
    capacity: 40,
    isOccupied: false,
    currentClass: null,
    timeRemaining: null,
    professor: null
  },
  {
    id: 202,
    name: "Room 202",
    building: "Science Building",
    floor: 2,
    capacity: 40,
    isOccupied: false,
    currentClass: null,
    timeRemaining: null,
    professor: null
  },
  {
    id: 301,
    name: "Room 301",
    building: "Arts Building",
    floor: 3,
    capacity: 35,
    isOccupied: true,
    currentClass: "Modern Literature",
    timeRemaining: 30,
    professor: "Dr. Emily Thompson"
  },
  {
    id: 302,
    name: "Room 302",
    building: "Arts Building",
    floor: 3,
    capacity: 30,
    isOccupied: false,
    currentClass: null,
    timeRemaining: null,
    professor: null
  },
  {
    id: 401,
    name: "Room 401",
    building: "Engineering Building",
    floor: 4,
    capacity: 50,
    isOccupied: true,
    currentClass: "Advanced Robotics",
    timeRemaining: 60,
    professor: "Dr. Robert Chen"
  },
  {
    id: 402,
    name: "Room 402",
    building: "Engineering Building",
    floor: 4,
    capacity: 45,
    isOccupied: false,
    currentClass: null,
    timeRemaining: null,
    professor: null
  },
];

// Mock data for professors
const professorsData = [
  {
    id: 1,
    name: "Dr. Maria Rodriguez",
    department: "Biology",
    status: "In Class",
    location: "Science Building, Room 101",
    officeHours: "2:00 PM - 4:00 PM",
    officeLocation: "Science Building, Room 150"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    department: "Physics",
    status: "In Class",
    location: "Science Building, Room 103",
    officeHours: "11:00 AM - 1:00 PM",
    officeLocation: "Science Building, Room 155"
  },
  {
    id: 3,
    name: "Dr. Emily Thompson",
    department: "Literature",
    status: "In Class",
    location: "Arts Building, Room 301",
    officeHours: "10:00 AM - 12:00 PM",
    officeLocation: "Arts Building, Room 320"
  },
  {
    id: 4,
    name: "Dr. Robert Chen",
    department: "Engineering",
    status: "In Class",
    location: "Engineering Building, Room 401",
    officeHours: "3:00 PM - 5:00 PM",
    officeLocation: "Engineering Building, Room 450"
  },
  {
    id: 5,
    name: "Dr. Sarah Johnson",
    department: "Chemistry",
    status: "In Office",
    location: "Science Building, Room 160",
    officeHours: "1:00 PM - 3:00 PM",
    officeLocation: "Science Building, Room 160"
  },
  {
    id: 6,
    name: "Dr. Michael Brown",
    department: "Computer Science",
    status: "Available",
    location: "Engineering Building, Room 455",
    officeHours: "9:00 AM - 11:00 AM",
    officeLocation: "Engineering Building, Room 455"
  },
];

const ClassroomTracking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const [selectedTab, setSelectedTab] = useState('classrooms'); // 'classrooms' or 'professors'
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  
  // Filter classrooms based on search and availability
  const filteredClassrooms = classroomsData.filter(classroom => {
    const matchesSearch = 
      classroom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classroom.building.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch && (showOnlyAvailable ? !classroom.isOccupied : true);
  });
  
  // Filter professors based on search
  const filteredProfessors = professorsData.filter(professor => {
    return professor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           professor.department.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const handleClassroomClick = (classroom: any) => {
    setSelectedLocation({ type: 'classroom', data: classroom });
  };
  
  const handleProfessorClick = (professor: any) => {
    setSelectedLocation({ type: 'professor', data: professor });
  };
  
  const closeDetails = () => {
    setSelectedLocation(null);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Classroom & Professor Tracking</h1>
        <p className="text-gray-600 mt-2">Find available classrooms and locate professors in real-time</p>
      </div>
      
      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder={`Search ${selectedTab === 'classrooms' ? 'classrooms' : 'professors'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {selectedTab === 'classrooms' && (
          <div className="flex items-center">
            <input
              id="available-only"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              checked={showOnlyAvailable}
              onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
            />
            <label htmlFor="available-only" className="ml-2 text-gray-700">
              Show available only
            </label>
          </div>
        )}
      </div>
      
      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex -mb-px space-x-8">
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'classrooms'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setSelectedTab('classrooms')}
          >
            Classrooms
          </button>
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              selectedTab === 'professors'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setSelectedTab('professors')}
          >
            Professors
          </button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* List Section */}
        <div className="lg:w-2/3">
          {selectedTab === 'classrooms' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClassrooms.map(classroom => (
                <div
                  key={classroom.id}
                  className={`border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${
                    classroom.isOccupied ? 'bg-gray-50' : 'bg-green-50'
                  }`}
                  onClick={() => handleClassroomClick(classroom)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{classroom.name}</h3>
                    <span 
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        classroom.isOccupied 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {classroom.isOccupied ? 'Occupied' : 'Available'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">{classroom.building}, Floor {classroom.floor}</p>
                  <p className="text-xs text-gray-500 mt-1">Capacity: {classroom.capacity} students</p>
                  
                  {classroom.isOccupied && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-500">{classroom.currentClass}</p>
                      <p className="text-xs text-gray-500">{classroom.professor}</p>
                      <p className="text-xs text-gray-500">Time remaining: {classroom.timeRemaining} min</p>
                    </div>
                  )}
                </div>
              ))}
              
              {filteredClassrooms.length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500">No classrooms found matching your criteria</p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProfessors.map(professor => (
                <div
                  key={professor.id}
                  className={`border rounded-lg p-4 cursor-pointer transition hover:shadow-md ${
                    professor.status === 'In Class' 
                      ? 'bg-yellow-50' 
                      : professor.status === 'In Office' 
                        ? 'bg-blue-50' 
                        : 'bg-green-50'
                  }`}
                  onClick={() => handleProfessorClick(professor)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{professor.name}</h3>
                    <span 
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        professor.status === 'In Class' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : professor.status === 'In Office' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {professor.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">{professor.department}</p>
                  <p className="text-xs text-gray-500 mt-1">Location: {professor.location}</p>
                  <p className="text-xs text-gray-500">Office Hours: {professor.officeHours}</p>
                </div>
              ))}
              
              {filteredProfessors.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <p className="text-gray-500">No professors found matching your criteria</p>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Details Section */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            {selectedLocation ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    {selectedLocation.type === 'classroom' ? 'Classroom Details' : 'Professor Details'}
                  </h2>
                  <button
                    onClick={closeDetails}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {selectedLocation.type === 'classroom' ? (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold">{selectedLocation.data.name}</h3>
                      <p className="text-gray-600">{selectedLocation.data.building}, Floor {selectedLocation.data.floor}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-full p-2 mr-3">
                          <MapPin className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Location</p>
                          <p className="text-sm text-gray-500">{selectedLocation.data.building}, Floor {selectedLocation.data.floor}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-full p-2 mr-3">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Capacity</p>
                          <p className="text-sm text-gray-500">{selectedLocation.data.capacity} students</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className={`rounded-full p-2 mr-3 ${
                          selectedLocation.data.isOccupied ? 'bg-red-100' : 'bg-green-100'
                        }`}>
                          <Clock className={`h-5 w-5 ${
                            selectedLocation.data.isOccupied ? 'text-red-500' : 'text-green-500'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Status</p>
                          <p className={`text-sm ${
                            selectedLocation.data.isOccupied ? 'text-red-500' : 'text-green-500'
                          }`}>
                            {selectedLocation.data.isOccupied ? 'Occupied' : 'Available'}
                          </p>
                        </div>
                      </div>
                      
                      {selectedLocation.data.isOccupied && (
                        <>
                          <div className="pt-2 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-900 mb-2">Current Class</p>
                            <p className="text-sm text-gray-600">{selectedLocation.data.currentClass}</p>
                            <p className="text-sm text-gray-600 mt-1">{selectedLocation.data.professor}</p>
                            <p className="text-sm text-gray-600 mt-1">Time remaining: {selectedLocation.data.timeRemaining} minutes</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold">{selectedLocation.data.name}</h3>
                      <p className="text-gray-600">{selectedLocation.data.department}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className={`rounded-full p-2 mr-3 ${
                          selectedLocation.data.status === 'In Class' 
                            ? 'bg-yellow-100' 
                            : selectedLocation.data.status === 'In Office' 
                              ? 'bg-blue-100' 
                              : 'bg-green-100'
                        }`}>
                          <Clock className={`h-5 w-5 ${
                            selectedLocation.data.status === 'In Class' 
                              ? 'text-yellow-500' 
                              : selectedLocation.data.status === 'In Office' 
                                ? 'text-blue-500' 
                                : 'text-green-500'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Status</p>
                          <p className={`text-sm ${
                            selectedLocation.data.status === 'In Class' 
                              ? 'text-yellow-500' 
                              : selectedLocation.data.status === 'In Office' 
                                ? 'text-blue-500' 
                                : 'text-green-500'
                          }`}>
                            {selectedLocation.data.status}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-full p-2 mr-3">
                          <MapPin className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Current Location</p>
                          <p className="text-sm text-gray-500">{selectedLocation.data.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="bg-gray-100 rounded-full p-2 mr-3">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Department</p>
                          <p className="text-sm text-gray-500">{selectedLocation.data.department}</p>
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-900 mb-2">Office Information</p>
                        <p className="text-sm text-gray-600">Office Hours: {selectedLocation.data.officeHours}</p>
                        <p className="text-sm text-gray-600 mt-1">Office Location: {selectedLocation.data.officeLocation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 h-full flex flex-col justify-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-gray-500 text-lg">Select a {selectedTab === 'classrooms' ? 'classroom' : 'professor'} to view details</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassroomTracking;
