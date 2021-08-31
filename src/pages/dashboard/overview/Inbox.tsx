/* eslint-disable jsx-a11y/anchor-is-valid */
import { Bell, Camera, Plus } from "heroicons-react"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Rb from '../../../media/rb.jpg'
import Kit from '../../../media/kit.jpg'
import { Link } from "react-router-dom"
import { useState } from "react"

const messages = [
    {
        id: 1,
        avatar: Rb,
        name: 'Abel Andersons',
        messages: [
            {
                id: 21,
                message: 'Hey man',
                created_at: '2 hours ago'
            }
        ],   
    },
    {
        id: 2,
        avatar: Kit,
        name: 'Hannah Mngoli',
        messages: [
            {
                id: 21,
                message: 'We seriously need to talk',
                created_at: '4 hours ago'
            }
        ]
    }
]

const Inbox = () => {

    const [isSelected, setIsSelected] = useState(false)
    
    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
            <div className="flex flex-row h-screen bg-gray-100">
                
            <div className="sm:flex sm:flex-row sm:flex-auto bg-white dark:bg-gray-900 rounded-sm border-l dark:border-gray-700 shadow-sm hover:shadow-md">
                <div className="flex flex-col sm:w-1/5">
                    <div className="flex border px-2 py-2 m-3 dark:border-gray-700">
                        <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-2 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                        </svg>
                        <input
                            id="modal-search" 
                            className="w-full dark:bg-transparent rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                            type="search" 
                            placeholder="Search for a contact" />
                    </div>
                    <div className="flex-auto overflow-y-auto">

                        {
                            messages.map((item) => (
                                <Link key={item.id} onClick={()=> {setIsSelected(true)}} to="#" className="block border-b dark:border-gray-700">
                                    <div key={item.id} className={isSelected ? "border-blue-400 bg-blue-100 border-l-2 dark:border-gray-900  dark:bg-gray-800 p-3 space-y-4" : "border-gray-100 bg-white border-l-2 p-3 space-y-4"}>
                                        <div key={item.id} className="flex flex-row items-center space-x-2">
                                            <img src={Rb} alt="user-icon" className="w-8 h-8 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                                            <strong className="flex-grow dark:text-gray-200">{item.name}</strong>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">{item.messages[0].created_at}</div>
                                            </div>

                                            <div className="flex flex-row items-center space-x-1">
                                            <p className="text-blue-500">✔✔</p>
                                            <div className="flex-grow truncate dark:text-gray-300">{item.messages[0].message}</div>
                                        </div>
                                        
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                </div>

                <div className="w-full border-l border-gray-200 flex flex-col dark:border-gray-700">
                <div className="flex-none h-20 flex flex-row justify-between items-center dark:border-gray-700 p-5 border-b">
                    <div className="flex flex-row space-y-1">
                        <img src={Rb} alt="user-icon" className="w-12 h-12 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                        <div className="flex flex-col">
                            <strong className="dark:text-gray-200">Nikola Tesla</strong>
                            <p className="text-green-500 text-sm">Online</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <Bell className="w-6 h-6 text-gray-600 dark:text-gray-400"/>
                    </div>

                </div>

                <div
                    className="flex-auto overflow-y-auto p-5 space-y-4"
                    style={{ backgroundImage: 'url(`https://static.intercomassets.com/ember/assets/images/messenger-backgrounds/background-1-99a36524645be823aabcd0e673cb47f8.png)`' }}
                >
                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                            <img src={Rb} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                            <div className="flex flex-col">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded p-5">
                                    Some message text
                                </div>
                                <div className=" text-gray-600">4hr ago</div>
                            </div>
                    </div>

                    <div className="flex flex-row justify-center  text-sm text-gray-600">
                        13 August 2021
                    </div>

                    <div className="flex space-x-2 flex-row-reverse space-x-reverse">
                        <img src={Kit} alt="user-icon" className="w-6 h-6 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>

                    <div className="flex flex-col">
                        <div className="bg-blue-100 rounded p-5">
                        Some message text
                        </div>
                        <div className=" text-gray-600">5hr ago</div>
                    </div>

                    
                    
                    </div>
                </div>

                <div className="flex-none h-12">
                    <div className="flex border dark:border-gray-700 px-3 py-3 mb-5">
                        <div className="bg-gray-100 rounded-full w-8 h-8 mr-3 hover:bg-gray-200 dark:bg-gray-700 hover:text-gray-900 transition duration-150">
                            <Camera className="w-6 h-6 m-1 text-gray-600 dark:text-gray-400"/>
                        </div>
                        <input
                            className="w-full dark:bg-transparent dark:text-gray-200 rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                            type="search" 
                            placeholder="Type your message here" 
                            />
                        <div className="bg-gray-100 rounded-full w-8 h-8 ml-3 hover:bg-gray-200 dark:bg-gray-700 hover:text-gray-900 transition duration-150">
                            <Plus className="w-6 h-6 m-1 text-gray-600 dark:text-gray-400"/>
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

export default Inbox