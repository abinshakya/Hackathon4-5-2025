
import { ArrowRight, Video, Vote, Map, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="w-full">
      {/* Hero section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Campus Connect</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your all-in-one platform for lecture videos, campus voting, and classroom tracking
            </p>
            <div className="space-x-4">
              <Link to="/lectures" className="inline-flex items-center bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/login" className="inline-flex items-center bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition">
                Login <LogIn className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-indigo-100 p-3 rounded-full inline-block mb-4">
                <Video className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Lecture Videos</h3>
              <p className="text-gray-600">
                Access course lectures anytime, anywhere. Never miss an important class with our comprehensive video library.
              </p>
              <Link to="/lectures" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                Browse Videos <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-indigo-100 p-3 rounded-full inline-block mb-4">
                <Vote className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Voting System</h3>
              <p className="text-gray-600">
                Participate in campus decisions. Vote for event artists, student representatives, and more through our secure platform.
              </p>
              <Link to="/voting" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                View Active Polls <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="bg-indigo-100 p-3 rounded-full inline-block mb-4">
                <Map className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Classroom Tracking</h3>
              <p className="text-gray-600">
                Find available classrooms and locate professors in real-time. Save time by knowing exactly where to go.
              </p>
              <Link to="/classroom-tracking" className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                Track Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Enhance Your Campus Experience?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of students already using Campus Connect to make the most of their college experience.
          </p>
          <div className="space-x-4">
            <Link to="/lectures" className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition">
              Explore Features
            </Link>
            <Link to="/login" className="inline-flex items-center bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition">
              Login / Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
