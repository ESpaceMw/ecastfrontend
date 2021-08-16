import { ReactChild, ReactFragment, ReactPortal, useState } from "react";
import Sidebar from "../../partials/Sidebar"
import Header from "./DashboardHeader";

const DashboardMain = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return(
        <div className="flex h-screen overflow-hidden">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/*  Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main>

                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    {props.children}
                </div>

                </main>

                {/* <Banner /> */}

            </div>
        </div>
    )
}

export default DashboardMain