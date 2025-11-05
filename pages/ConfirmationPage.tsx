
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
    const location = useLocation();
    const admissionId = location.state?.admissionId || 'N/A';

    const handleDownload = () => {
        alert('Downloading confirmation...');
    };

    const handleEmail = () => {
        alert('Emailing confirmation...');
    };
    
  return (
    <div className="max-w-2xl mx-auto text-center bg-white p-10 rounded-lg shadow-lg">
      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100">
        <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Application Submitted!</h1>
      <p className="mt-2 text-lg text-gray-600">Your application has been submitted successfully.</p>
      
      <div className="mt-8 bg-gray-100 p-4 rounded-md">
        <p className="text-sm text-gray-500">Your Admission ID is:</p>
        <p className="text-2xl font-mono font-semibold text-indigo-600 tracking-wider">{admissionId}</p>
        <p className="mt-2 text-sm text-gray-500">Please save this ID for future reference.</p>
      </div>
      
      <div className="mt-8 flex justify-center space-x-4">
        <button onClick={handleDownload} className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Download Confirmation
        </button>
        <button onClick={handleEmail} className="px-6 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Email Confirmation
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
