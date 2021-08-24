import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../media/logo.png'
import { DotsHorizontal} from "heroicons-react"
import MusicalNote from '../../icons/musical-note.png'
import Love from '../../icons/like.png'
import Chat from '../../icons/chat.png'
import moment from "moment";

const SerieModal  = ({title, published}) => {

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
            <button className="p-1 rounded-sm h-6 w-6 dark:text-gray-400">
                <DotsHorizontal className="h-4 w-4"/>
            </button>
        </Link>
      {/* Modal backdrop */}
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
      {/* Modal dialog */}
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
          <div className="p-3">
            <div className="flex justify-between">
              <div className="flex">
                <img src={Logo} className="w-32 h-32 border rounded-sm dark:border-gray-700 border-gray-200" alt="serie-cover-art"/>
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">
                    Impact Goals 
                  </h3>
                  <h2 className="font-medium text-gray-500 dark:text-gray-300 text-md">
                    Season 1
                  </h2>
                  <p>
                    Premium Content
                  </p>
                  <p>
                    Premiered [5/4/2021]
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
                <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                  <DotsHorizontal className="h-4 w-4"/>
                </button>
              </div>
            </div>
            <div className="justify-center">
              <p className="text-sm mb-2 mt-2">
                Impact Goals is an amazing series premiered on 12 - 04 - 21 by the renowned
                Entrepreneur, Speaker, Gospel Minister and Philaphropist, Nhlanhla Dhaka who 
                is also the author of this Podcast. The goal of this series to equip all visionaries 
                and architects with spectacular knowledge on coming up with not only big 
                goals, but great goals full of impact. So, buy yourself this great content, and 
                have you and yourself on the path of leaving behind a great legacy.
              </p>
              
            </div>
            <div className="text-center text-blue-500">
              <Link to="#">Check Out All Episodes in this Series</Link>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default SerieModal