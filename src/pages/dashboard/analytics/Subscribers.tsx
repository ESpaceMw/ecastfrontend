import { DotsHorizontal, ArrowUp } from "heroicons-react"
import { Link } from "react-router-dom"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Alexander from '../../../media/16075282192866.jpg'
import Gowa from '../../../media/DrBrianMcGowanHeadshot-crop-1024x1024.jpg'

const subscribers = [
    {
        name: 'Alexander Macqueen',
        avatar: Alexander,
        id: 1
    },
    {
        name: 'Alnord Phiri',
        avatar: Gowa,
        id: 2
    }
]

const Subscribers = () => {
    return(
        <div>
            <DashboardMain>
                <div>
                    <div className="w-full flex">
                        <div className="w-3/5 mr-5 rounded-sm bg-white shadow-sm hover:shadow-md p-3">
                            <div className="flex border px-3 py-3">
                                <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                </svg>
                                <input
                                    id="modal-search" 
                                    className="w-full rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                                    type="search" 
                                    placeholder="Search contact" />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-md uppercase">All subscribers</h3>

                                {
                                    subscribers.map((item) => (
                                    
                                    <div>
                                    <div className="px-10 py-4 flex">
                                    <img 
                                    src={item.avatar} 
                                    alt="contact-user"
                                    className="rounded-full w-10 h-10 object-cover object-center hover:opacity-75 transition duration-150"
                                    />
                                    <Link to="#" className="text-md text-center ml-3 hover:text-gray-700">{item.name}</Link>
                                </div>
                                </div>
                                ))
                                }
                                
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="bg-white rounded-sm shadow hover:shadow-md p-3">
                                <div className="flex justify-between">
                                    <h3 className="text-md font-medium">All Episodes</h3>
                                    <button className="bg-gray-100 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4"/>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <div className="w-full flex">
                                        <div className="h-6 bg-blue-400 w-1/2"></div>
                                        <div className="h-6 bg-red-400 w-1/2"></div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-blue-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-blue-400 text-sm">64 % Females</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-red-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-red-400 text-sm">36 % Males</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex mt-2">
                                        <div className="h-6 bg-blue-400 w-1/5"></div>
                                        <div className="h-6 bg-red-400 w-2/5"></div>
                                        <div className="h-6 bg-indigo-400 w-1/5"></div>
                                        <div className="h-6 bg-green-400 w-1/5"></div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-blue-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-blue-400 text-sm">30 % 10 - 24 Yrs</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-red-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-red-400 text-sm">12 % 35 - 64 Yrs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-indigo-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-indigo-400 text-sm">52 % 25 - 34 Yrs</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-green-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-green-400 text-sm">6 %  65 Yrs +</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-md text-medium mb-2 mt-2">Annual listens</h3>
                                        <p className="text-lg">Graph here</p>
                                        <p className="text-2xl mt-2">1,050,657 Total Listens</p>
                                        <div className="flex">
                                            <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                                <p className="text-center">
                                                    <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                                </p> 
                                            </div>
                                            <p className="text-blue-400 ml-2 text-sm">+ 33.45% <span className="text-gray-600"> 2021</span></p>
                                        </div>
                                        <p className="mt-2 text-sm"><span className="font-semibold">Disclaimer:</span> These are insights based on eCast Streaming Service
                                            and not of those integrated to the podcast. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 mt-5 bg-blue-400 rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold text-white">Boost Audience</h3>
                                    <button className="bg-gray-100 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4"/>
                                    </button>
                                </div>
                                <p className="text-white mt-1">
                                    Reach out to more potential listeners
                                    and have more Subscribers by 
                                    advertising your podcast, series and 
                                    episodes with us at just MWK 1000 
                                    a day!
                                </p>
                                <p className="text-white mt-1 hover:text-gray-100 transition duration-150 font-semibold text-sm">Learn more...</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Subscribers