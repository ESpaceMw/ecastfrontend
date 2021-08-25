import { Transition } from "@headlessui/react";

import { useState, useRef, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import { DotsHorizontal} from "heroicons-react"

import MusicalNote from '../../icons/musical-note.png'

import Love from '../../icons/like.png'

import Chat from '../../icons/chat.png'

import moment from "moment";

import { TrashIcon } from "@heroicons/react/outline";

import Skeleton from "react-loading-skeleton";

const SerieModal  = ({serieId, title, published, description, seriesPublishedDate, seasons, subscription, seriesCoverArt}) => {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const trigger = useRef(null);

  const dropdownTrigger = useRef(null);

  const dropdown = useRef(null);

  const searchContent = useRef(null);

  const [serieDropdownOpen, setSerieDropdownOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

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

  const history = useHistory()

  const deleteSerie = () => {
    fetch('http://127.0.0.1:8000/api/v1/podcasts/series/delete',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ id: serieId })
            }).then(response => {
                return response.json()
            }).then(data => {
                setIsLoading(false)
                history.push('/dashboard/overview')
        }).catch((error) => {
            console.log(error)
        })
  }

  return (
    <div>
      <Link
        ref={trigger}
        to="#" 
        onClick={() => { setSearchOpen(!searchOpen) }}
        className="flex justify-between p-3 border-b dark:border-gray-700 dark:hover:bg-gray-800 border-gray-200 hover:bg-gray-100 transition duration-150">
            <div>
                <h3 className="text-md dark:text-gray-200">{title}</h3>
                <p className="text-sm mt-2 dark:text-gray-300 text-gray-500">
                  Began [{moment(published).format("DD-MM-YYYY h:mm:ss")}]
                </p>
            </div>
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
        <div className="bg-white dark:bg-gray-900 dark:text-gray-300 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg" ref={searchContent}>
          {!isLoading ? (
            <div className="p-3">
            <div className="flex justify-between">
              <div className="flex">
                <img src={"http://127.0.0.1:8000/storage/series/"+seriesCoverArt}className="w-32 h-32 border rounded-sm dark:border-gray-700 border-gray-200 object-cover" alt="serie-cover-art"/>
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">
                    {title}
                  </h3>
                  <h2 className="font-medium text-gray-500 dark:text-gray-300 text-md">
                    Seasons {seasons}
                  </h2>
                  <p>
                    {subscription} content
                  </p>
                  <p>
                    Published [{moment(seriesPublishedDate).format("DD-MM-YYYY h:mm:ss")}]
                  </p>
                  <div className="w-full flex justify-around">
                    <div className="flex mt-2 mr-2">
                      <img src={MusicalNote} className="w-4 h-4 mr-2 mt-1" alt="music-note"/>
                      <p className="">22043 Listens</p>
                    </div>
                    <div className="flex mt-2 mr-2">
                      <img src={Love} className="w-4 h-4 mr-2 mt-1" alt="music-note"/>
                      <p className="">22043 Likes</p>
                    </div>
                    <div className="flex mt-2 mr-2">
                      <img src={Chat} className="w-4 h-4 mr-2 mt-1" alt="music-note"/>
                      <p className="">22043 Comments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link to="#" onClick={() => setSerieDropdownOpen(!serieDropdownOpen)}
                    aria-expanded={serieDropdownOpen} ref={dropdownTrigger} className="px-2 rounded-sm w-8 h-8">
                    <DotsHorizontal className="h-4 w-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"/>
                    <Transition
                    className="z-10 absolute right-14 min-w-44 py-1.5 rounded-sm shadow-lg overflow-hidden"
                    show={serieDropdownOpen}
                >
                    <div
                    ref={dropdown}
                    onFocus={() => setSerieDropdownOpen(true)}
                    onBlur={() => setSerieDropdownOpen(false)}
                    >
                    <ul>
                        <li>
                        <Link
                            className="font-medium text-sm dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-50 flex items-center py-1 px-3"
                            to="#"
                            onClick={() => {
                              setSerieDropdownOpen(!serieDropdownOpen)
                              setIsLoading(true)
                              deleteSerie()
                            }}
                        >
                            <TrashIcon className="text-gray-600 dark:text-gray-300 w-5 h-5"/> Delete
                        </Link>
                        </li>
                    </ul>
                    </div>
                </Transition>
                </Link>
              </div>
            </div>
            <div className="justify-center">
              <p className="text-sm mb-2 mt-2">
                {description}
              </p>
              
            </div>
            <div className="text-center text-blue-500">
              <Link to="#">Check Out All Episodes in this Series</Link>
            </div>
          </div>
          ) : (
            <div className="p-3">
            <div className="flex justify-between">
              <div className="flex">
                <Skeleton height={100} width={100}/>
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">
                    <Skeleton height={20} width={100}/>
                  </h3>
                  <h2 className="font-medium text-gray-500 dark:text-gray-300 text-md">
                    <Skeleton height={20} width={100}/>
                  </h2>
                  <p>
                    <Skeleton height={20} width={100}/>
                  </p>
                  <p>
                    <Skeleton height={20} width={100}/>
                  </p>
                  <div className="w-full flex justify-around">
                    <div className="flex mt-2 mr-2">
                      <Skeleton height={20} width={40} className="mr-2"/>
                      <Skeleton height={20} width={100}/>
                    </div>
                    <div className="flex mt-2 mr-2">
                      <Skeleton height={20} width={40} className="mr-2"/>
                      <Skeleton height={20} width={100}/>
                    </div>
                    <div className="flex mt-2 mr-2">
                      <Skeleton height={20} width={40} className="mr-2"/>
                      <Skeleton height={20} width={100}/>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Skeleton height={20} width={20}/>
              </div>
            </div>
            <div className="justify-center">
              <p className="text-sm mb-2 mt-2 w-full">
                <Skeleton height={50}/>
              </p>
              
            </div>
            <div className="text-center text-blue-500">
              <Skeleton height={20} width={300}/>
            </div>
          </div>
          )}
        </div>
      </Transition>
    </div>
  )
}

export default SerieModal