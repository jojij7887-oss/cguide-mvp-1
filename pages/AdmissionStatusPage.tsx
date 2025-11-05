import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { CheckCircleIcon, ClockIcon, XCircleIcon } from '../components/icons';

interface AdmissionStatusPageProps {
    user: User;
}

const statusInfo = {
    Submitted: {
        icon: <ClockIcon className="h-6 w-6 text-blue-500" />,
        color: 'bg-blue-100 text-blue-800',
    },
    'Under Review': {
        icon: <ClockIcon className="h-6 w-6 text-yellow-500" />,
        color: 'bg-yellow-100 text-yellow-800',
    },
    Accepted: {
        icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
        color: 'bg-green-100 text-green-800',
    },
    Rejected: {
        icon: <XCircleIcon className="h-6 w-6 text-red-500" />,
        color: 'bg-red-100 text-red-800',
    },
};

const AdmissionStatusPage: React.FC<AdmissionStatusPageProps> = ({ user }) => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Admission Status</h1>
                <p className="mt-2 text-lg text-gray-600">Track your college applications here.</p>
            </div>
            
            {user.applications.length > 0 ? (
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                        {user.applications.map(app => (
                            <li key={app.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex-grow mb-4 sm:mb-0">
                                    <Link to={`/college/${app.collegeId}`} className="text-xl font-bold text-indigo-700 hover:underline">{app.collegeName}</Link>
                                    <p className="text-gray-600">Course: {app.course}</p>
                                    <p className="text-sm text-gray-500 mt-1">Submitted on: {new Date(app.submittedDate).toLocaleDateString()}</p>
                                </div>
                                <div className="flex items-center space-x-3 w-full sm:w-auto">
                                    {statusInfo[app.status].icon}
                                    <span className={`w-full sm:w-auto text-center px-3 py-1 inline-flex text-sm font-semibold rounded-full ${statusInfo[app.status].color}`}>
                                        {app.status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                    <p className="text-xl text-gray-500">You haven't submitted any applications yet.</p>
                     <Link to="/search" className="mt-6 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                        Find a College to Apply
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AdmissionStatusPage;