import { ArrowDown, ArrowUp, DotsHorizontal, Star } from "heroicons-react"

import React, { useEffect, useState } from "react"

import { Link } from "react-router-dom"

import DashboardMain from "../../../components/layouts/DashboardMain"

import AudienceChart from "../../../components/overview/AudienceChart"

import CashCards from '../../../icons/cards-with-dollar-sign.png'

import Money from '../../../media/pexels-burst-545065.jpg'

import moment from "moment"

import Skeleton from "react-loading-skeleton"

import OpenPlayer from "../../../components/OpenPlayer"

import Error from "../../../media/503 Error Service Unavailable-rafiki.png"

const Overview = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color: string = 'blue'

    const [reviews, setReviews] = useState<any[]>([])

    const [reviewsLoading, setReviewsLoading] = useState(false)

    const [popularEpisodes, setPopularEpisodes] = useState<any[]>([])

    const [isLoadingPopularEpisodes, setIsLoadingPopularEpisodes] = useState(true)

    const [isErrorPopularEpisodes, setIsErrorPopularEpisodes] = useState(false)

    const [showPlayerBanner, setShowPlayerBanner] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/channels/listener-review-get',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channels_id: localStorage.getItem('channel_id')?.toString() })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setReviewsLoading(false)
            setReviews(data.reviews)
        }).catch((err) => {
            setReviewsLoading(false)
            console.log(err)
        })

        fetch('http://127.0.0.1:8000/api/v1/podcasts/episodes/popular-podcasts',{
            method: 'get',
            headers: {'Content-Type':'application/json'}}
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsErrorPopularEpisodes(false)
            setPopularEpisodes(data.popular_podcasts)
            console.log(data.popular_podcasts);
            
        }).catch((err) => {
            setIsLoadingPopularEpisodes(false)
            setIsErrorPopularEpisodes(true)
            console.log(err)
        })
    }, [])

    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div className="pb-10">
                    <div className="rounded-sm bg-white dark:bg-gray-900 shadow-sm hover:shadow-md p-3 w-full">
                        <div className="sm:flex w-full">
                            <div className="sm:w-1/4 dark:border-gray-700 sm:border-r p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150">
                                <p className="text-gray-500 dark:text-gray-200">New Subscribers</p>
                                <h3 className="text-2xl font-semibold dark:text-gray-300">12,123</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 33.45%</p>
                                </div>
                            </div>
                            <div className="sm:w-1/4 dark:border-gray-700 sm:border-r p-2 ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150">
                                <p className="text-gray-500 dark:text-gray-200">Total streams</p>
                                <h3 className="text-2xl font-semibold dark:text-gray-300">129,199</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-red-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowDown className="text-red-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-red-400 ml-2 text-sm">- 113.45%</p>
                                </div>
                            </div>
                            <div className="sm:w-1/4 dark:border-gray-700 sm:border-r p-2 ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150">
                                <p className="text-gray-500 dark:text-gray-200">Engagement Rate</p>
                                <h3 className="text-2xl font-semibold dark:text-gray-300">21.45</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 6.45%</p>
                                </div>
                            </div>
                            <div className="sm:w-1/4 dark:border-gray-700 p-2 ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150">
                                <p className="text-gray-500 dark:text-gray-200">Avg. listen time </p>
                                <h3 className="text-2xl font-semibold dark:text-gray-300">15,2 min</h3>
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
                    <div className="w-full sm:flex mt-5">
                        <div className="sm:w-3/5 sm:h-72 sm:mr-5">
                            <div className="bg-white dark:bg-gray-900 rounded-sm shadow hover:shadow-md p-3">
                                <p className="text-gray-500 dark:text-gray-200">Audience</p>
                                <h3 className="text-2xl font-semibold dark:text-gray-300">78,000</h3>
                                <div className="flex">
                                    <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                        <p className="text-center">
                                            <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                        </p> 
                                    </div>
                                    <p className="text-blue-400 ml-2 text-sm">+ 33.45% <span className="text-gray-600">for the last 7 days</span></p>
                                </div>
                                <AudienceChart/>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-sm shadow hover:shadow-md mt-5 p-3">
                                <div className="flex justify-between">
                                    <p className="text-md font-semibold dark:text-gray-200">Popular episodes</p>
                                    <Link to="/dashboard/popular-podcasts" className="text-blue-400 hover:text-blue-500">
                                        See all
                                    </Link>
                                </div>
                                <div>
                                    {!isErrorPopularEpisodes ? (
                                        !isLoadingPopularEpisodes ?
                                        popularEpisodes.map((value) => (
                                            <Link to="#" onClick={() => {setShowPlayerBanner(true)}}>
                                            <div className="flex justify-between mt-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-150 p-3">
                                                <div className="flex">
                                                    <div className="bg-gray-200 dark:text-gray-400 dark:bg-gray-700 text-center p-1 rounded-sm h-8 text-sm">
                                                        {'S'+value.season+'E'+value.episode_number}
                                                    </div>
                                                    <div className="ml-2">
                                                        <h3 className="font-medium text-md dark:text-gray-200">
                                                            {value.title}
                                                        </h3>
                                                        <p className="mt-1 text-sm dark:text-gray-300">
                                                            Published on {new Date(value.created_at).toDateString()}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="text-sm dark:text-gray-300">{moment.utc(value.created_at).local().fromNow()}</p>
                                            </div>
                                            </Link>
                                        )) : Array(3)
                                            .fill(3)
                                            .map((index) => (
                                                <div
                                                key={index}
                                                    className="flex justify-between dark:hover:bg-gray-800 hover:bg-gray-100 transition duration-150 border-b border-gray-200 dark:border-gray-700 p-3">
                                                        <div className="flex">
                                                            <Skeleton height={10} width={30}/>
                                                            <div className="ml-3 flex flex-col">
                                                                <Skeleton height={20} width={200}/>
                                                                <Skeleton height={10} width={100}/>
                                                            </div>
                                                        </div>
                                                        <Skeleton height={10} width={30}/>
                                                    </div>
                                            ))
                                    ) : (
                                        <div className="flex items-center flex-col pb-10">
                                            <img src={Error} alt="network-error-illustration" className="w-72 h-72 object-cover" />
                                            <p className="text-center dark:text-gray-300">An error occurred, check your internet connection or <Link onClick={()=> window.location.reload()} to="#" className="text-blue-400">reload the page</Link></p>
                                        </div>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-2/5 sm:mt-0 mt-5">
                            <div className="p-3 bg-white dark:bg-gray-900 rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold dark:text-gray-200">eCast Bankie</h3>
                                    <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4 dark:text-gray-200"/>
                                    </button>
                                </div>
                                <div className="py-10 flex flex-wrap justify-center">
                                    <img className="w-20 h-20 transform hover:scale-110 transition duration-150" src={CashCards} alt="cards-with-dollar-sign" />
                                </div>
                                <p className="dark:text-gray-300">
                                    Podcasting is not an expense, it is a powerful 
                                    way to make money. Here at eCast, we 
                                    surely will have you make a lot of it!
                                </p>
                                <p className="text-blue-400 hover:text-blue-500 transition duration-150 font-semibold text-sm">Read more...</p>
                            </div>

                            <div className="p-3 mt-5 bg-blue-400 rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold text-white">eCast Bankie</h3>
                                    <button className="bg-gray-100 dark:bg-gray-800 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4 dark:text-gray-300"/>
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

                            <div className="mt-5 bg-white dark:bg-gray-900 rounded-sm shadow hover:shadow-md p-3">
                                <div>
                                    <p className="dark:text-gray-200">Listeners reviews</p>
                                </div>
                                <div className="pt-5">
                                    
                                    {!reviewsLoading ?
                                        reviews.map((index) => (
                                            <div key={index.id} className="w-full flex justify-between p-3 dark:hover:bg-gray-800 hover:bg-gray-100 transition duration-150 rounded-sm">
                                        <div className="flex">
                                            <img src={"http://127.0.0.1:8000/storage/profile/"+index.reviewer_avatar} alt="reviewer" className="rounded-full object-cover w-12 h-12" />
                                            <div className="ml-2">
                                                <div className="flex flex-row">
                                                    {
                                                        Array(index.stars).fill(index.stars).map((item) => (
                                                            <div key={item} className="flex flex-row">
                                                                <Star className="w-4 h-4 text-yellow-400"/>
                                                            </div>
                                                        ))
                                                    }
                                                    <p className="text-xs bg-blue-400 p-1 text-white rounded-sm">{index.stars} Rated</p>
                                                </div>
                                                <p className="mt-2 text-sm dark:text-gray-300">
                                                    {index.reviewer_name}: "{index.review}"
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-36 right-0 text-sm dark:text-gray-300">
                                            {moment.utc(index.created_at).local().fromNow()}
                                        </div>
                                    </div>
                                        ))
                                        : (
                                             Array(3).fill(3).map((index) => (
                                             <div key={index} className="w-full flex justify-between p-3 dark:hover:bg-gray-800 hover:bg-gray-100 transition duration-150 rounded-sm">
                                                <div className="flex">
                                                    <Skeleton style={{ borderRadius: 200 }} height={40} width={40}/>
                                                    <div className="ml-2">
                                                        <Skeleton height={20} width={50}/>
                                                        <p className="mt-2 text-sm dark:text-gray-300">
                                                            <Skeleton height={40} width={200}/>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-36 right-0 text-sm dark:text-gray-300">
                                                    <Skeleton height={20} width={50}/>
                                                </div>
                                            </div>
                                             ))
                                        )
                                    }
                                    
                                    <p className="p-3 text-blue-400 font-semibold">More reviews...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border dark:border-gray-700 mt-5 sm:mt-24 dark:bg-gray-900 bg-white rounded-sm shadow-sm hover:shadow-md">
                        <div className="h-72 bg-cover" style={{ backgroundImage: `url(${Money})` }}>
                            <h3 className="text-3xl font-semibold p-5 text-white sm:w-1/2">
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
                                        : "bg-white dark:text-gray-300")
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
                                        : "bg-white dark:text-gray-300")
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
                                        : "bg-white dark:text-gray-300")
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
                                        : "bg-white dark:text-gray-300")
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
                                            
                                            <h3 className="font-medium text-lg dark:text-gray-200">
                                                What's eCast Bankie?
                                            </h3>
                                            <p className="ml-5 mt-1 dark:text-gray-300">
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
                                                <h3 className="font-medium text-lg dark:text-gray-200">
                                                How does it work?
                                            </h3>
                                            <p className="ml-5 mt-1 dark:text-gray-300">
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
                    {
                        showPlayerBanner ? <OpenPlayer message={"Open along time ago podcast in eCast Audio Player"} link={"#"}/> : <></>
                    } 
                </div>
            </DashboardMain>
        </div>
    )
}

export default Overview