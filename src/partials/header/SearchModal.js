import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar.js';
import Transition from '../../utils/Transition.js';
import { useLastLocation } from 'react-router-last-location';
import { loadavg } from 'os';

function SearchModal() {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const trigger = useRef(null);

  const searchContent = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!searchOpen || searchContent.current.contains(target) || trigger.current.contains(target)) return;
      setSearchOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!searchOpen || keyCode !== 27) return;
      setSearchOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const lastLocation = useLastLocation()

  return (
    <div>
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 transition duration-150 rounded-full ml-3 ${searchOpen && 'bg-gray-200'}`}
        onClick={() => { setSearchOpen(!searchOpen) }}
        aria-controls="search-modal"
      >
        <span className="sr-only">Search</span>
        <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-gray-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
          <path className="fill-current text-gray-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
        </svg>
      </button>
      
      <Transition
        className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
        show={searchOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      
      <Transition
        id="search-modal"
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={searchOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div className="bg-white dark:bg-gray-900 dark:text-gray-200 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg" ref={searchContent}>
          
          <form className="border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <SearchBar placeholder="Search for podcasts..."/>
            </div>
          </form>
          <div className="py-4 px-2" onFocus={() => setSearchOpen(true)} onBlur={() => setSearchOpen(false)}>
            
            <div className="mb-3 last:mb-0">
              <div className="text-xs font-semibold text-gray-400 uppercase px-2 mb-2">Recent places</div>
              <ul className="text-sm">
                <li>
                  <Link
                    className="flex items-center p-2 text-gray-800 hover:text-white hover:bg-blue-400 dark:hover:bg-gray-800 transition duration-150 rounded group"
                    to={lastLocation === null ? '#' : lastLocation["pathname"]}
                    onClick={() => setSearchOpen(!searchOpen)}
                  >
                    <svg className="w-4 h-4 fill-current text-gray-400 group-hover:text-white group-hover:text-opacity-50 flex-shrink-0 mr-3" viewBox="0 0 16 16">
                      <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                    </svg>
                    <span className="dark:text-gray-300">{lastLocation === null ? '#' : lastLocation["pathname"]}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default SearchModal;