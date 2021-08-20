import { Link } from "react-router-dom"
import Alert from "../../../components/Alert"
import DashboardMain from "../../../components/layouts/DashboardMain"

const alerts = [
    {
        title: "'Game Changer' episode is doing well, don't you want to promote it?",
        content: "The episode is performing better than 95% of all other episodes. Promote it today and promote it now and we promise you, you won't regret it.",
        time: '7:44 AM'
    },
    {
        title: "You have an upcoming episode to share tonight at 19:00, don't forget!",
        content: "The episode is performing better than 95% of all other episodes. Promote it today and promote it now and we promise you, you won't regret it.",
        time: '4:44 AM'
    },
    {
        title: "Your monthly hosting fees is about to expire in 3 days. Subscribe to an annual package today for a cheaper fee!",
        content: "The episode is performing better than 95% of all other episodes. Promote it today and promote it now and we promise you, you won't regret it.",
        time: '3:25 AM'
    }
]

const Alerts = () => {
    return(
        <div>
            <DashboardMain>
                <div>
                    {
                        alerts.map((value) => (
                            <div className="bg-white p-3 rounded-sm shadow-sm hover:shadow-md">
                            <div>
                                <Link onDoubleClick={() => {<Alert icon={''} message='Item deleted successfully'/>}} to="#" className="p-3 transition duration-150 hover:bg-gray-100 flex justify-justify border-b border-gray-200 pb-2">
                                    <div>
                                        <h3 className="font-semibold text-md">{value.title}</h3>
                                        <p>{value.content}</p>
                                    </div>
                                    <p className="text-sm w-20">{value.time}</p>
                                </Link>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </DashboardMain>
        </div>
    )
}

export default Alerts