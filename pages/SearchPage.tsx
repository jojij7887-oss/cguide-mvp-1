
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { COLLEGES } from '../constants';
import { College } from '../types';
import { SearchIcon } from '../components/icons';

const CollegeCard: React.FC<{ college: College }> = ({ college }) => (
  <Link to={`/college/${college.id}`} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img className="h-48 w-full object-cover" src={college.photoUrl} alt={college.name} />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{college.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{college.location}</p>
      <p className="mt-4 text-gray-700">{college.shortDescription}</p>
    </div>
  </Link>
);

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = useMemo(() => {
    if (!searchTerm) {
      return COLLEGES;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return COLLEGES.filter(college =>
      college.name.toLowerCase().includes(lowercasedTerm) ||
      college.location.toLowerCase().includes(lowercasedTerm) ||
      college.courses.some(course => course.name.toLowerCase().includes(lowercasedTerm))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Search for Colleges</h1>
        <p className="mt-2 text-lg text-gray-600">Discover your future alma mater.</p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by college name, location, or course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      {filteredColleges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-gray-500">No colleges found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
