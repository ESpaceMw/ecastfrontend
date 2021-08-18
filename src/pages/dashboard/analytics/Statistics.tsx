import { ArrowDown, DotsHorizontal } from "heroicons-react"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Map from '../../../media/map.png'

const Statistics = () => {
    return(
        <div>
            <DashboardMain>
                <div>
                    <div className="flex w-full">
                        <div className="w-1/2 mr-5">
                            <div className="bg-white rounded-sm shadow hover:shadow-md p-3">
                                <img src={Map} alt="world-map"/>
                                <div>
                                    <h3 className="font-semibold text-lg">Countries listening</h3>
                                    <div className="flex">
                                        <ArrowDown className="w-4 h-4 text-gray-600"/>
                                        <p className="ml-2">Africa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="bg-white rounded-sm shadow hover:shadow-md p-3">
                                <div className="flex justify-between">
                                    <h3 className="text-md font-medium">All Episodes</h3>
                                    <button className="bg-gray-100 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4"/>
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <div className="w-full flex">
                                        <div className="h-6 bg-blue-400 w-1/2"></div>
                                        <div className="h-6 bg-red-400 w-1/2"></div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-blue-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-blue-400 text-sm">64 % Females</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-red-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-red-400 text-sm">36 % Males</p>
                                        </div>
                                    </div>
                                    <div className="w-full flex mt-2">
                                        <div className="h-6 bg-blue-400 w-3/5"></div>
                                        <div className="h-6 bg-red-400 w-1/5"></div>
                                        <div className="h-6 bg-green-400 w-1/5"></div>
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

export default Statistics