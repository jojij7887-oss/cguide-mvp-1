import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { User, Application } from './types';
import { DUMMY_USER, COLLEGES } from './constants';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import SearchPage from './pages/SearchPage';
import CollegeProfilePage from './pages/CollegeProfilePage';
import AdmissionFormPage from './pages/AdmissionFormPage';
import ConfirmationPage from './pages/ConfirmationPage';
import TravelBookingPage from './pages/TravelBookingPage';
import LoanInfoPage from './pages/LoanInfoPage';
import ProfilePage from './pages/ProfilePage';
import AdsPage from './pages/AdsPage';
import FavoritesPage from './pages/FavoritesPage';
import AdmissionStatusPage from './pages/AdmissionStatusPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user) return;

    const interval = setInterval(() => {
      let userChanged = false;
      const updatedUser: User = JSON.parse(JSON.stringify(user));

      // Simulate application status changes
      updatedUser.applications.forEach(app => {
        let newStatus: Application['status'] | null = null;
        if (app.status === 'Submitted' && Math.random() < 0.2) {
            newStatus = 'Under Review';
        } else if (app.status === 'Under Review' && Math.random() < 0.15) {
            newStatus = Math.random() > 0.4 ? 'Accepted' : 'Rejected';
        }

        if (newStatus) {
            app.status = newStatus;
            userChanged = true;
            updatedUser.notifications.unshift({
                id: `notif-${Date.now()}`,
                message: `Your application for ${app.collegeName} is now ${newStatus}.`,
                read: false,
                link: '/status',
            });
        }
      });
      
      if (userChanged) {
        handleProfileUpdate(updatedUser);
      }
    }, 5000); // Check for updates every 5 seconds

    return () => clearInterval(interval);
  }, [user]);

  const handleLogin = () => {
    const storedUserJSON = localStorage.getItem('c-guide-user');
    if (storedUserJSON) {
      setUser(JSON.parse(storedUserJSON));
    } else {
      localStorage.setItem('c-guide-user', JSON.stringify(DUMMY_USER));
      setUser(DUMMY_USER);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleProfileUpdate = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('c-guide-user', JSON.stringify(updatedUser));
  };

  const toggleFavoriteCollege = (collegeId: string) => {
      if (!user) return;
      const isFavorite = user.favoriteCollegeIds.includes(collegeId);
      const updatedFavorites = isFavorite
        ? user.favoriteCollegeIds.filter(id => id !== collegeId)
        : [...user.favoriteCollegeIds, collegeId];
      handleProfileUpdate({ ...user, favoriteCollegeIds: updatedFavorites });
  };
  
  const addApplication = (collegeId: string, course: string) => {
      if (!user) return;
      const college = COLLEGES.find(c => c.id === collegeId);
      if (!college) return;
      
      const newApplication: Application = {
          id: `app-${Date.now()}`,
          collegeId,
          collegeName: college.name,
          course,
          status: 'Submitted',
          submittedDate: new Date().toISOString(),
      };
      
      const updatedUser = {
          ...user,
          applications: [...user.applications, newApplication],
          notifications: [
              {
                  id: `notif-${Date.now()}`,
                  message: `You have successfully applied to ${college.name}.`,
                  read: false,
                  link: '/status'
              },
              ...user.notifications
          ]
      };
      handleProfileUpdate(updatedUser);
  };
  
  const markNotificationsAsRead = () => {
      if (!user) return;
      const updatedNotifications = user.notifications.map(n => ({...n, read: true}));
      handleProfileUpdate({ ...user, notifications: updatedNotifications });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HashRouter>
        {user ? (
          <>
            <Header user={user} onLogout={handleLogout} onMarkNotificationsAsRead={markNotificationsAsRead} />
            <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/college/:id" element={<CollegeProfilePage user={user} onToggleFavorite={toggleFavoriteCollege} />} />
                <Route path="/apply/:collegeId" element={<AdmissionFormPage user={user} onAddApplication={addApplication} />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/travel" element={<TravelBookingPage />} />
                <Route path="/loans" element={<LoanInfoPage />} />
                <Route path="/profile" element={<ProfilePage user={user} onUpdateProfile={handleProfileUpdate} />} />
                <Route path="/ads" element={<AdsPage />} />
                <Route path="/favorites" element={<FavoritesPage user={user} />} />
                <Route path="/status" element={<AdmissionStatusPage user={user} />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </main>
            <Footer />
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </HashRouter>
    </div>
  );
};

export default App;