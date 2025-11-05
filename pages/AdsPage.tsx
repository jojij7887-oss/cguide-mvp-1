
import React from 'react';
import { Link } from 'react-router-dom';
import { COLLEGES } from '../constants';
import { College } from '../types';


const AdCard: React.FC<{ college: College }> = ({ college }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="relative">
      <img className="h-56 w-full object-cover" src={college.photoUrl} alt={college.name} />
      <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 m-2 rounded-full text-sm">
        FEATURED
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">{college.name}</h3>
      <p className="text-sm text-gray-500 mt-1">{college.location}</p>
      <p className="mt-4 text-gray-700">Admissions are open! Explore our world-class programs in {college.courses.map(c=>c.name).slice(0,2).join(' & ')}.</p>
       <Link to={`/college/${college.id}`} className="inline-block mt-4 text-indigo-600 font-semibold hover:underline">
        Learn More &rarr;
      </Link>
    </div>
  </div>
);

const AdsPage: React.FC = () => {
  return (
     <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Colleges</h1>
        <p className="mt-2 text-lg text-gray-600">Discover special opportunities and announcements.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COLLEGES.map(college => (
          <AdCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default AdsPage;
