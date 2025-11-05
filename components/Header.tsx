import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Notification } from '../types';
import { LogoutIcon, ProfileIcon, BellIcon } from './icons';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  onMarkNotificationsAsRead: () => void;
}

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
    <Link to={notification.link || '#'} className={`block px-4 py-3 hover:bg-gray-100 ${!notification.read ? 'bg-indigo-50' : ''}`}>
        <p className="text-sm text-gray-700">{notification.message}</p>
    </Link>
)

const Header: React.FC<HeaderProps> = ({ user, onLogout, onMarkNotificationsAsRead }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const unreadCount = user?.notifications.filter(n => !n.read).length || 0;

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const toggleNotifications = () => {
      if (!showNotifications) {
          onMarkNotificationsAsRead();
      }
      setShowNotifications(!showNotifications);
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              C Guide
            </Link>
          </div>
          <div className="flex items-center">
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 hidden sm:block">Welcome, {user.name}</span>
                <div className="relative">
                    <button onClick={toggleNotifications} className="text-gray-500 hover:text-indigo-600 relative" title="Notifications">
                        <BellIcon className="h-6 w-6"/>
                        {unreadCount > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">{unreadCount}</span>
                        )}
                    </button>
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20 border">
                           <div className="py-2">
                                <p className="px-4 py-2 font-bold text-gray-800 border-b">Notifications</p>
                                {user.notifications.length > 0 ? (
                                    <div className="max-h-96 overflow-y-auto">
                                        {user.notifications.map(n => <NotificationItem key={n.id} notification={n} />)}
                                    </div>
                                ) : (
                                    <p className="px-4 py-4 text-sm text-gray-500">No new notifications.</p>
                                )}
                           </div>
                        </div>
                    )}
                </div>
                <Link to="/profile" title="My Profile">
                   {user.profilePhotoUrl ? (
                      <img src={user.profilePhotoUrl} alt="Profile" className="h-9 w-9 rounded-full object-cover border-2 border-transparent hover:border-indigo-400 transition-colors" />
                  ) : (
                      <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center border-2 border-transparent hover:border-indigo-400 transition-colors">
                          <ProfileIcon className="h-6 w-6 text-indigo-600" />
                      </div>
                  )}
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-500 hover:text-red-600 transition-colors duration-200"
                  title="Logout"
                >
                  <LogoutIcon className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;