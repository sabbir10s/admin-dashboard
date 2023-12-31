import React, { useState } from 'react';

const TabOne = () => {
  const [isActive, setIsActive] = useState('settings');
  return (
    <nav aria-label="Tabs">
      <ul className="flex border-b border-gray-100">
        <li
          className={`flex-1 ${
            isActive === 'settings'
              ? 'text-primary-600'
              : 'text-gray-900 dark:text-gray-200'
          }`}
        >
          <a
            onClick={() => setIsActive('settings')}
            className="relative block p-4"
            href="#settings"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full ${
                isActive === 'settings' ? 'bg-primary-600' : 'bg-transparent'
              }`}
            ></span>

            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>

              <span className="hidden md:block text-sm font-medium">
                {' '}
                Settings{' '}
              </span>
            </div>
          </a>
        </li>

        <li
          className={`flex-1 ${
            isActive === 'messages'
              ? 'text-primary-600'
              : 'text-gray-900 dark:text-gray-200'
          }`}
        >
          <a
            onClick={() => setIsActive('messages')}
            className="relative block p-4"
            href="#messages"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full ${
                isActive === 'messages' ? 'bg-primary-600' : 'bg-transparent'
              }`}
            ></span>
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>

              <span className="hidden md:block text-sm font-medium">
                Messages
              </span>
            </div>
          </a>
        </li>

        <li
          className={`flex-1 ${
            isActive === 'archive'
              ? 'text-primary-600'
              : 'text-gray-900 dark:text-gray-200'
          }`}
        >
          <a
            onClick={() => setIsActive('archive')}
            className="relative block p-4"
            href="#archive"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full ${
                isActive === 'archive' ? 'bg-primary-600' : 'bg-transparent'
              }`}
            ></span>
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>

              <span className="hidden md:block text-sm font-medium">
                {' '}
                Archive{' '}
              </span>
            </div>
          </a>
        </li>

        <li
          className={`flex-1 ${
            isActive === 'notifications'
              ? 'text-primary-600'
              : 'text-gray-900 dark:text-gray-200'
          }`}
        >
          <a
            onClick={() => setIsActive('notifications')}
            className="relative block p-4"
            href="#notifications"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full ${
                isActive === 'notifications'
                  ? 'bg-primary-600'
                  : 'bg-transparent'
              }`}
            ></span>
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span className="hidden md:block text-sm font-medium ">
                {' '}
                Notifications{' '}
              </span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TabOne;
