
import React, { useState } from 'react';

type TravelMode = 'Bus' | 'Train' | 'Car';

const TravelBookingPage: React.FC = () => {
  const [mode, setMode] = useState<TravelMode>('Bus');

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking for ${mode} confirmed! (This is a dummy flow)`);
  };

  const renderForm = () => (
    <form onSubmit={handleBook} className="mt-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
          <input type="text" id="from" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., New York" />
        </div>
        <div>
          <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
          <input type="text" id="to" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g., Boston" />
        </div>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date of Journey</label>
        <input type="date" id="date" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      <div className="pt-4">
        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
          Search & Book
        </button>
      </div>
    </form>
  );

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">Travel Booking</h1>
      <p className="mt-1 text-gray-600">Plan your trip to your new college.</p>

      <div className="mt-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {(['Bus', 'Train', 'Car'] as TravelMode[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                mode === tab
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      {renderForm()}
    </div>
  );
};

export default TravelBookingPage;
