import { ExclamationCircleOutline } from "heroicons-react"

import DashboardMain from "../../../../components/layouts/DashboardMain"

const Bankie = () => {

    const currentHour = (new Date()).getHours()

    return(
        <div>
            <DashboardMain>
                <div className="rounded-sm bg-white dark:bg-gray-900 p-3 shadow-sm hover:shadow-md">
                    <div className="sm:px-10 px-5 py-20 flex flex-col items-center">
                      <p className="dark:text-gray-300 text-gray-500 text-sm font-semibold mt-2 flex items-center space-x-2">
                        <ExclamationCircleOutline className="w-5 h-5 mr-3"/>
                          No information available, have a good {currentHour < 17 ? 'day' : 'night'}!
                      </p>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Bankie