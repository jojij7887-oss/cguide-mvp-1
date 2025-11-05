import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { COLLEGES } from '../constants';
import { User } from '../types';

interface AdmissionFormPageProps {
  user: User;
  onAddApplication: (collegeId: string, course: string) => void;
}

const AdmissionFormPage: React.FC<AdmissionFormPageProps> = ({ user, onAddApplication }) => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const navigate = useNavigate();
  const college = COLLEGES.find(c => c.id === collegeId);
  const [file, setFile] = useState<File | null>(null);
  const [selectedCourse, setSelectedCourse] = useState('');

  if (!college) {
    return <div className="text-center text-red-500">College not found.</div>;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (collegeId && selectedCourse) {
        onAddApplication(collegeId, selectedCourse);
        const admissionId = `CGUIDE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        navigate('/confirmation', { state: { admissionId } });
    } else {
        alert("Please select a course.");
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">Admission Form</h1>
      <p className="mt-1 text-lg text-gray-600">For <span className="font-semibold text-indigo-600">{college.name}</span></p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" id="name" defaultValue={user.name} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" defaultValue={user.email} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input type="tel" id="contact" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Preferred Course</label>
            <select 
                id="course" 
                required 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Select a course</option>
              {college.courses.map(c => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Documents (PDF/JPG)</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.jpg,.jpeg,.png" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
              {file && <p className="text-sm text-green-600 mt-2">{file.name}</p>}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
            <button type="button" className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300">
                Pay Admission Fee (Dummy)
            </button>
            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                Submit Application
            </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionFormPage;