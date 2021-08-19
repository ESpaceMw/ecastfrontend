import { ArrowUp, DotsHorizontal } from "heroicons-react"
import CountryListItem from "../../../components/CountryListItem"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Map from '../../../media/map.png'

const continents = [
    {
        name: 'Africa',
        countries: {
            country: [
            {
                name: 'Malawi',
                count: 748
            },
            {
                name: 'Zambia',
                count: 9
            },
            {
                name: 'Tanzania',
                count: 172
            },
        ],
            
        }
    },
    {
        name: 'Asia'
    },
    {
        name: 'America'
    },
    {
        name: 'Australia'
    },
    {
        name: 'Europe'
    },
]

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
                                    <div className="mt-3 mb-3">
                                        {continents.map((continent) => (
                                        <CountryListItem continent={continent.name}>
                                            <ul>    
                                                {continent.countries?.country.map((country) => (
                                                    <li className="mb-2 justify-between flex ml-3">
                                                        <p>- {country.name}</p>
                                                        <p className="text-gray-500">{country.count} listens</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CountryListItem>
                                        ))}
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
                                        <div className="h-6 bg-blue-400 w-1/5"></div>
                                        <div className="h-6 bg-red-400 w-2/5"></div>
                                        <div className="h-6 bg-indigo-400 w-1/5"></div>
                                        <div className="h-6 bg-green-400 w-1/5"></div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-blue-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-blue-400 text-sm">30 % 10 - 24 Yrs</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-red-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-red-400 text-sm">12 % 35 - 64 Yrs</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-indigo-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-indigo-400 text-sm">52 % 25 - 34 Yrs</p>
                                        </div>
                                        <div className="flex">
                                            <div className="w-2 h-2 bg-green-400 mr-2 rounded-full mt-1"></div>
                                            <p className="text-green-400 text-sm">6 %  65 Yrs +</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-md text-medium mb-2 mt-2">Annual listens</h3>
                                        <p className="text-lg">Graph here</p>
                                        <p className="text-2xl mt-2">1,050,657 Total Listens</p>
                                        <div className="flex">
                                            <div className="rounded-full bg-blue-100 animate-pulse w-5 h-5 items-center text-center">
                                                <p className="text-center">
                                                    <ArrowUp className="text-blue-400 m-1 w-3 h-3 justify-center"/>
                                                </p> 
                                            </div>
                                            <p className="text-blue-400 ml-2 text-sm">+ 33.45% <span className="text-gray-600"> 2021</span></p>
                                        </div>
                                        <p className="mt-2 text-sm"><span className="font-semibold">Disclaimer:</span> These are insights based on eCast Streaming Service
                                            and not of those integrated to the podcast. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 mt-5 bg-blue-400 rounded-sm shadow-sm hover:shadow-md">
                                <div className="justify-between flex">
                                    <h3 className="font-semibold text-white">Boost Audience</h3>
                                    <button className="bg-gray-100 p-1 rounded-sm">
                                        <DotsHorizontal className="h-4 w-4"/>
                                    </button>
                                </div>
                                <p className="text-white mt-1">
                                    Reach out to more potential listeners
                                    and have more Subscribers by 
                                    advertising your podcast, series and 
                                    episodes with us at just MWK 1000 
                                    a day!
                                </p>
                                <p className="text-white mt-1 hover:text-gray-100 transition duration-150 font-semibold text-sm">Learn more...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Statistics