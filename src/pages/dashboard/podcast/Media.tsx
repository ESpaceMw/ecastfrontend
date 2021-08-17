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
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                        <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
                                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
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