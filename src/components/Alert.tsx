import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    icon: string,
    message: string
}

const Alert: React.FC<Props> = ({icon, message}) => {

  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
    { bannerOpen && (
      <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60">
        <div className="bg-gray-100 border text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div>{icon} <Link to="#" className="hover:underline" href="#" target="_blank" rel="noreferrer">{message}</Link></div>
          <button className="text-gray-500 hover:text-gray-400 ml-5" onClick={() => setBannerOpen(false) }>
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    )}
    </>
  );
}

export default Alert;