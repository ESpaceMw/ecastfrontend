
import OnBoardMan from '../media/onboard-man.jpg'
import OnBoardingWoman from '../media/onboard-girl.jpg'

import { Link } from 'react-router-dom'

const OnBoarding = () => {
    return(
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">        
            <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Clearly the best sound experience. </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Here we've got the best songs and podcasts in the country, and our podcast hosting service is no match with the rest!
                </p>
                <div className="mt-5 sm:mt-8sm:flex flex-col sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow mb-3 ">
                    <Link
                      to="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-blue-400 hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
                    >
                      Web Player
                    </Link>
                  </div>
                  <div className="sm:mt-0 mt-5">
                    <Link to="/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-blue-500 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Podcast Hosting
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="sm:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="sm:flex">
            <div className="sm:px-20 px-5 sm:py-72 py-10">
              <img className="w-36 h-36 object-cover object-center transform hover:scale-105 transition delay-150 duration-300 flex-shrink-0 rounded-full border-2 border-blue-400" src={OnBoardingWoman} alt="onboarding-hero" />
            </div>
            <div className="sm:py-52 px-10 mb-5">
              <img className="h-72 w-72 object-cover object-center transform hover:scale-105 transition delay-150 duration-300 flex-shrink-0 rounded-full border-2 border-blue-400" src={OnBoardMan} alt="onboarding-hero" />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 mb-0">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 eCast —
            <Link to="" href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">All rights reserved.</Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link to="#" className="mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </Link>
            <Link to="" className="text-gray-500 border-r pr-3">
              Jobs
            </Link>
            <Link to="" className="text-gray-500 border-r pr-3 pl-3">
              Blog
            </Link><Link to="" className="text-gray-500 pl-3">
              Download
            </Link>
          </span>
        </div>
     </div>
    </div>
    )
}

export default OnBoarding