import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    imageUrl: string,
    contactName: string
}

const ContactListItem: React.FC<Props> = ({imageUrl, contactName, children}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dark:border-gray-700">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full pl-4 pt-4 pb-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
            <div className="px-10 flex">
            <img 
            src={'http://127.0.0.1:8000/storage/profile/'+imageUrl} 
            alt="contact-user"
            className="rounded-full w-10 h-10 object-cover object-center hover:opacity-75 transition duration-150"
            />
            <Link to="#" className="text-md text-center ml-3 hover:text-gray-700 dark:text-gray-300">{contactName}</Link>
        </div>
        </div>
        <div className="flex items-center justify-center w-8 h-8 dark:border-gray-700 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 dark:text-gray-500">{children}</p>
        </div>
      )}
    </div>
)}

export default ContactListItem