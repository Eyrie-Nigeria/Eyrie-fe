'use client';

import { Gear, SignOut, User } from 'phosphor-react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';

interface BottomSectionProps {
  showExpanded: boolean;
}

export function BottomSection({ showExpanded }: BottomSectionProps) {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const handleSettings = () => {
    router.push('/settings');
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  if (showExpanded) {
    return (
      <div className="border-t border-slate-700 flex-shrink-0">
        <div className="p-3 space-y-2">
          {/* Settings */}
          <button
            onClick={handleSettings}
            className="flex items-center w-full p-2.5 text-left hover:bg-slate-700 rounded-lg transition-colors group"
          >
            <Gear size={18} className="text-gray-400 group-hover:text-white mr-3 flex-shrink-0" />
            <span className="text-sm text-gray-300 group-hover:text-white">Settings</span>
          </button>

          {/* Profile (if logged in) */}
          {isLoggedIn && (
            <button
              onClick={handleProfile}
              className="flex items-center w-full p-2.5 text-left hover:bg-slate-700 rounded-lg transition-colors group"
            >
              <User size={18} className="text-gray-400 group-hover:text-white mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-300 group-hover:text-white">Profile</span>
            </button>
          )}

          {/* Logout Separator and Button */}
          <div className="pt-2 border-t border-slate-600">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-2.5 text-left hover:bg-red-600/20 rounded-lg transition-colors group"
            >
              <SignOut
                size={18}
                className="text-gray-400 group-hover:text-red-400 mr-3 flex-shrink-0"
              />
              <span className="text-sm text-gray-300 group-hover:text-red-400">
                {isLoggedIn ? 'Sign Out' : 'Sign In'}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-slate-700 flex-shrink-0">
      <div className="p-2 space-y-1">
        <button
          onClick={handleSettings}
          className="w-full p-2 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Settings"
        >
          <Gear size={20} className="text-gray-400" />
        </button>
        {isLoggedIn && (
          <button
            onClick={handleProfile}
            className="w-full p-2 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Profile"
          >
            <User size={20} className="text-gray-400" />
          </button>
        )}
        <div className="border-t border-slate-600 pt-1">
          <button
            onClick={handleLogout}
            className="w-full p-2 hover:bg-red-600/20 rounded-lg transition-colors flex items-center justify-center"
            aria-label={isLoggedIn ? 'Sign Out' : 'Sign In'}
          >
            <SignOut size={20} className="text-gray-400 hover:text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
