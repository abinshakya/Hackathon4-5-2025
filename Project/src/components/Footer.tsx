
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Campus Connect</h2>
            <p className="text-gray-300">
              Helping students access resources, participate in campus decisions, 
              and navigate their college experience.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/lectures" className="text-gray-300 hover:text-white transition">Lecture Videos</a></li>
              <li><a href="/voting" className="text-gray-300 hover:text-white transition">Voting System</a></li>
              <li><a href="/classroom-tracking" className="text-gray-300 hover:text-white transition">Classroom Tracking</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <address className="not-italic text-gray-300">
              <p>Email: info@campusconnect.edu</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 University Ave</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {currentYear} Campus Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
