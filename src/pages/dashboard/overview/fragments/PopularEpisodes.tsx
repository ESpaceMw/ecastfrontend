import moment from "moment"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import DashboardMain from "../../../../components/layouts/DashboardMain"
import OpenPlayer from "../../../../components/OpenPlayer"
import Error from "../../../../media/503 Error Service Unavailable-rafiki.png"

const PopularEpisodes = () => {

    const [popularEpisodes, setPopularEpisodes] = useState<any[]>([])

    const [isLoading, setIsLoading] = useState(true)

    const [isError, setIsError] = useState(false)

    const [showPlayerBanner, setShowPlayerBanner] = useState(false)



    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/podcasts/episodes/popular-podcasts',{
            method: 'get',
            headers: {'Content-Type':'application/json'}}
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setPopularEpisodes(data.popular_podcasts)
            console.log(data.popular_podcasts);
            
        }).catch((err) => {
            setIsLoading(false)
            setIsError(true)
            console.log(err)
        })
    }, [])

    return (
        <div className="bg-gray-800">
            <DashboardMain>
                <div className="rounded-sm dark:bg-gray-900 bg-white p-3 shadow-sm hover:shadow-md">
                    <h3 className="text-md font-semibold mb-2 dark:text-gray-200">
                        Popular episodes
                    </h3>
                    <div>
                        {!isError ? (
                            !isLoading ?
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
                            )) : Array(9)
                                .fill(5)
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
                    {
                        showPlayerBanner ? <OpenPlayer message={"Open along time ago podcast in eCast Audio Player"} link={"#"}/> : <></>
                    }           
                    </div>
            </DashboardMain>
        </div>
    )
}

export default PopularEpisodes