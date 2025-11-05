import React from 'react';
import { Link } from 'react-router-dom';
import { User, College } from '../types';
import { COLLEGES } from '../constants';

interface FavoritesPageProps {
  user: User;
}

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

const FavoritesPage: React.FC<FavoritesPageProps> = ({ user }) => {
  const favoriteColleges = COLLEGES.filter(college => user.favoriteCollegeIds.includes(college.id));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
        <p className="mt-2 text-lg text-gray-600">Your saved colleges for quick access.</p>
      </div>

      {favoriteColleges.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteColleges.map(college => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-500">You haven't saved any colleges yet.</p>
          <p className="text-gray-400 mt-2">Click the star icon on a college's profile to add it to your favorites.</p>
          <Link to="/search" className="mt-6 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
            Start Searching
          </Link>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
