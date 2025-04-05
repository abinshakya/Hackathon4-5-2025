
import { Link } from 'react-router-dom';
import { Menu, X, Video, Vote, Map, LogIn } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 font-bold text-xl">
              Campus Connect
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/lectures" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                <Video className="h-5 w-5 mr-1" />
                Lecture Videos
              </Link>
              <Link to="/voting" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                <Vote className="h-5 w-5 mr-1" />
                Voting System
              </Link>
              <Link to="/classroom-tracking" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                <Map className="h-5 w-5 mr-1" />
                Classroom Tracking
              </Link>
              <Link to="/login" className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-indigo-800 hover:bg-indigo-900 transition ml-2">
                <LogIn className="h-5 w-5 mr-1" />
                Login
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/lectures" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <Video className="h-5 w-5 mr-1" />
              Lecture Videos
            </Link>
            <Link 
              to="/voting" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <Vote className="h-5 w-5 mr-1" />
              Voting System
            </Link>
            <Link 
              to="/classroom-tracking" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
              onClick={() => setIsOpen(false)}
            >
              <Map className="h-5 w-5 mr-1" />
              Classroom Tracking
            </Link>
            <Link 
              to="/login" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium bg-indigo-800 hover:bg-indigo-900 transition"
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
