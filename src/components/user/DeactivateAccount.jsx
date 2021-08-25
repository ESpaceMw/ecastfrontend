import { Transition } from "@headlessui/react";

import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { ExclamationIcon } from "@heroicons/react/outline";

const SerieModal  = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const trigger = useRef(null);

  const searchContent = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if(searchContent !== null && trigger !== null){
        if (!searchOpen || searchContent.current.contains(target) || trigger.current.contains(target)) return;
        setSearchOpen(false);
      }
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
 

  return (
    <div>
      <Link
        ref={trigger}
        to="#"
        onClick={() => { setSearchOpen(!searchOpen) }}
        className="font-semibold text-red-600 hover:text-red-500">
            Deactivate
        </Link>
      
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
        <div className="bg-white dark:bg-gray-900 dark:text-gray-300 overflow-auto max-w-2xl w-full max-h-full rounded-sm shadow-lg" ref={searchContent}>
           <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-sm bg-white dark:bg-gray-900 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3  className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">
                      Deactivate account
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-300">
                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                        This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="outline-none focus:outline-none focus:ring-none w-full inline-flex justify-center rounded-sm border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700  sm:ml-3 sm:w-auto sm:text-sm"
                  
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="outline-none focus:outline-none focus:ring-none mt-3 w-full inline-flex justify-center rounded-sm border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSearchOpen(false)}
                >
                  Cancel
                </button>
              </div>
        </div>
      </Transition>
    </div>
  )
}

export default SerieModal