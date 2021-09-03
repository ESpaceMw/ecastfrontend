import { DotsHorizontal, ArrowUp, Camera } from "heroicons-react"
import { useState, useEffect, ChangeEvent } from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import ContactListItem from "../../../components/ContactListItem"
import DashboardMain from "../../../components/layouts/DashboardMain"
import SubscribersChart from "../../../components/subscribers/SubscribersChart"

const Subscribers = () => {

    const [subscribers, setSubscribers] = useState<any[]>([])

    const [filteredData,setFilteredData] = useState(subscribers);

    const [name, setName] = useState('');

    const [isLoading, setIsLoading] = useState(true)

    const [isTyping, setIsTyping] = useState(false);

    const [femaleListeners, setFemaleListeners] = useState(0)

    const [maleListeners, setMaleListeners] = useState(0)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/subscription/subscribers',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channel_id: 7 })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setSubscribers(data.subscribers)
            setFilteredData(data.subscribers)
            console.log(data.subscribers);
            
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })

        fetch('http://127.0.0.1:8000/api/v1/statistics/listens-by-gender',{
            method: 'get',
            headers: {'Content-Type':'application/json'}
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setFemaleListeners(data.female_listeners)
            setMaleListeners(data.male_listeners)
            console.log(data);
            
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

        let value = event.target.value.toLowerCase();
        

        if (value !== '') {
        const results = subscribers.filter((user) => {
            return user.first_name.toLowerCase().startsWith(value.toLowerCase());
        });
        setFilteredData(results);
        } else {
        setFilteredData(subscribers);
        }

        setName(value);
    }
    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div>
                    <div className="w-full flex">
                        <div className="w-3/5 mr-5 rounded-sm bg-white dark:bg-gray-900 shadow-sm hover:shadow-md p-3">
                            <div className="flex border px-3 py-3 dark:border-gray-700">
                                <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                </svg>
                                <input
                                    id="modal-search" 
                                    className="w-full dark:bg-transparent rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                                    type="text"
                                    value={name}
                                    onChange={(event) =>handleSearch(event)}
                                    placeholder="Search contact by first name" />
                                {name !== '' ? <Link to="#" onClick={() => {
                                    setName('') 
                                    setFilteredData(subscribers)}} className="font-semibold text-blue-400">Clear</Link> : ''}
                            </div>
                            <div className="mt-3">
                                <h3 className="text-md uppercase dark:text-gray-200">{subscribers.length} subscribers</h3>

                                {!isLoading ?
                                    filteredData.map((item) => (
                                    <ContactListItem 
                                        key={item.id}
                                        imageUrl={item.basic_info.clip_art} 
                                        contactName={item.first_name+' '+item.last_name}>
                                            <div className="flex-none h-12 pl-8 mb-4">
                                                <p className="mt-1 mb-1 text-blue-400 font-semibold">Say hello👋 to {item.first_name}</p>
                                                <div className="flex border dark:border-gray-700 px-3 py-3 mb-5">
                                                    <div className="bg-gray-100 rounded-full w-8 h-8 mr-3 hover:bg-gray-200 dark:bg-gray-700 hover:text-gray-900 transition duration-150">
                                                        <Camera className="w-6 h-6 m-1 text-gray-600 dark:text-gray-400"/>
                                                    </div>
                                                    <input
                                                        className="w-full dark:bg-transparent dark:text-gray-200 rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                                                        type="text" 
                                                        onChange={(e)=>{e.target.value.length !== 0 ? setIsTyping(true) : setIsTyping(false)}}                                                     
                                                        placeholder="Type your message here" 
                                                        />
                                                    {
                                                    !isTyping ? 
                                                    '' : <Link to="#" className="font-semibold text-blue-400">Send</Link>
                                                    }
                                                </div>
                                            </div>
                                    </ContactListItem>
                                )) : (
                                    Array(9)
                                    .fill(9)
                                    .map((index) => (
                                        <div key={index} className="flex justify-between">
                                        <div className="px-10 py-4 flex">
                                            <Skeleton height={40} width={40}
                                             style={{ borderRadius: 200 }}
                                            />
                                            <Skeleton height={20} width={100} className="ml-3"/>
                                        </div>
                                        <Skeleton style={{ borderRadius: 200 }} height={20} width={20} className="ml-3"/>
                                        </div>
                                    ))
                                )
                                }
                                
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="bg-white dark:bg-gray-900 rounded-sm shadow hover:shadow-md p-3">
                                <div className="flex justify-between">
                                    <h3 className="text-md font-medium dark:text-gray-200">All Episodes</h3>
                                    <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4 dark:text-gray-400"/>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <div className="w-full flex">
                                        {
                                            femaleListeners > 50 ? <div className="h-6 bg-blue-400 w-3/5"></div> : <div className="h-6 bg-blue-400 w-2/5"></div>
                                        }
                                        {
                                            maleListeners > 50 ? <div className="h-6 bg-red-400 w-3/5"></div> : <div className="h-6 bg-red-400 w-2/5"></div>
                                        }
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-blue-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-blue-400 text-sm">{femaleListeners} % Females</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-red-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-red-400 text-sm">{maleListeners} % Males</p>
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
                                        <h3 className="text-md text-medium mb-2 mt-2 dark:text-gray-200">Annual listens</h3>
                                        <SubscribersChart/>
                                        <p className="text-2xl mt-2 dark:text-gray-300">1,050,657 Total Listens</p>
                                        <div className="flex">
                                            <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                                <p className="text-center">
                                                    <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                                </p> 
                                            </div>
                                            <p className="text-blue-400 ml-2 text-sm">+ 33.45% <span className="text-gray-600"> 2021</span></p>
                                        </div>
                                        <p className="mt-2 text-sm dark:text-gray-300"><span className="font-semibold dark:text-gray-200">Disclaimer:</span> These are insights based on eCast Streaming Service
                                            and not of those integrated to the podcast. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 mt-5 bg-blue-400 rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold text-white">Boost Audience</h3>
                                    <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4 dark:text-gray-300"/>
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