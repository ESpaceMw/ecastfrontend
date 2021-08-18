/* eslint-disable jsx-a11y/anchor-is-valid */
import { LockClosed, ShoppingCart, User } from "heroicons-react";
import React from "react";
import DashboardMain from "../../../components/layouts/DashboardMain"
import ClipArt from '../../../media/dusan-jovic-2V4Qhq55maY-unsplash.jpg'
import BG from '../../../media/bg.png'

const UserInfo = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color: string = 'blue'
    
    return(
        <div>
            <DashboardMain>
                <div className="bg-white shadow-sm hover:shadow-md p-5 mb-10">
                    <ul
                        className="flex mb-0 flex-wrap pt-3"
                        role="tablist"
                    >
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-lg dark:bg-gray-900 dark:hover:text-gray-300 dark:text-gray-500 font-semibold" +
                            (openTab === 1
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  dark:bg-gray-600")
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
                            "text-lg dark:bg-gray-900 dark:hover:text-gray-300 dark:text-gray-500 font-semibold" +
                            (openTab === 2
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  dark:bg-gray-400")
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
                            "text-lg dark:bg-gray-900 dark:hover:text-gray-300 dark:text-gray-500 font-semibold" +
                            (openTab === 3
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  dark:bg-gray-600")
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
                                <div className="relative">
                                        
                                    <p className="mt-2">
                                    Edit your Title, cover art, category and more.
                                    </p>

                                <div className="flex items-stretch mt-2">
                                    <div className="flex-0">
                                        <p className="text-gray-700 mr-2 text-md">Podcast url:</p>
                                    </div>
                                    <div className="flex-0">
                                        <a href="#" className="text-blue-400 text-md">https://www.ecast.espacemw.com/podcasts/dhakanhlanhla</a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md">Title:</p>
                                    </div>
                                    <div className="w-full">
                                        <input className="appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" value="The Dee Podcast" type="text"/>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md">Tag line:</p>
                                    </div>
                                    <div className="w-full">
                                        <input className="appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" value="Become the best version of yourself" type="text"/>
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mt-2">
                                    <div className="w-1/6"></div>
                                    <div className="w-full items-center">
                                        <label className="block text-gray-500 font-bold">
                                            <input className="mr-2 leading-tight" type="checkbox"/>
                                            <span className="text-md">
                                                Display Title and Tagline in the page masgthead
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md">Cover art</p>
                                    </div>
                                    <div className="w-full flex w-ull">
                                        <img className="rounded-sm hover:opacity-90 transition duration-150 object-cover md:h-15 md:w-15 h-24 w-24" src={ClipArt} alt="user-clip-art"/>
                                        <div>
                                            <p className="ml-3 text-gray-700 text-md">Choose your photo from Media Library:</p>
                                            <input className="appearance-none ml-3 mt-2 block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-1 px-1 leading-tight focus:outline-none focus:ring-1" type="file"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md">Description:</p>
                                    </div>
                                    <div className="w-full">
                                        <textarea className="appearance-none h-20 block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">Hello Everyone, welcome to the Dee Podcast. Here you will be inspired to become the best version of yourself - the man/woman that God created you to be. So, subscribe and let's vibe together.
                                        </textarea>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md">Category</p>
                                    </div>
                                    <div className="inline-block relative w-full">
                                        <select className="appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                        <option>Education: Self Improvement</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-700 mr-2 text-md">Language</p>
                                    </div>
                                    <div className="w-full">
                                        <input className="appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" value="English" type="text"/>
                                    </div>
                                </div>
                                <div className="border-b-1 border w-full border-gray-200 mt-3 mb-3"></div>
                                <div className="flex items-center py-2">
                                    <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-500 text-md border-none text-white py-2 px-8 rounded-sm" type="button">
                                    Save
                                    </button>
                                    <button className="flex-shrink-0 border-transparent border-4 text-blue-400 hover:text-blue-600 text-md py-1 px-2 rounded-sm" type="button">
                                    Revert to last
                                    </button>
                                </div>

                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="relative">
                                    
                                    <div className="grid grid-cols-2 gap-4 mt-5">
                                        <div>
                                        <div className="bg-gray-200 md:p-10 align-items-center">
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
                                        </div>

                                        <div>
                                            <div className="bg-blue-300 md:p-10 align-items-center">
                                                <h3 className="text-white font-bold text-3xl">
                                                    PRO
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mt-2">
                                                <div className="p-6 bg-blue-300">
                                                    <p className="text-white text-md">
                                                        Unlimited Storage
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-300">
                                                    <p className="text-white text-md">
                                                        Statistics
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-300">
                                                    <p className="text-white text-md">
                                                        Multiple Distribution (Spotify, Apple podcasts, etc)
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-300">
                                                    <p className="text-white text-md">
                                                        Hi - Def Downloads
                                                    </p>
                                                </div>
                                                <div className="p-6 bg-blue-300">
                                                    <p className="text-white text-md">
                                                        1 TB Bandwidth/month
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                <div className="relative">
                                    
                                    <div className="border mt-5">
                                        <div style={{ backgroundImage: `url(${BG})` }} className="flex flex-wrap bg-cover justify-center py-14">

                                            <img src={ClipArt} alt="user-clip-art" className="hover:opacity-90 transition duration-150 w-36 h-36 rounded-full object-cover self-center"/>

                                        </div>
                                        <div className="p-4">
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