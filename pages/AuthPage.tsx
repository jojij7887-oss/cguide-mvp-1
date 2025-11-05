
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600">C Guide</h1>
          <p className="mt-2 text-gray-500">Your journey to the perfect college starts here.</p>
        </div>
        
        <div className="flex justify-center border-b">
            <button 
                onClick={() => setIsLogin(true)}
                className={`px-4 py-2 text-lg font-medium ${isLogin ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}
            >
                Login
            </button>
            <button 
                onClick={() => setIsLogin(false)}
                className={`px-4 py-2 text-lg font-medium ${!isLogin ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}
            >
                Sign Up
            </button>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
            </div>
          )}
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          {!isLogin && (
             <div>
                <label htmlFor="role" className="sr-only">Role</label>
                <select id="role" name="role" defaultValue="STUDENT" className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    <option value="STUDENT">Student</option>
                </select>
             </div>
          )}

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {isLogin ? 'Sign in' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
