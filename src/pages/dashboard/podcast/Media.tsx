import React from "react";
import DashboardMain from "../../../components/layouts/DashboardMain"

const Media = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color: string = 'blue'
    
    return(
        <div>
            <DashboardMain>
                <div className="bg-white h-full shadow-sm hover:shadow-md p-5">
                    {/* <ul className="flex">
                        <li className="mr-3 text-md text-blue-400 border-b-2 border-blue-400">
                            <Link to="#">
                                Images
                            </Link>
                        </li>
                        <li className="mr-3 text-md border-b-2 border-blue-400">
                            <Link to="#">
                                Videos
                            </Link>
                        </li>
                        <li className="mr-3 text-md border-b-2 border-blue-400">
                            <Link to="#">
                                Audios
                            </Link>
                        </li>
                    </ul> */}
                    <ul
                        className="flex mb-0 flex-wrap pt-3 pb-4"
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
                            Images
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
                            Videos
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
                            Audios
                        </a>
                        </li>
                        
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6">
                        <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className="relative">
                                    
                                    Number 1

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