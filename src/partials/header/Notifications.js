import { Bell,ExclamationCircleOutline } from 'heroicons-react';

import { 
  useState, 
  useRef, 
  useEffect 
} from 'react';

import { Link } from 'react-router-dom';

import Transition from '../../utils/Transition';

import moment from 'moment';

import Skeleton from 'react-loading-skeleton';

function Notifications() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);

  const dropdown = useRef(null);

  const [isLoading, setIsLoading] = useState(true)

  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/alerts/get-alerts',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ user_id: localStorage.getItem('user_id') })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setAlerts(data.alerts)
            console.log(data.alerts);
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }, [])

  return (
    <div className="relative inline-flex ml-3">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-gray-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
          <Bell className="w-5 h-5 text-gray-500"/>
        <div className="animate-pulse absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 dark:border-gray-700 border-white rounded-full"></div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full w-72 right-0 -mr-48 sm:mr-0 min-w-80 bg-white dark:bg-gray-900 dark:border-gray-700 border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-200 uppercase pt-1.5 pb-2 px-4">Recent alerts</div>
          <ul>
            {!isLoading ?
            <div>
                {alerts.length !== 0 ?  (
                    alerts.map((value) => (
                    <li className="border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <Link
                      className="block py-2 px-4 hover:bg-gray-50 dark:hover:bg-gray-800"
                      to="/dashboard/alerts"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span className="block text-sm mb-2 dark:text-gray-300">📢 {value.title} <span className="font-medium text-gray-800 dark:text-gray-200">{value.content}</span></span>
                      <span className="block text-xs font-medium text-gray-400 dark:text-gray-300">{moment(value.created_at).format("DD-MM-YYYY h:mm:ss")}</span>
                    </Link>
                  </li>
                    ))) : 
                    <div className="sm:px-10 px-5 py-20 flex flex-col items-center">
                      <p className="dark:text-gray-300 text-gray-500 text-sm font-semibold mt-2 flex items-center space-x-2">
                        <ExclamationCircleOutline className="w-5 h-5 mr-3"/>
                          You have no new alerts, have a good day!
                      </p>
                </div>
                }
                </div>
                : <div>
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-sm shadow-sm hover:shadow-md">
                    {
                        Array(5)
                            .fill(5)
                            .map((_value, index) => (
                            
                            <div key={index}>
                                <Link className="p-3 transition duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-justify border-b dark:border-gray-700 border-gray-200 pb-2" to="#" >
                                    <div className="w-full">
                                        <h3 className="font-semibold text-md dark:text-gray-200">
                                            <Skeleton  height={20} width={300}/>
                                        </h3>
                                        <p className="dark:text-gray-300"><Skeleton height={50} width={500}/></p>
                                    </div>
                                    <p className="text-sm w-20 dark:text-gray-300">
                                        <Skeleton height={10} width={50}/>
                                    </p>
                                </Link>
                            </div>

                        ))
                        
                    }
                    </div>
                </div>}
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default Notifications;