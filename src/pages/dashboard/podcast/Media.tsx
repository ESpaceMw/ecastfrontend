import { 
    useEffect, 
    useState 
} from "react"

import DashboardMain from "../../../components/layouts/DashboardMain"

import { MusicNote } from "heroicons-react"

import ReactAudioPlayer from 'react-audio-player'

import Skeleton from "react-loading-skeleton"

import Error from "../../../media/503 Error Service Unavailable-rafiki.png"
import { Link } from "react-router-dom"

const Media = () => {

    const [openTab, setOpenTab] = useState(1);

    const color: string = 'blue'

    const [photos, setPhotos] = useState<any[]>([])

    const [isPhotosLoading, setIsPhotosLoading] = useState(true)

    const [isErrorPhotos, setIsErrorPhotos] = useState(false)

    const [audios, setAudios] = useState<any[]>([])

    const [isAudiosLoading, setIsAudiosLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.ecast.espacemw.com127.0.0.1:8000/api/v1/podcasts/media/photos',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channels_id: localStorage.getItem('channel_id')?.toString() })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsPhotosLoading(false)
            setPhotos(data.photos)
        }).catch((err) => {
            setIsPhotosLoading(false)
            setIsErrorPhotos(true)
            console.log(err)
        })

        fetch('http://127.0.0.1:8000/api/v1/podcasts/media/audios',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channels_id: localStorage.getItem('channel_id')?.toString() })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsAudiosLoading(false)
            setAudios(data.audios)
        }).catch((err) => {
            setIsAudiosLoading(false)
            console.log(err)
        })
    }, [])
    
    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div className="dark:bg-gray-900 bg-white h-full mb-10 shadow-sm hover:shadow-md p-5">
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
                            Images
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-lg  dark:hover:text-gray-300  font-semibold" +
                            (openTab === 2
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white dark:text-gray-200 ")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            Videos
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-lg  dark:hover:text-gray-300  font-semibold" +
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
                            Audios
                        </a>
                        </li>
                        
                    </ul>
                    <div className="relative flex flex-col break-words bg-transparent h-full w-full mb-6">
                        <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className="relative">
                                    
                                <div className="flex flex-wrap -m-4">
                                    
                                    {!isErrorPhotos ?
                                    !isPhotosLoading ?
                                        photos.map((item) => (
                                            <div style={{ backgroundImage: `url('http://localhost:8000/storage/podcasts/${item}')` }} className="w-1/5 mb-3 mr-2 h-60 hover:opacity-90 transition duration-150 bg-cover">
                                            </div>
                                        )) : (
                                            Array(6).fill(6).map((index) => (
                                                <Skeleton className="mr-2" height={250} width={250}/>
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
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="relative dark:text-gray-300">
                                    
                                No videos uploaded yet!

                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                <div className="relative mb-10">
                                    
                                    <div className="flex flex-wrap -m-4 mb-10">
                                        {!isAudiosLoading ?
                                            audios.map((item) => (
                                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                            <div className="border dark:border-gray-700  ">
                                                <div className="flex flex-wrap justify-center dark:bg-gray-700 bg-gray-200">
                                                    <div className="py-10 px-10">
                                                        <MusicNote className="w-20 h-20 text-gray-500"/>
                                                    </div>
                                                </div>
                                                <div className="p-3">
                                                    <ReactAudioPlayer
                                                        src={'http://localhost:8000/storage/podcasts/'+item}
                                                        autoPlay={false}
                                                        controls
                                                        style={{ width: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                            )) : (
                                                Array(9).fill(9).map((index) => (
                                                    <Skeleton height={250} width={250} className="mr-2"/>
                                                ))
                                            )
                                        }
                                    
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

export default Media