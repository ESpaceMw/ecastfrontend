import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DotsHorizontal} from "heroicons-react"
import ReactAudioPlayer from 'react-audio-player';
import MusicalNote from '../../icons/musical-note.png'
import moment from 'moment'
import Audio from "react-loading-icons/dist/components/audio";

const EpidoseModal  = ({
  name, title, published, time, 
  description, audio_file, seriesCoverArt, 
  seriesEpisode, seriesName, seriesPublishedDate, listens}) => {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const trigger = useRef(null);

  const searchContent = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false)

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
      className="flex justify-between dark:hover:bg-gray-800 hover:bg-gray-100 transition duration-150 border-b border-gray-200 dark:border-gray-700 p-3">
        <div className="flex">
            <p className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 p-1 h-8 text-center">
                {name}
            </p>
            <div className="ml-3">
                <h3 className="text-gray-900 text-md dark:text-gray-300">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">Published on {new Date(published).toDateString()}</p>
            </div>
        </div>
        <p className="text-sm dark:text-gray-300">
            {moment.utc(time).local().fromNow()}
        </p>
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
        <div className="bg-white dark:bg-gray-900 overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg" ref={searchContent}>
          <div className="p-3">
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  {isPlaying ? <Audio className="bg-blue-400 dark:bg-transparent p-2 h-32 w-32"/> : <img src={"http://127.0.0.1:8000/storage/podcasts/"+seriesCoverArt} className="w-32 h-32 border rounded-sm border-gray-200 dark:border-gray-700" alt="serie-cover-art"/>}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-lg dark:text-gray-300">
                    {seriesName} 
                  </h3>
                  <h2 className="font-medium text-gray-500 dark:text-gray-300 text-md">
                    {seriesEpisode}
                  </h2>
                  <p className="dark:text-gray-300">
                    Published [{moment(seriesPublishedDate).format("DD-MM-YYYY h:mm:ss")}]
                  </p>
                  <div className="w-full">
                    <div className="flex mt-2 mr-2">
                      <img src={MusicalNote} className="w-4 h-4 mr-2 mt-1" alt="music-note"/>
                      <p className="dark:text-gray-300">{listens} Listens</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                  <DotsHorizontal className="h-4 w-4 text-gray-300"/>
                </button>
              </div>
            </div>
            <div className="justify-center">
              <p className="text-sm mb-2 mt-2 dark:text-gray-300">
                {description}
              </p>
              
            </div>
            <div className="text-center">
              <ReactAudioPlayer
                src={"http://127.0.0.1:8000/storage/podcasts/"+audio_file}
                autoPlay={false}
                controls
                onPlay={() => {setIsPlaying(true)}}
                onPause={() => {setIsPlaying(false)}}
                className="dark:bg-gray-900 text-blue-400"
                style={{ width: '100%', color: 'blue' }}
              />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default EpidoseModal