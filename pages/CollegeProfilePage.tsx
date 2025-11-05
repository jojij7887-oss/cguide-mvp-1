import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COLLEGES } from '../constants';
import { User } from '../types';
import { StarIcon } from '../components/icons';

interface CollegeProfilePageProps {
  user: User;
  onToggleFavorite: (collegeId: string) => void;
}

const CollegeProfilePage: React.FC<CollegeProfilePageProps> = ({ user, onToggleFavorite }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const college = COLLEGES.find(c => c.id === id);

  if (!college) {
    return <div className="text-center text-red-500 text-xl">College not found.</div>;
  }
  
  const handleApply = () => {
      navigate(`/apply/${college.id}`);
  };

  const isFavorite = user.favoriteCollegeIds.includes(college.id);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Banner and Logo */}
      <div className="relative">
        <img className="h-64 w-full object-cover" src={college.photoUrl} alt={`${college.name} banner`} />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 flex items-end space-x-6">
          <img className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-4 border-white shadow-lg" src={college.logoUrl} alt={`${college.name} logo`} />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white shadow-text">{college.name}</h1>
            <p className="text-lg text-gray-200 shadow-text">{college.location}</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed">{college.description}</p>
          </section>

          {/* Courses Offered */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Courses Offered</h2>
            <div className="space-y-4">
              {college.courses.map(course => (
                <div key={course.id} className="p-4 border rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-700">{course.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                    <span>Duration: {course.duration}</span>
                    <span>|</span>
                    <span>Fees: {course.fees}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Events & Campus Life</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {college.events.map(event => (
                <div key={event.id} className="relative rounded-lg overflow-hidden group">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-semibold text-center p-2">{event.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Admission Info */}
          <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Admissions</h3>
            <div className="space-y-2">
              <p><strong>Open:</strong> {new Date(college.admissionOpenDate).toLocaleDateString()}</p>
              <p><strong>Closes:</strong> {new Date(college.admissionCloseDate).toLocaleDateString()}</p>
            </div>
            <div className="flex space-x-2 mt-6">
                <button 
                    onClick={handleApply}
                    className="flex-grow bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Apply Now
                </button>
                <button
                    onClick={() => onToggleFavorite(college.id)}
                    className={`p-3 rounded-lg transition-colors ${isFavorite ? 'bg-yellow-400 text-white hover:bg-yellow-500' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                    title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <StarIcon className="h-6 w-6" solid={isFavorite}/>
                </button>
            </div>
          </div>

          {/* Ads Section */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Featured Ad</h3>
            <div className="bg-white p-4 rounded-md shadow">
                <img src="https://picsum.photos/seed/ad1/300/150" alt="Ad" className="w-full rounded-md mb-2"/>
                <p className="text-sm font-semibold">Join our new Data Science program!</p>
                <p className="text-xs text-gray-500">Enroll now and get a 10% scholarship.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CollegeProfilePage;