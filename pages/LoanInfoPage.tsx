
import React from 'react';
import { LOAN_PROVIDERS } from '../constants';
import { LoanProvider } from '../types';

const LoanProviderCard: React.FC<{ provider: LoanProvider }> = ({ provider }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <img src={provider.logoUrl} alt={`${provider.name} logo`} className="w-20 h-20 object-contain rounded-full flex-shrink-0" />
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800">{provider.name}</h3>
            <p className="text-indigo-600 font-semibold mt-1">Interest Rate: {provider.interestRate}</p>
            <p className="mt-2 text-gray-600">{provider.terms}</p>
        </div>
        <a 
            href={provider.applyLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex-shrink-0 bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-center"
        >
            Apply via Provider
        </a>
    </div>
);


const LoanInfoPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Education Loan Information</h1>
        <p className="mt-2 text-lg text-gray-600">Find the right financial partner for your studies.</p>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        {LOAN_PROVIDERS.map(provider => (
          <LoanProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default LoanInfoPage;
