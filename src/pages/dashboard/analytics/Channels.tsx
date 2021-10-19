/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"

import DashboardMain from "../../../components/layouts/DashboardMain"

import { 
    Popover, 
    Transition
 } from "@headlessui/react"

import { 
    UserGroup,
    Microphone, 
    ArrowRight
 } from "heroicons-react"

import { 
    ChangeEvent,
    Fragment, 
    useEffect, 
    useState } from "react"

import Skeleton from "react-loading-skeleton"

import { Oval } from "react-loading-icons"

import { toast } from "react-toastify"

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Channels = () => {

    const [channels, setChannels] = useState<any[]>([])

    const [filteredData,setFilteredData] = useState(channels);

    const [name, setName] = useState('');

    const [isLoading, setIsLoading] = useState(true)

    const [onSubscribe, setOnSubscribe] = useState(false)

    toast.clearWaitingQueue()

    useEffect(() => {
        fetch('http://api.ecast.espacemw.com/api/v1/channels/get',{
            method: 'get',
            headers: {'Content-Type':'application/json'}
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setChannels(data.channels)
            setFilteredData(data.channels)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })

    }, [])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

        let value = event.target.value.toLowerCase();
        

        if (value !== '') {
        const results = channels.filter((item) => {
            return item.name.toLowerCase().startsWith(value.toLowerCase());
        });
        setFilteredData(results);
        } else {
        setFilteredData(channels);
        }

        setName(value);
    }

    const subscribeToChannel = (channelId: string) => {
        
        setOnSubscribe(true)
        

        fetch('http://127.0.0.1:8000/api/v1/subscription/subscribe',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({user_id: 1, channel_id: channelId})
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setOnSubscribe(false)
            toast.info(data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                    progress: undefined,
                    toastId: 'channels-toast'
            })
                       
        }).catch((err) => {
            setOnSubscribe(false)
            console.log(err)
        })
    }

    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <section className="text-gray-600 body-font overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md rounded-sm">
                
                <div className="container px-5 py-5 mx-auto">
                    <h3 className="text-2xl font-bold mb-5 dark:text-gray-100">
                        Subscribe to the Channels of your choice
                    </h3>
                    <div className="flex dark:border-gray-700 border px-3 py-3 mb-5">
                        <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                        </svg>
                        <input
                            id="modal-search" 
                            className="w-full dark:text-gray-300 dark:bg-transparent rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                            type="text"
                            value={name}
                            onChange={(event) =>handleSearch(event)}
                            placeholder="Search contact by first name" />
                        {name !== '' ? <Link to="#" onClick={() => {
                            setName('') 
                            setFilteredData(channels)}} className="font-semibold text-blue-400">Clear</Link> : ''}
                        </div>
                    <div className="-my-8 divide-y-2 divide-gray-100 dark:divide-gray-700">
                    
                     {!isLoading ?
                         filteredData.map((channel: {
                             subscribers: [],
                             id: string,
                             name: string,
                             description: string,
                             episodes: [],
                             cover_art: string
                         }) => (
                            <div key={channel.id} className="py-8 flex flex-wrap md:flex-nowrap">
                            <Link to="#">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mr-5">
                                    <Popover>
                                        {({ open }) => (
                                        <>
                                        
                                                
                                        <Popover.Button>
                                                <img src={'http://127.0.0.1:8000/storage/profile/'+channel.cover_art} alt="channel" className="w-72 h-32 object-cover"/>
                                        </Popover.Button>
                                        
                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                            >
                                            <Popover.Panel
                                            static>
                                            <div className="absolute mt-0 bg-white dark:bg-gray-800 px-4 py-4 w-72 shadow rounded cursor-default z-10">
                                                <div className="flex space-x-3">
                                                <div className="flex flex-shrink-0">
                                                    <img src={'http://127.0.0.1:8000/storage/profile/'+channel.cover_art} alt="channel-cover-art" className="object-cover h-16 w-16 rounded-full"/>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="font-semibold">
                                                    <a href="#" className="hover:underline dark:text-gray-300">
                                                        {channel.name}
                                                    </a>
                                                    </div>
                                                    <div className="flex justify-start items-center space-x-2">
                                                    <div>
                                                        <UserGroup className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
                                                    </div>
                                                    <div className="w-auto text-sm leading-none dark:text-gray-400">
                                                        <small>
                                                            {channel.subscribers.length} <span className="text-black font-semibold dark:text-gray-400">Subscribers</span>
                                                        </small>
                                                    </div>
                                                    </div>
                                                    <div className="flex justify-start items-center space-x-2">
                                                    <div>
                                                        <Microphone className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
                                                    </div>
                                                    <div className="w-auto text-sm leading-none dark:text-gray-400">
                                                        <small>
                                                            {channel.episodes.length} <span className="text-black dark:text-gray-400 font-semibold">Podcasts</span>
                                                        </small>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="flex space-x-1 mt-2">
                                                <div className="sm:w-full">
                                                    <button onClick={() => {subscribeToChannel(channel.id)}} className="w-full text-xs text-blue-400 hover:bg-opacity-60 font-semibold flex items-center justify-center px-3 py-2 bg-blue-300 dark:bg-gray-900 bg-opacity-50">
                                                        {!onSubscribe ? 'Subscribe' : 'Subscribing...'} 
                                                        {!onSubscribe ? <div className="ml-1">
                                                            <ArrowRight className="w-3 h-3"/>
                                                        </div> : <div className="ml-1">
                                                            <Oval className="text-white w-4 h-4"/>
                                                        </div>}
                                                    </button>
                                                </div>
                                                
                                                </div>
                                            </div> 
                                            </Popover.Panel>
                                            </Transition>
                                        </>
                                        )}
                                    </Popover>
                                </div>
                            </Link>
                            
                            <div className="md:flex-grow">
                            <h2 className="text-lg font-semibold title-font mb-2 dark:text-gray-200">{channel.name}</h2>
                            <p className="leading-relaxed dark:text-gray-300">{channel.description}</p>
                            <Link 
                            onClick={() => {subscribeToChannel(channel.id)}}
                            to="#" 
                            className="text-white transition duration-150 hover:bg-blue-500 bg-blue-400 rounded-sm py-2 px-5 inline-flex items-center mt-4">
                                {!onSubscribe ? 'Subscribe' : 'Subscribing...'} 
                                {!onSubscribe ? <div className="ml-1">
                                    <ArrowRight className="w-3 h-3"/>
                                </div> : <div className="ml-1">
                                    <Oval className="text-white w-4 h-4"/>
                                </div>}
                            </Link>
                            </div>
                            </div>
                         )) : (
                             Array(9)
                             .fill(9)
                             .map((index => (
                                 <div key={index} className="py-8 flex">
                                 <Skeleton width={200} height={200}/>
                                 <div className="ml-3 spac-x-4 flex flex-col">
                                     <Skeleton width={200} height={40}/>
                                     <Skeleton width={100} height={30}/>
                                     <Skeleton width={50} height={20}/>
                                 </div>
                            </div>
                             )))
                         )
                     }
                    
                    </div>
                </div>
                </section>
                
                 <ToastContainer
                    limit={1}
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
            </DashboardMain>
        </div>
    )
}

export default Channels