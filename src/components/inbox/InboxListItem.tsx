import { useState } from "react"
import { Link } from "react-router-dom"

interface Props {
    avatar: string,
    name: string,
    message: string,
    time: string,
    id: number
}

const InboxListItem: React.FC<Props> = ({avatar, name, message, time, id}) => {

    const [isSelected, setIsSelected] = useState(0)
    
    return(
        <Link onClick={()=> {
            console.log('====================================');
            console.log(isSelected);
            console.log('====================================');
            setIsSelected(id)}
            } to="#" className="block border-b dark:border-gray-700">
            <div className="dark:border-gray-900  dark:bg-gray-800 space-y-4 border-gray-100 bg-white border-l-2 p-3 space-y-4">
                <div className="flex flex-row items-center space-x-2">
                    <img src={avatar} alt="user-icon" className="w-8 h-8 rounded-full object-cover mr-2 hover:opacity-90 transition duration-150"/>
                    <strong className="flex-grow dark:text-gray-200">{name}</strong>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{message}</div>
                    </div>

                    <div className="flex flex-row items-center space-x-1">
                    <p className="text-blue-500">✔✔</p>
                    <div className="flex-grow truncate dark:text-gray-300">{time}</div>
                </div>
                
            </div>
        </Link>
    )
}

export default InboxListItem