import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import DashboardMain from "../../../../components/layouts/DashboardMain"
import GirlWithBeats from '../../../../media/soundtrap-d0sXdsCnhF8-unsplash.jpg'
import Growth from '../../../../media/business-success-growing-growth-increase-up-concept-wooded-cube-block-with-word-growth_20693-206.jpg'
import moment from "moment"

const Events = () => {

    const [share, setShare] = useState(false)

    const [events, setEvents] = useState<any[]>([])

    const[isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/events/get?channel_id',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channel_id: 9 })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setEvents(data.events)
            console.log(data.events);
            
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }, [])

    return(
      <div className="dark:bg-gray-900">
          <DashboardMain>
              <div>
               <div className="p-3 w-full mb-5 bg-cover bg-gradient-to-r from-gray-600 via-gray-300 to-white bg-opacity-10" style={{ backgroundImage: `url(${GirlWithBeats})` }}>
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
                                <Link to="#"className="rounded-full text-blue-500 hover:text-white hover:bg-blue-500 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                                </Link>
                                <Link to="#"className="rounded-full ml-3 text-blue-500 hover:text-white hover:bg-blue-500 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                                </Link>
                                <Link to="#"className="rounded-full ml-3 text-blue-500 hover:text-white hover:bg-blue-500 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2">
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
                   {events.map((event) => (
                       <div key={event.id} className="border rounded-sm dark:border-gray-700">
                       <div className="p-3 h-72 bg-cover bg-gradient-to-r from-gray-600 via-gray-300 to-white bg-opacity-10" style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/events/${event.cover_art}')` }}>
                           <p className="text-white">Published {moment.utc(event.created_at).local().fromNow()}</p>
                       </div>
                       <p className="p-3 dark:text-gray-300">
                           {event.content}
                       </p>
                       <div className="flex justify-between mb-5">
                           <Link to="#" className="w-full border-r dark:border-gray-700 text-gray-500 dark:text-gray-200 text-center hover:text-blue-400 dark:hover:text-blue-400 transition duration-150">
                                Edit
                           </Link>
                           <Link to="#" className="w-full text-gray-500 dark:text-gray-200 text-center hover:text-yellow-400 dark:hover:text-yellow-400 transition duration-150">
                               Promote
                           </Link>
                       </div>
                    </div>
                   ))} 
               </div>
            </div>
          </DashboardMain>
      </div>
      )
}

export default Events