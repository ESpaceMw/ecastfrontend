import {
    ReactChild, 
    ReactFragment, 
    ReactPortal, 
    useState 
    } from "react";

import Sidebar from "../../partials/Sidebar"

import Header from "./DashboardHeader";

const DashboardMain = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return(
        <div className="flex h-screen overflow-hidden">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="h-full">

                <div className="pb-5 px-4 sm:px-6 lg:px-8 py-8 w-full h-full max-w-9xl mx-auto bg-gray-50 dark:bg-gray-800">
                    {props.children}
                </div>

                </main>

            </div>
        </div>
    )
}

export default DashboardMain