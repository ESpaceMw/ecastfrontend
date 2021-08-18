/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Engange from "../../../media/s2e9-engaging-influencers-LJnEWBfbpMj-sta84Bz7q3b.500x500.png"
import Growth from '../../../media/Market-Growth-scaled.jpg'
import Vincent from '../../../media/cory-vincent-NNDDi-UmEEk-unsplash.jpg'
const Channels = () => {
    return(
        <div>
            <DashboardMain>
                <section className="text-gray-600 body-font overflow-hidden bg-white shadow-sm hover:shadow-md rounded-sm">
                
                <div className="container px-5 py-5 mx-auto">
                    <h3 className="text-2xl font-bold mb-5">
                        Subscribe to the Channels of your choice
                    </h3>
                    <div className="flex border px-3 py-3 mb-5">
                        <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                            <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                        </svg>
                        <input
                            id="modal-search" 
                            className="w-full rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                            type="search" 
                            placeholder="Search for a channel" />
                    </div>
                    <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div style={{ backgroundImage: `url(${Engange})` }}
                         className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mr-5">
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-lg font-semibold title-font mb-2">The Dee Podcast</h2>
                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        <Link to="#" className="text-white transition duration-150 hover:bg-blue-500 bg-blue-400 rounded-sm py-2 px-5 inline-flex items-center mt-4">Subscribe
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div style={{ backgroundImage: `url(${Growth})` }}
                         className="md:w-64 md:mb-0 mb-6 flex-shrink-0 bg-cover flex flex-col mr-5">
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-lg font-semibold title-font mb-2">Market Place Icon</h2>
                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        <Link to="#" className="text-white transition duration-150 hover:bg-blue-500 bg-blue-400 rounded-sm py-2 px-5 inline-flex items-center mt-4">Subscribe
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div style={{ backgroundImage: `url(${Vincent})` }}
                         className="md:w-64 md:mb-0 mb-6 bg-cover flex-shrink-0 flex flex-col mr-5">
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-lg font-semibold title-font mb-2">The World is Ending🔥</h2>
                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                        <Link to="#" className="text-white transition duration-150 hover:bg-blue-500 bg-blue-400 rounded-sm py-2 px-5 inline-flex items-center mt-4">Subscribe
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </DashboardMain>
        </div>
    )
}

export default Channels