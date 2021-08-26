/* eslint-disable jsx-a11y/anchor-is-valid */
import { ExclamationCircle, ExclamationCircleOutline, LockClosed, ShoppingCart, User } from "heroicons-react";
import React, { useState } from "react";
import DashboardMain from "../../../components/layouts/DashboardMain"
import ClipArt from '../../../media/dusan-jovic-2V4Qhq55maY-unsplash.jpg'
import BG from '../../../media/bg.png'
import { XIcon } from "@heroicons/react/outline";
import SubscribeModal from "../../../components/subscription/SubscribeModal";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import JsonParse from "../../../utils/JsonParse";
import EditChannel from "../../../components/user/EditChannel";

const UserInfo = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color = 'blue'

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    const basicInfo = JsonParse(localStorage.getItem('basic_info'))

    const [tagline, setTagline] = useState('')

    const [uploadedImage, setUploadedImage] = useState('')

    
    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div className="bg-white dark:bg-gray-900 shadow-sm hover:shadow-md p-5 mb-10">
                    <ul
                        className="flex mb-0 flex-wrap pt-3"
                        role="tablist"
                    >
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-lg dark:bg-gray-900 dark:hover:text-gray-300 dark:text-gray-200 font-semibold" +
                            (openTab === 1
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  dark:text-gray-200")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            Basic Info
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-lg dark:bg-gray-900 dark:hover:text-gray-300 dark:text-gray-200 font-semibold" +
                            (openTab === 2
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  dark:bg-gray-200")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            Hosting
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-lg dark:bg-gray-900 dark:hover:text-gray-300 dark:text-gray-200 font-semibold" +
                            (openTab === 3
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  dark:text-gray-200")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            eSpace
                        </a>
                        </li>
                        
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full">
                        <div className="px-4 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                {basicInfo.map((user) => (
                                <div className="relative">
                                        
                                    <p className="mt-2 dark:text-gray-200">
                                        Edit your Title, cover art, category and more.
                                    </p>

                                <div className="flex items-stretch mt-2">
                                    <div className="flex-0">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Podcast url:</p>
                                    </div>
                                    <div className="flex-0">
                                        <a href="#" className="text-blue-400 text-md truncate">https://www.ecast.espacemw.com/podcasts/{localStorage.getItem('username')}</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Title:</p>
                                    </div>
                                    <div className="w-full">
                                        <input 
                                        className="appearance-none block w-full dark:bg-transparent dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" 
                                        value={user.title} type="text"/>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Tag line:</p>
                                    </div>
                                    <div className="w-full">
                                        <input maxLength={20} className="appearance-none block w-full dark:bg-transparent dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1"
                                         value={tagline} onChange={(e) => {setTagline(e.target.value)}} type="text"/>
                                         {tagline.length > 15 ? 
                                         <p className="text-red-500 text-sm font-semibold mt-2 flex items-center space-x-2">
                                            <ExclamationCircleOutline className="w-5 h-5 mr-3"/>Tagline should be not more than 20 words</p> : ''}
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mt-2">
                                    <div className="w-1/6"></div>
                                    <div className="w-full items-center">
                                        <label className="block text-gray-500 font-bold">
                                            <input className="mr-2 leading-tight" type="checkbox"/>
                                            <span className="text-md dark:text-gray-200">
                                                Display Title and Tagline in the page msgthead
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Cover art</p>
                                    </div>
                                    <div className="w-full flex w-ull">
                                        <img className="rounded-sm hover:opacity-90 transition duration-150 object-cover md:h-15 md:w-15 h-24 w-24" 
                                        src={uploadedImage ? uploadedImage : "http://127.0.0.1:8000/storage/profile/"+user.clip_art} 
                                        alt="user-clip-art"/>
                                        <div>
                                            <p className="ml-3 mb-5 text-gray-700 text-md dark:text-gray-200">Choose your photo from Media Library:</p>
                                            <label
                                                htmlFor="fileInput"
                                                className="w-full ml-3 mt-5 cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-sm text-left text-gray-600 bg-white hover:bg-gray-100 dark:text-gray-300 dark:bg-transparent dark:hover:bg-gray-800 dark:border-gray-700 font-medium"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                                    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                                    <circle cx="12" cy="13" r="3" />
                                                </svg>
                                                Browse Photo
                                            </label>
                                            <input type="file" onChange={(e) => setUploadedImage(URL.createObjectURL(e.target.files[0]))} hidden className="sr-only" id="fileInput"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Description:</p>
                                    </div>
                                    <div className="w-full">
                                        <textarea className="dark:text-gray-300 dark:bg-transparent dark:border-gray-700 appearance-none h-20 block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">{user.description}
                                        </textarea>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Category</p>
                                    </div>
                                    <div className="inline-block relative w-full">
                                        <select className="appearance-none block w-full dark:bg-transparent dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                        <option>Education: Self Improvement</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Language</p>
                                    </div>
                                    <div className="w-full">
                                        <input className="appearance-none block w-full dark:bg-transparent dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" value="English" type="text"/>
                                    </div>
                                </div>
                                <div className="border-b-1 border w-full dark:border-gray-700 border-gray-200 mt-3 mb-3"></div>
                                <div className="flex items-center py-2">
                                    <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-500 text-md border-none text-white py-2 px-8 rounded-sm" type="button">
                                    Save
                                    </button>
                                    <EditChannel/>
                                </div>

                                </div>
                                ))}
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="relative">
                                    <div className="mt-3">
                                        <div className="flex items-center animate-pulse bg-red-600 p-2 justify-between flex-wrap">
                                        <div className="w-0 flex-1 flex items-center">
                                            <span className="flex p-2 rounded-sm bg-red-400">
                                            <ExclamationCircle className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                            <p className="ml-3 font-medium text-white truncate">
                                            <span className="hidden md:inline">You are currently not subscribed to any plan</span>
                                            </p>
                                        </div>
                                        
                                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                                            <button
                                            type="button"
                                            className="-mr-1 flex p-2 rounded-md focus:outline-none  sm:-mr-2"
                                            >
                                            <span className="sr-only">Dismiss</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-5">

                                        <div>
                                        <div className="bg-gray-200 md:p-10 align-items-center hover:bg-gray-400 transition duration-150">
                                            <h3 className="text-gray-700 font-bold text-3xl">
                                                BASIC
                                            </h3>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-2">
                                            <div className="p-6 bg-gray-200">
                                                <p className="text-gray-700 text-md">
                                                    500 GB Bandwidth/month
                                                </p>
                                            </div>
                                            <div className="p-6 bg-gray-200">
                                                <p className="text-gray-700 text-md">
                                                    Unlimited Storage
                                                </p>
                                            </div>
                                            <div className="p-6 bg-gray-200">
                                                <p className="text-gray-700 text-md">
                                                    Multiple Distribution (Spotify, Apple podcasts, etc)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div>
                                                <h3 className="text-md font-semibold uppercase mt-1 mb-1 dark:text-gray-200">
                                                    Basic Plan
                                                </h3>
                                                <div className="flex items-center mb-2">
                                                    <input type="checkbox" name="basic-monthly" id="basic-monthly" />
                                                    <label htmlFor="basic-monthly" className="ml-2 text-center block text-sm text-gray-900 dark:text-gray-300">
                                                      MK2,500 Per Month
                                                    </label>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <input type="checkbox" name="basic-yearly" id="basic-yearly" />
                                                    <label htmlFor="basic-yearly" className="ml-2 text-center block text-sm text-gray-900 dark:text-gray-300">
                                                      MK5,500 Per Annum
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            <Elements stripe={stripePromise}>
                                                <SubscribeModal />
                                            </Elements>
                                        </div>
                                        </div>

                                        <div>
                                            <div className="bg-blue-400 hover:bg-blue-500 transition duration-150 md:p-10 align-items-center">
                                                <h3 className="text-white font-bold text-3xl">
                                                    PRO
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mt-2">
                                                <div className="p-6 bg-blue-400">
                                                    <p className="text-white text-md">
                                                        Unlimited Storage
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-400">
                                                    <p className="text-white text-md">
                                                        Statistics
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-400">
                                                    <p className="text-white text-md">
                                                        Multiple Distribution (Spotify, Apple podcasts, etc)
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-400">
                                                    <p className="text-white text-md">
                                                        Hi - Def Downloads
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-400">
                                                    <p className="text-white text-md">
                                                        1 TB Bandwidth/month
                                                    </p>
                                                </div>
                                                </div>
                                                <div>
                                                
                                                
                                            </div>
                                            <h3 className="text-md font-semibold uppercase mt-1 mb-1 dark:text-gray-200">
                                                Pro Plan
                                            </h3>
                                                <div className="flex items-center mb-2">
                                                    <input type="checkbox" name="basic-monthly" id="pro-monthly" />
                                                    <label htmlFor="pro-monthly" className="ml-2 text-center block text-sm text-gray-900 dark:text-gray-300">
                                                      MK5,000 Per Month
                                                    </label>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <input type="checkbox" name="basic-yearly" id="pro-yearly" />
                                                    <label htmlFor="pro-yearly" className="ml-2 text-center block text-sm text-gray-900 dark:text-gray-300">
                                                      MK10,000 Per Annum
                                                    </label>
                                                </div>
                                                
                                                <button className="bg-yellow-400 hover:bg-yellow-500 text-md text-white py-2 px-8">
                                                    Subscribe
                                                </button>
                                                
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                <div className="relative">
                                    
                                    <div className="border dark:border-gray-700 mt-5">
                                        <div style={{ backgroundImage: `url(${BG})` }} className="flex flex-wrap bg-cover justify-center py-14">

                                            <img src={ClipArt} alt="user-clip-art" className="hover:opacity-90 transition duration-150 w-36 h-36 rounded-full object-cover self-center"/>

                                        </div>
                                        <div className="p-4 dark:text-gray-300">
                                            <ul>
                                                <li className="flex">Overview</li>
                                                <li className="flex mt-1 hover:text-blue-400 transition duration-150"><User className="w-5 h-5 text-gray-600 mr-1"/> Name, phone, email</li>
                                                <li className="flex mt-1 hover:text-blue-400 transition duration-150"><LockClosed className="w-5 h-5 text-gray-600 mr-1"/> Password and Security</li>
                                                <li className="flex mt-1 hover:text-blue-400 transition duration-150"><ShoppingCart className="w-5 h-5 text-gray-600 mr-1"/> Payment and Shipping</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                </div>
            </DashboardMain>
        </div>
    )
}

export default UserInfo