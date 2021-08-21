import { Transition } from "@headlessui/react"
import { DotsHorizontal, PencilAlt, Plus, ViewList} from "heroicons-react"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import SerieModal from "../../../components/episodes/SerieModal"
import DashboardMain from "../../../components/layouts/DashboardMain"
import EpisodeModal from '.././../../components/episodes/EpisodeModal.jsx'

const episodes_ = [
    {
        name: 'S02E02',
        title: 'The God of the Hills and Valleys',
        published: 'Published 2 days ago',
        time: '12:00 PM'
    },
    {
        name: 'S02E03',
        title: 'The Innovation Gap',
        published: 'Published 3 days ago',
        time: '09:11 AM'
    }
    ,
    {
        name: 'S02E04',
        title: 'Technology and the African Mind',
        published: 'Published a week ago',
        time: '11:01 AM'
    }
]

const series = [

    {
        title: 'Impact Goals [Season 1]',
        time: 'Began 12 / 01 / 2021'
    },
    {
        title: 'The Underdog',
        time: 'Began 12 / 01 / 2021'
    },
    {
        title: 'The Millennial Architecture ',
        time: 'Began 12 / 01 / 2021'
    },
]

const Episodes = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);

    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div className="w-full h-full">
                    
                    <div className="sm:flex">
                        <div className="sm:w-3/5 mr-3 dark:bg-gray-900 bg-white shadow-sm rounded-sm hover:shadow-md">
                            <div className="p-3 flex justify-between">
                                <h3 className="text-md font-medium dark:text-gray-200">All Episodes</h3>
                                <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                    <DotsHorizontal className="h-4 w-4 dark:text-gray-400"/>
                                </button>
                            </div>

                            <div className="p-3">
                                {
                                    episodes_.map((value) => (
                                        <EpisodeModal 
                                        name={value.name} 
                                        title={value.title} 
                                        published={value.published} 
                                        time={value.time}/>
                                    ))
                                }
                            </div>
                            <Link to="/dashboard/new-episode" className="bg-gray-400 dark:bg-gray-700 hover:bg-gray-600 transition duration-150 rounded-full p-3 bottom-0 fixed right-0 mb-10 mr-10 sm:mr-20">
                                <Plus className="text-white"/>
                            </Link>
                        </div>
                        <div className="sm:w-2/5 sm:mt-0 mt-5 mr-3 dark:bg-gray-900 bg-white shadow-sm hover:shadow-md">
                            <div className="bg-white dark:bg-gray-900">
                            <div className="p-3 flex justify-between">
                                <h3 className="text-md font-medium dark:text-gray-200">Series</h3>
                                <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                    <DotsHorizontal className="h-4 w-4 dark:text-gray-400"/>
                                </button>
                            
                            </div>

                            <div className="p-3">
                                {series.map((value) => (
                                <SerieModal title={value.title} published={value.time}/>
                                ))}
                            </div>
                            </div>

                            <div className="bg-blue-400 rounded-sm sm:mt-0 sm:mb-0 mb-5 mt-5 p-3">
                                <div className="flex justify-between">
                                    <h3 className="text-md font-semibold text-white">Upcoming events</h3>
                                    <Link to="#" onClick={() => setDropdownOpen(!dropdownOpen)}
                                        aria-expanded={dropdownOpen} ref={trigger} className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4 dark:text-gray-200"/>
                                        <Transition
                                        className="z-10 absolute right-14 min-w-44 bg-white py-1.5 rounded-sm shadow-lg overflow-hidden mt-1"
                                        show={dropdownOpen}
                                    >
                                        <div
                                        ref={dropdown}
                                        onFocus={() => setDropdownOpen(true)}
                                        onBlur={() => setDropdownOpen(false)}
                                        >
                                        <ul>
                                            <li>
                                            <Link
                                                className="font-medium text-sm hover:bg-gray-50 flex items-center py-1 px-3"
                                                to="#"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                            >
                                                <PencilAlt className="text-gray-600 w-5 h-5"/> Create event
                                            </Link>
                                            </li>
                                            <li>
                                            <Link
                                                className="font-medium text-sm hover:bg-gray-50 flex items-center py-1 px-3"
                                                to="/dashboard/events"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                            >
                                                <ViewList className="text-gray-600 w-5 h-5"/> View events
                                            </Link>
                                            </li>
                                        </ul>
                                        </div>
                                    </Transition>
                                    </Link>

                                    
                                </div>
                                <h3 className="mt-3 text-white text-lg">
                                    Share upcoming episodes and series to keep people expectant and notified
                                </h3>
                                <p className="text-sm text-center mt-3 text-white">
                                    Be able to share upcoming episodes and series, even events on your profile's feed so that people are kept expectant of the coming event. Be able to also make your updates reach thousands in no time! This right here is the filling of the gap podcasting has been missing... so sign up now.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Alert
                 icon={"🚀"}
                 message={"Podcast created successfully!"}
                 /> */}
            </DashboardMain>
        </div>
    )
}

export default Episodes