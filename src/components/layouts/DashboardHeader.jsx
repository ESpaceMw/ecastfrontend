import SearchModal from '../../partials/header/SearchModal';

import Notifications from '../../partials/header/Notifications';

import UserMenu from '../../partials/header/UserMenu';

import { 
  Moon, 
  Sun 
} from 'heroicons-react';

import { useContext } from 'react'

import { ThemeContext } from '../../context/themeContext'

function Header({sidebarOpen,setSidebarOpen}) {

  const { theme, setTheme } = useContext(ThemeContext)

    function isDark() {
        return theme === 'dark'
    }

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 border-b dark:border-gray-700 border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">

          <div className="flex">

            <button
              className="text-gray-500 hover:text-gray-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

          </div>

          <div className="flex items-center">

            <button 
            onClick={() => { isDark() ? setTheme('light') : setTheme('dark')}}
            className="w-8 h-8 focus:ring-none outline-none flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 transition duration-150 rounded-full ">
              { isDark() ?  <Sun className="text-yellow-500"/> 
                :  <Moon className="text-gray-500"/> }
             </button>
            
            <SearchModal />

            <Notifications />

            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-3" />
            
            <UserMenu />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;