
import React, { useState } from 'react';
import { Search, Filter, Play } from 'lucide-react';

// Mock data for lecture videos
const lectureVideos = [
  {
    id: 1,
    title: 'Introduction to Computer Science',
    professor: 'Dr. Alan Smith',
    department: 'Computer Science',
    duration: '1:15:30',
    date: '2023-09-15',
    thumbnail: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    url: 'https://www.youtube.com/watch?v=EdB9ouUWI2A', // Replace with actual video URLs in production
  },
  {
    id: 2,
    title: 'Principles of Economics',
    professor: 'Dr. Sarah Johnson',
    department: 'Economics',
    duration: '55:20',
    date: '2023-09-14',
    thumbnail: 'https://images.unsplash.com/photo-1612550761236-e813928f7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbm9taWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    url: 'https://www.youtube.com/watch?v=EdB9ouUWI2A',
  },
  {
    id: 3,
    title: 'Organic Chemistry Lab',
    professor: 'Dr. Michael Wong',
    department: 'Chemistry',
    duration: '1:42:15',
    date: '2023-09-12',
    thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlbWlzdHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Modern World History',
    professor: 'Dr. Emily Chen',
    department: 'History',
    duration: '1:05:45',
    date: '2023-09-10',
    thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'Calculus II',
    professor: 'Dr. Robert Davis',
    department: 'Mathematics',
    duration: '1:30:00',
    date: '2023-09-08',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWF0aGVtYXRpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Introduction to Psychology',
    professor: 'Dr. Lisa Taylor',
    department: 'Psychology',
    duration: '1:20:10',
    date: '2023-09-05',
    thumbnail: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHN5Y2hvbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

// Filter options
const departments = ['All Departments', 'Computer Science', 'Economics', 'Chemistry', 'History', 'Mathematics', 'Psychology'];

const LectureVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<null | typeof lectureVideos[0]>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  
  // Filter videos based on search query and department
  const filteredVideos = lectureVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         video.professor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All Departments' || video.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lecture Videos</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search lectures or professors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="relative md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Video Player Section */}
      {selectedVideo && (
        <div className="mb-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={selectedVideo.url} 
                title={selectedVideo.title} 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{selectedVideo.title}</h2>
              <p className="text-gray-600">{selectedVideo.professor} • {selectedVideo.department}</p>
              <p className="text-gray-500 text-sm">Duration: {selectedVideo.duration} • Uploaded: {selectedVideo.date}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map(video => (
          <div 
            key={video.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <Play className="h-12 w-12 text-white" />
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-1">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.professor}</p>
              <p className="text-gray-500 text-xs">{video.department} • {video.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No videos found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default LectureVideos;
