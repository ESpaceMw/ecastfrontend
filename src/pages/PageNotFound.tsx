import { ArrowRight } from 'heroicons-react'
import { Link } from 'react-router-dom'
import Error from '../media/error.jpg'

const PageNotFound = () => {
    return (
        <div className="flex items-center mb-0 container w-full h-full justify-center">
            <div className="flex flex-col mb-0">
                <img src={Error} alt="error" className="w-72 h-72 mt-32 animate-bounce" /> 
            <p className="mt-4 text-md border rounded-sm py-2 px-8 flex">
                Page not found <Link to="/" className="text-blue-400 hover:text-blue-500 font-semibold flex ml-2">Go to home <ArrowRight className="w-4 h-5 mt-1 ml-1"/></Link>
            </p>
            </div>
        </div>
    )
}

export default PageNotFound