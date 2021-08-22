import moment from "moment"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import Alert from "../../../components/Alert"
import DashboardMain from "../../../components/layouts/DashboardMain"

const Alerts =  () => {

    const [isLoading, setIsLoading] = useState(true)

    const [alerts, setAlerts] = useState<any[]>([])

    const [showAlert, setShowAlert] = useState(false)
    
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
        })
    }, [])

    return(
        <div>
            <DashboardMain>
                {!isLoading ?
                <div>
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-sm shadow-sm hover:shadow-md">
                    {
                        alerts && (
                            alerts.map((value) => (
                            
                            <div key={value.id}>
                                <Link className="p-3 transition duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-justify border-b dark:border-gray-700 border-gray-200 pb-2" onDoubleClick={() => {setShowAlert(true)}} to="#" >
                                    <div className="w-full">
                                        <h3 className="font-semibold text-md dark:text-gray-200">{value.title}</h3>
                                        <p className="dark:text-gray-300">{value.content}</p>
                                    </div>
                                    <p className="text-sm w-20 dark:text-gray-300">{moment.utc(value.created_at).local().fromNow()}</p>
                                </Link>
                            </div>

                        ))
                        )
                    }
                    </div>
                </div>
                : 
                <div>
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-sm shadow-sm hover:shadow-md">
                    {
                        Array(5)
                            .fill(5)
                            .map((_value, index) => (
                            
                            <div key={index}>
                                <Link className="p-3 transition duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-justify border-b dark:border-gray-700 border-gray-200 pb-2" onDoubleClick={() => {setShowAlert(true)}} to="#" >
                                    <div className="w-full">
                                        <h3 className="font-semibold text-md dark:text-gray-200">
                                            <Skeleton height={20} width={300}/>
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
                </div>
                }
                {showAlert ? <Alert icon={'Some text'} message='Item deleted successfully'/> : <></>}
            </DashboardMain>
        </div>
    )
}

export default Alerts