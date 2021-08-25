/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import DashboardMain from "../../../components/layouts/DashboardMain"

const Profile = () => {

    
    
    return(
        <div>
            <DashboardMain>
                <div className="bg-white h-full shadow-sm hover:shadow-md p-5">
                   
                    <div className="w-11/12">
                        <div className="flex justify-center pb-10">
                                <img src="https://images.pexels.com/photos/3278968/pexels-photo-3278968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                    className="h-40 w-40 rounded-full object-cover"
                                    alt="username"/>
                                <div className="ml-10">
                                    <div className="flex items-center">
                                        <h2 className="block leading-relaxed font-light text-gray-700 text-3xl">Kells Kamuzu</h2>
                                        
                                        <button className="flex items-center ml-3 border border-yellow-600 hover:bg-blue-600 hover:text-white rounded-sm outline-none focus:outline-none bg-transparent text-yellow-600 text-sm py-1 px-2">
                                            <span className="block">Premium member</span>
                                            <svg className="block h-5 w-5 pl-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                    </div>
                                    <ul className="flex justify-content-around items-center">
                                        <li>
                                            <span className="text-base flex"><span className="font-bold mr-2">23 </span> Podcasts</span>
                                        </li>
                                        <li>
                                            <span className="cursor-pointer text-base flex ml-5"><span className="font-bold mr-2">102k </span> Subscribers</span>
                                        </li>
                                        <li>
                                            <span className="cursor-pointer text-base flex ml-5"><span className="font-bold mr-2">654 </span> Subscribed</span>
                                        </li>
                                    </ul>
                                    <br/>
                                    <div className="">
                                        <h1 className="text-base font-bold">The Fire Cracker</h1>
                                        <span className="text-base">Unleash the fire 🔥 to the world 🌍</span>
                                        <a className="block text-base text-blue-400 mt-2" target="_blank">http://www.ecast.espacemw.com/podcasts/profile/kells </a>
                                    </div>
                                </div>
                        </div>
                        <div className="border-b border-gray-300"></div>
                        <article className="mt-5 grid grid-cols-3 gap-10">
                            <div className="cursor-pointer relative">
                                <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                    className="foto w-full h-full object-cover"
                                    alt="description" />
                            </div>
                            <div className="cursor-pointer relative">
                                <img src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                    className="foto w-full h-full object-cover"
                                    alt="description" />
                            </div>
                            <div className="cursor-pointer relative">
                                <img src="https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                    className="foto w-full h-full object-cover"
                                    alt="description" />
                            </div>
                        </article>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Profile