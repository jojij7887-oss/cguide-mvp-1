import React, { useState, useRef } from 'react';
import { User } from '../types';

interface ProfilePageProps {
    user: User;
    onUpdateProfile: (user: User) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUpdateProfile }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [photoUrl, setPhotoUrl] = useState(user.profilePhotoUrl);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateProfile({
            ...user,
            name,
            email,
            profilePhotoUrl: photoUrl,
        });
        alert('Profile updated successfully!');
    };
    
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
      <p className="mt-1 text-gray-600">Update your personal information.</p>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="flex items-center space-x-6">
            <img 
                src={photoUrl || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover"
            />
            <div>
                <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                    Change Photo
                </button>
                <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handlePhotoChange}
                    accept="image/*"
                    className="hidden"
                />
                <p className="text-sm text-gray-500 mt-2">JPG, PNG, or GIF. 1MB max.</p>
            </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
         <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password (optional)</label>
          <input type="password" id="password" placeholder="Leave blank to keep current password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <input type="text" id="role" value={user.role} disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500" />
        </div>
        <div className="pt-4 text-right">
            <button type="submit" className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                Save Changes
            </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;