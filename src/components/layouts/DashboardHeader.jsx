import SearchModal from '../../partials/header/SearchModal';
import Notifications from '../../partials/header/Notifications';
import UserMenu from '../../partials/header/UserMenu';
import { Moon } from 'heroicons-react';

function Header({
  sidebarOpen,
  setSidebarOpen
}) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
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

            <button className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ">
              <Moon className="text-gray-500"/>
            </button>
            
            <SearchModal />

            <Notifications />

            {/* <Help /> */}

            <hr className="w-px h-6 bg-gray-200 mx-3" />
            
            <UserMenu />

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;