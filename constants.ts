import { College, LoanProvider } from './types';

export const COLLEGES: College[] = [
  {
    id: 'uni-1',
    name: 'Apex University of Technology',
    location: 'Silicon Valley, USA',
    photoUrl: 'https://picsum.photos/seed/uni1/800/400',
    logoUrl: 'https://picsum.photos/seed/logo1/200/200',
    shortDescription: 'A leading institution for innovation and technology.',
    description: 'Apex University of Technology is a world-renowned institution dedicated to advancing knowledge and educating students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century.',
    admissionOpenDate: '2024-08-01',
    admissionCloseDate: '2025-03-31',
    courses: [
      { id: 'c1-1', name: 'Computer Science', duration: '4 Years', fees: '$50,000/year', description: 'Explore the depths of algorithms, data structures, and artificial intelligence.' },
      { id: 'c1-2', name: 'Electrical Engineering', duration: '4 Years', fees: '$48,000/year', description: 'Design and build the electronic systems of the future.' },
      { id: 'c1-3', name: 'Data Science', duration: '2 Years (Masters)', fees: '$55,000/year', description: 'Unlock insights from massive datasets.' },
    ],
    events: [
      { id: 'e1-1', title: 'Tech Fest 2024', imageUrl: 'https://picsum.photos/seed/event1/400/300' },
      { id: 'e1-2', title: 'Annual Sports Meet', imageUrl: 'https://picsum.photos/seed/event2/400/300' },
      { id: 'e1-3', title: 'Convocation Ceremony', imageUrl: 'https://picsum.photos/seed/event3/400/300' },
    ],
  },
  {
    id: 'uni-2',
    name: 'Veridian College of Arts',
    location: 'Greenwood City, USA',
    photoUrl: 'https://picsum.photos/seed/uni2/800/400',
    logoUrl: 'https://picsum.photos/seed/logo2/200/200',
    shortDescription: 'Where creativity and passion come to life.',
    description: 'Veridian College of Arts provides a vibrant and inspiring environment for students to pursue their artistic passions. Our faculty are practicing artists and scholars who are committed to helping students develop their unique creative voices.',
    admissionOpenDate: '2024-09-01',
    admissionCloseDate: '2025-05-15',
    courses: [
      { id: 'c2-1', name: 'Fine Arts', duration: '3 Years', fees: '$35,000/year', description: 'Master painting, sculpture, and other traditional media.' },
      { id: 'c2-2', name: 'Graphic Design', duration: '3 Years', fees: '$38,000/year', description: 'Learn the principles of visual communication and digital design.' },
      { id: 'c2-3', name: 'Performing Arts', duration: '4 Years', fees: '$40,000/year', description: 'Train in theatre, dance, and music performance.' },
    ],
    events: [
        { id: 'e2-1', title: 'Annual Art Exhibition', imageUrl: 'https://picsum.photos/seed/event4/400/300' },
        { id: 'e2-2', title: 'Spring Musical', imageUrl: 'https://picsum.photos/seed/event5/400/300' },
    ],
  },
  {
    id: 'uni-3',
    name: 'Sterling Business School',
    location: 'Metropolis, USA',
    photoUrl: 'https://picsum.photos/seed/uni3/800/400',
    logoUrl: 'https://picsum.photos/seed/logo3/200/200',
    shortDescription: 'Shaping the next generation of business leaders.',
    description: 'Sterling Business School offers a rigorous and comprehensive curriculum designed to prepare students for the challenges of the global business environment. Our programs emphasize leadership, ethics, and innovation.',
    admissionOpenDate: '2024-07-15',
    admissionCloseDate: '2025-02-28',
    courses: [
      { id: 'c3-1', name: 'MBA', duration: '2 Years', fees: '$70,000/year', description: 'A comprehensive program for aspiring business leaders.' },
      { id: 'c3-2', name: 'Finance', duration: '4 Years', fees: '$52,000/year', description: 'Specialize in corporate finance, investments, and financial markets.' },
      { id: 'c3-3', name: 'Marketing', duration: '4 Years', fees: '$51,000/year', description: 'Understand consumer behavior and modern marketing strategies.' },
    ],
    events: [
        { id: 'e3-1', title: 'Global Leadership Summit', imageUrl: 'https://picsum.photos/seed/event6/400/300' },
        { id: 'e3-2', title: 'Startup Pitch Competition', imageUrl: 'https://picsum.photos/seed/event7/400/300' },
    ],
  },
];

export const LOAN_PROVIDERS: LoanProvider[] = [
    {
        id: 'loan-1',
        name: 'EduFinance Inc.',
        interestRate: '4.5% - 8.2%',
        terms: 'Flexible repayment options, 5-15 year terms, no prepayment penalty.',
        logoUrl: 'https://picsum.photos/seed/loan1/100/100',
        applyLink: '#',
    },
    {
        id: 'loan-2',
        name: 'StudentLoan Connect',
        interestRate: '5.1% - 9.5%',
        terms: 'Cosigner release available, interest rate reduction for autopay.',
        logoUrl: 'https://picsum.photos/seed/loan2/100/100',
        applyLink: '#',
    },
    {
        id: 'loan-3',
        name: 'Future Scholar Bank',
        interestRate: '4.8% Fixed',
        terms: 'Fixed interest rates, multiple deferment options available.',
        logoUrl: 'https://picsum.photos/seed/loan3/100/100',
        applyLink: '#',
    },
];

export const DUMMY_USER = {
    id: 'student-001',
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    role: 'STUDENT' as const,
    profilePhotoUrl: 'https://i.pravatar.cc/150?u=student-001',
    favoriteCollegeIds: [],
    applications: [],
    notifications: [],
};