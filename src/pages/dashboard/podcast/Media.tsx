import React from "react";
import DashboardMain from "../../../components/layouts/DashboardMain"
import Impact from '../../../media/logo.png'
import Growth from '../../../media/business-success-growing-growth-increase-up-concept-wooded-cube-block-with-word-growth_20693-206.jpg'
import Engage from '../../../media/s2e9-engaging-influencers-LJnEWBfbpMj-sta84Bz7q3b.500x500.png'

const Media = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color: string = 'blue'
    
    return(
        <div>
            <DashboardMain>
                <div className="bg-white h-full shadow-sm hover:shadow-md p-5">
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
                            Images
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
                            Videos
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
                            Audios
                        </a>
                        </li>
                        
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6">
                        <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className="relative">
                                    
                                <div className="flex flex-wrap -m-4">
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute hover:opacity-90 transition duration-150 inset-0 w-full h-60 object-cover object-center" src={Impact}/>
                                        
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute hover:opacity-90 transition duration-150 inset-0 w-full h-60 object-cover object-center" src={Growth}/>
                                        
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute hover:opacity-90 transition duration-150 inset-0 w-full h-60 object-cover object-center" src={Engage}/>
                                        
                                        </div>
                                    </div>
                                    
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
                            
                        </div>
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Media