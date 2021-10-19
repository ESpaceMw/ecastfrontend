import { ExclamationCircleOutline } from "heroicons-react"
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

    const [alertMessage, setAlertMessage] = useState('')
    
    useEffect(() => {
        fetch('http://api.ecast.espacemw.com/api/v1/alerts/get-alerts',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ user_id: localStorage.getItem('user_id') })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setAlerts(data.alerts)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }, [])

    function deleteAlert(alertId: string){
        fetch('http://api.ecast.espacemw.com/api/v1/alerts/delete',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ id: alertId })
            }).then(response => {
                return response.json()
            }).then(data => {
                console.log(alertId)
                setShowAlert(true)
                setAlertMessage(data.message)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <div>
            <DashboardMain>
                {!isLoading ?
                <div>
                    <div className="bg-white dark:bg-gray-900 p-3 rounded-sm shadow-sm hover:shadow-md">
                    {
                        alerts.length !== 0 ?  (
                            alerts.map((value) => (
                            
                            <div key={value.id}>
                                <Link className="p-3 transition duration-150 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-justify border-b dark:border-gray-700 border-gray-200 pb-2"
                                 onDoubleClick={() => {
                                     deleteAlert(value.id)
                                     }} to="#" >
                                    <div className="w-full">
                                        <h3 className="font-semibold text-md dark:text-gray-200">{value.title}</h3>
                                        <p className="dark:text-gray-300">{value.content}</p>
                                    </div>
                                    <p className="text-sm w-20 dark:text-gray-300">{moment.utc(value.created_at).local().fromNow()}</p>
                                </Link>
                            </div>

                        )) 
                        ): <div className="sm:px-24 py-20 flex flex-col items-center">
                            <p className="dark:text-gray-300 text-gray-500 text-sm font-semibold mt-2 flex items-center space-x-2">
                            <ExclamationCircleOutline className="w-5 h-5 mr-3"/>
                             You have no new alerts, have a good day!
                            </p>
                        </div>
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
                </div>
                }
                {showAlert ? <Alert icon={'📢'} message={alertMessage} show={true}/> : <></>}
            </DashboardMain>
        </div>
    )
}

export default Alerts