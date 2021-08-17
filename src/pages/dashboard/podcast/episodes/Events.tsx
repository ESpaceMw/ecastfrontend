import { useState } from "react"
import { Link } from "react-router-dom"
import DashboardMain from "../../../../components/layouts/DashboardMain"

const Events = () => {

    const [share, setShare] = useState(false)

    return(
      <div>
          <DashboardMain>
              <div>
               <div className="p-3 bg-blue-500 w-full mb-5">
                   <h3 className="font-semibold text-3xl w-72 text-gray-100">
                       Share upcoming series and 
                        episodes, and get to promote 
                        them to have a lot of people 
                        expectant of what you've 
                        got next. 
                   </h3>
                   <div className="flex justify-between text-gray-200">
                       <p className="mt-3 w-72">
                        The heart that expects something amazing 
                        beats differently! 
                       </p>
                       <div className="my-8 mr-5">
                            <button onClick={() => {
                                share ? setShare(false) : setShare(true)
                            }} className="text-white hover:bg-gray-100 dark:hover:bg-transparent dark:hover:border-gray-300 dark:hover:text-gray-300 transition delay-150 duration-300 hover:text-gray-900 px-2 py-2">
                                Share event now
                            </button>
                            {share ? <div className="flex pt-2">
                                <Link to="#"className="rounded-sm text-blue-500 hover:text-white hover:bg-blue-500 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                                </Link>
                                <Link to="#"className="rounded-sm ml-3 text-blue-500 hover:text-white hover:bg-blue-500 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                                </Link>
                                <Link to="#"className="rounded-sm ml-3 text-blue-500 hover:text-white hover:bg-blue-500 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                                </Link>
                            </div> : <div></div>}
                        </div>
                   </div>
               </div>
               <div className="pb-10">
                   <div className="border rounded-sm">
                       <div className="p-3 h-64 bg-yellow-500">
                           <p className="text-white">Published 3 days ago</p>
                       </div>
                       <p className="p-3">
                           Every once in a while, you have to ask yourself this question: 
                            "Am I growing?" Without doing so, you might find yourself 
                            irrelevant, uncompetitive and stagnating. The need for growth
                            can never be overemphasized. It's a progressive world, and we
                            too have to grow, move and get better. So, catch my
                            upcoming series titled "The Growth Recipe" at MWK 3000.00 
                            only for all 6 episodes commencing on...
                       </p>
                       <div className="flex justify-between mb-5">
                           <Link to="#" className="w-full border-r text-gray-500 text-center hover:text-blue-400 transition duration-150">
                                Edit
                           </Link>
                           <Link to="#" className="w-full text-gray-500 text-center hover:text-yellow-400 transition duration-150">
                               Promote
                           </Link>
                       </div>
                    </div>
               </div>
            </div>
          </DashboardMain>
      </div>
      )
}

export default Events