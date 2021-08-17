import { Link } from "react-router-dom"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Alexander from '../../../media/16075282192866.jpg'
import Gowa from '../../../media/DrBrianMcGowanHeadshot-crop-1024x1024.jpg'

const Subscribers = [
    {
        name: 'Alexander Macqueen',
        avatar: Alexander
    },
    {
        name: 'Alnord Phiri',
        avatar: Gowa
    }
]

const Contacts = () => {

    
    return(
        <div>
            <DashboardMain>
                <div>
                    <div className="w-full bg-white shadow-sm hover:shadow-md rounded-sm">
                        <div className="px-24 py-5">
                            <div className="flex border px-3 py-3">
                                <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                </svg>
                                <input
                                    id="modal-search" 
                                    className="w-full rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                                    type="search" 
                                    placeholder="Search contact" />
                            </div>
                            <div className="mt-3">
                                <h3 className="text-md uppercase">All contacts</h3>

                                {
                                    Subscribers.map((item) => (
                                    
                                    <div>
                                    <div className="px-10 py-4 flex">
                                    <img 
                                    src={item.avatar} 
                                    alt="contact-user"
                                    className="rounded-full w-10 h-10 object-cover object-center hover:opacity-75 transition duration-150"
                                    />
                                    <Link to="#" className="text-md text-center ml-3 hover:text-gray-700">{item.name}</Link>
                                </div>
                                </div>
                                ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Contacts