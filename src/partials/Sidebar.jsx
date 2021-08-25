import { useEffect, useRef } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import Analytics from '../data/Analytics';

import UserPreferences from '../data/UserPreferences';

import Podcasts from '../data/Podcasts';

function Sidebar({sidebarOpen, setSidebarOpen}) {

  const location = useLocation();

  const { pathname } = location;

  const page = pathname.split('/')[1];

  const trigger = useRef(null);

  const sidebar = useRef(null);

  useEffect(() => {

    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);

  });

  useEffect(() => {

    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);

  });

  return (

    <div className="lg:w-64">

      <div className={`fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>

      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 no-scrollbar left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-4 transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
      >

        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <NavLink exact to="/dashboard/profile" className="block">
            {JSON.parse(localStorage.getItem('basic_info')).map((item) => (
               <div className="flex justify-between">
              <div className="flex">
                <img src={'http://127.0.0.1:8000/storage/profile/'+item.clip_art} className="mr-2 border-2 border-yellow-500 rounded-full w-10 h-10 object-cover object-center" alt="user-icon"/>
                <div>
                  <h3 className="text-md text-gray-900 dark:text-gray-200">{localStorage.getItem('username')}</h3>
                  <p className="text-gray-500 dark:text-gray-200 text-sm">{item.tagline}</p>
                </div>
              </div>
              </div>
              ))}
          </NavLink>
        </div>

        <div>
          <h3 className="text-md uppercase text-gray-500 dark:text-gray-200 font-semibold pl-3">preferences</h3>
          <ul className="mt-3">
            {
              UserPreferences.map((value) => (
              <li className={`px-3 py-2 hover:bg-blue-400 dark:hover:bg-gray-800 hover:text-white rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
              <NavLink key={value.MenuTitle} exact to={value.LinkTo} className={`block text-gray-500 dark:text-gray-300 dark:hover:text-white hover:text-white transition duration-150 ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <img src={value.Icon} className="w-5 h-5" alt={value.MenuTitle}/>
                  <span className="font-medium ml-4 text-md">{value.MenuTitle}</span>
                  {value.MenuTitle === 'Alerts' ? <div className="flex flex-shrink-0 ml-2">
                    <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-blue-400 px-2 rounded-sm">4</span>
                  </div> : <div></div>}
                </div>
              </NavLink>
            </li>
              ))
            }
            
          </ul>

          <h3 className="text-md uppercase text-gray-500 dark:text-gray-200 font-semibold pl-3 mt-5">Podcasts</h3>
          <ul className="mt-3">
            {
              Podcasts.map((value) => (
              <li className={`px-3 py-2 hover:bg-blue-400 dark:hover:bg-gray-800 hover:text-white rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
              <NavLink exact key={value.MenuTitle} to={value.LinkTo} className={`block dark:text-gray-300 dark:hover:text-white text-gray-500 hover:text-white transition duration-150 ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <img src={value.Icon} className="w-5 h-5" alt={value.MenuTitle}/>
                  <span className="text-md font-medium ml-4">{value.MenuTitle}</span>
                </div>
              </NavLink>
            </li>
              ))
            }
            
          </ul>

          <h3 className="text-md uppercase text-gray-500 dark:text-gray-200 font-semibold pl-3 mt-5">Analytics</h3>
          <ul className="mt-3">
            {
              Analytics.map((value) => (
              <li className={`px-3 py-2 hover:bg-blue-400 dark:hover:bg-gray-800 hover:text-white rounded-sm mb-0.5 last:mb-0 ${page === '' && 'bg-gray-900'}`}>
              <NavLink exact key={value.MenuTitle} to={value.LinkTo} className={`block dark:text-gray-300 dark:hover:text-white text-gray-500 hover:text-white transition duration-150 ${page === '' && 'hover:text-gray-200'}`}>
                <div className="flex flex-grow">
                  <img src={value.Icon} className="w-5 h-5" alt={value.MenuTitle}/>
                  <span className="text-md font-medium ml-4">{value.MenuTitle}</span>
                </div>
              </NavLink>
            </li>
              ))
            }
            
          </ul>
          
        </div>

      </div>
    </div>
  );
}

export default Sidebar