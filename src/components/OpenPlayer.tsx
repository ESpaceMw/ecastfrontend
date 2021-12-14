import { XIcon } from "@heroicons/react/outline"
import { MusicNote } from "heroicons-react"
import { useState } from "react"
import { Link } from "react-router-dom"

interface Props {
    message: string,
    link: string
}

const OpenPlayer: React.FC<Props> = ({message, link}) => {

    const [dismiss, setDismiss] = useState(true)
    
    return(
    <div>
        {
            dismiss ? <div className="bg-blue-400 dark:bg-gray-900 w-1/2 fixed bottom-0 right-0 md:bottom-8 md:right-12 z-60">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-sm bg-blue-500 dark:bg-gray-800">
                    <MusicNote className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">{message}</span>
                    <span className="hidden md:inline">{message}</span>
                    </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <Link
                    to={link}
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-sm text-white transition duration-150 font-medium bg-blue-500 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-blue-500"
                    >
                    Play
                    </Link>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                    type="button"
                    onClick={() => {
                        setDismiss(false)
                    }}
                    className="-mr-1 flex p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    >
                    <span className="sr-only">Dismiss</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                </div>
                </div>
            </div>
            </div> : <></>
        }
    </div>
    )
}

export default OpenPlayer