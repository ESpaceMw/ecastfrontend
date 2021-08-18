import { ArrowDown, ArrowUp, DotsHorizontal } from "heroicons-react"
import React from "react"
import { Link } from "react-router-dom"
import DashboardMain from "../../../components/layouts/DashboardMain"
import CashCards from '../../../icons/cards-with-dollar-sign.png'
import Money from '../../../media/pexels-burst-545065.jpg'

const popularEpisodes = [
    {
        id: 1,
        title: 'Engaging Gamechangers',
        sub: 'Season 2, Episode 15',
        time: '15:08 AM'
    },
    {
        id: 2,
        title: 'Engaging Gamechangers',
        sub: 'Season 2, Episode 15',
        time: '15:08 AM'
    },
    {
        id: 3,
        title: 'Engaging Gamechangers',
        sub: 'Season 2, Episode 15',
        time: '15:08 AM'
    },
    {
        id: 4,
        title: 'Engaging Gamechangers',
        sub: 'Season 2, Episode 15',
        time: '15:08 AM'
    },
    {
        id: 5,
        title: 'Engaging Gamechangers',
        sub: 'Season 2, Episode 15',
        time: '15:08 AM'
    },
]
const Overview = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color: string = 'blue'

    return(
        <div>
            <DashboardMain>
                <div className="pb-10">
                    <div className="rounded-sm bg-white shadow-sm hover:shadow-md p-3 w-full">
                        <div className="flex w-full">
                            <div className="w-1/4 border-r p-2 hover:bg-gray-100 transition duration-150">
                                <p className="text-gray-500">New Subscribers</p>
                                <h3 className="text-2xl font-semibold">12,123</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 33.45%</p>
                                </div>
                            </div>
                            <div className="w-1/4 border-r p-2 ml-2 hover:bg-gray-100 transition duration-150">
                                <p className="text-gray-500">Total streams</p>
                                <h3 className="text-2xl font-semibold">129,199</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-red-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowDown className="text-red-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-red-400 ml-2 text-sm">- 113.45%</p>
                                </div>
                            </div>
                            <div className="w-1/4 border-r p-2 ml-2 hover:bg-gray-100 transition duration-150">
                                <p className="text-gray-500">Engagement Rate</p>
                                <h3 className="text-2xl font-semibold">21.45</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 6.45%</p>
                                </div>
                            </div>
                            <div className="w-1/4 border-r p-2 ml-2 hover:bg-gray-100 transition duration-150">
                                <p className="text-gray-500">Avg. listen time </p>
                                <h3 className="text-2xl font-semibold">15,2 min</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 4.45%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-5">
                        <div className="w-3/5 h-72 mr-5">
                            <div className="bg-white rounded-sm shadow hover:shadow-md p-3">
                                <p className="text-gray-500">Audience</p>
                                <h3 className="text-2xl font-semibold">78,000</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 33.45% <span className="text-gray-600">for the last 7 days</span></p>
                                </div>
                                <p className="text-3xl">
                                    Bar Chart here
                                </p>
                            </div>
                            <div className="bg-white rounded-sm shadow hover:shadow-md mt-5 p-3">
                                <div className="flex justify-between">
                                    <p className="text-md font-semibold">Popular episodes</p>
                                    <Link to="#" className="text-blue-400 hover:text-blue-500">
                                        See all
                                    </Link>
                                </div>
                                <div>
                                    {
                                        popularEpisodes.map((value) => (
                                            <div className="flex justify-between mt-3 hover:bg-gray-100 transition duration-150 p-3">
                                                <div className="flex">
                                                    <div className="bg-gray-200 text-center p-1 rounded-sm w-6 h-6 text-sm">
                                                        {value.id}
                                                    </div>
                                                    <div className="ml-2">
                                                        <h3 className="font-medium text-md">
                                                            {value.title}
                                                        </h3>
                                                        <p className="mt-1 text-sm">
                                                            {value.sub}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm">{value.time}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="p-3 bg-white rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold">eCast Bankie</h3>
                                    <button className="bg-gray-100 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4"/>
                                    </button>
                                </div>
                                <div className="py-10 flex flex-wrap justify-center">
                                    <img className="w-20 h-20 transform hover:scale-110 transition duration-150" src={CashCards} alt="cards-with-dollar-sign" />
                                </div>
                                <p>
                                    Podcasting is not an expense, it is a powerful 
                                    way to make money. Here at eCast, we 
                                    surely will have you make a lot of it!
                                </p>
                                <p className="text-blue-400 hover:text-blue-500 transition duration-150 font-semibold text-sm">Read more...</p>
                            </div>

                            <div className="p-3 mt-5 bg-blue-400 rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold text-white">eCast Bankie</h3>
                                    <button className="bg-gray-100 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4"/>
                                    </button>
                                </div>
                                <h2 className="text-2xl font-medium text-white mt-1">Learn how to save more 
                                    by subscribing to the annual 
                                    hosting plan.
                                </h2>
                                <p className="text-white mt-1">
                                    Podcasting is not an expense, it is a powerful 
                                    way to make money. Here at eCast, we 
                                    surely will have you make a lot of it!
                                </p>
                                <p className="text-white mt-1 hover:text-gray-100 transition duration-150 font-semibold text-sm">Read more...</p>
                            </div>

                            <div className="bg-white rounded-sm shadow hover:shadow-md p-3 mt-5">
                                <div>
                                    <p>Listeners reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border mt-5 rounded-sm shadow-sm hover:shadow-md">
                        <div className="h-72 bg-cover" style={{ backgroundImage: `url(${Money})` }}>
                            <h3 className="text-3xl font-semibold p-5 text-white w-1/2">
                                Podcasting alone should give you 
                                a decent income. Let's show you 
                                how you can  just earn that!
                            </h3>
                        </div>
                        <div className="p-3">
                            <ul
                                className="flex mb-0 flex-wrap pt-3 pb-4"
                                role="tablist"
                            >
                                <li className="mr-2 text-center">
                                <a
                                    className={
                                    "text-lg  dark:hover:text-gray-300  font-semibold" +
                                    (openTab === 1
                                        ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                        : "bg-white  ")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Info
                                </a>
                                </li>
                                <li className="mr-2 text-center">
                                <a
                                    className={
                                    "text-lg  dark:hover:text-gray-300  font-semibold" +
                                    (openTab === 2
                                        ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                        : "bg-white  ")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Overview
                                </a>
                                </li>
                                <li className="mr-2 text-center">
                                <a
                                    className={
                                    "text-lg  dark:hover:text-gray-300  font-semibold" +
                                    (openTab === 3
                                        ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                        : "bg-white  ")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Tips
                                </a>
                                </li>
                                <li className="mr-2 text-center">
                                <a
                                    className={
                                    "text-lg  dark:hover:text-gray-300  font-semibold" +
                                    (openTab === 4
                                        ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                        : "bg-white  ")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    Bank
                                </a>
                                </li>
                                
                            </ul>
                            <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6">
                                <div className="px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <div className="relative">
                                            
                                            <h3 className="font-medium text-lg">
                                                What's eCast Bankie?
                                            </h3>
                                            <p className="ml-5 mt-1">
                                                eCast Bankie is a service introduced to make sure that our customers 
                                                (Podcast Hosts) have an opportunity to make money as they work 
                                                to release content regularly. We do understand the costs that follow 
                                                as one determines to sustain a podcast with excellent standards that 
                                                may include premium hosting, great advertisement and paying a Studio 
                                                to release episodes that sound minty fresh. All these costs can be 
                                                off-set through eBankie as you are given a chance through eCast player, 
                                                to have listeners pay for some of content you release.
                                                
                                            </p>

                                            <div className="mt-2">
                                                <h3 className="font-medium text-lg">
                                                How does it work?
                                            </h3>
                                            <p className="ml-5 mt-1">
                                                with eCast Bankie, you first register for the service. When you do, you 
                                                now have access to enlist any choice series as paid content, meaning 
                                                people have to pay to make sure they listen to the series...
                                            </p>
                                            </div>
                                            

                                        </div>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="relative">
                                            
                                        Number 2

                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                        <div className="relative">
                                            
                                            Number 3

                                        </div>
                                    </div>
                                    <div className={openTab === 4 ? "block" : "hidden"} id="link4">

                                        <div className="relative">
                                            
                                            Number 4

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

export default Overview