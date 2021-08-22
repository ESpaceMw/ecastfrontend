
import OnBoardMan from '../media/onboard-man.jpg'

import OnBoardingWoman from '../media/onboard-girl.jpg'

import { Link } from 'react-router-dom'

import { useContext, useEffect } from 'react'

import { ThemeContext } from '../context/themeContext'

import { Moon, Sun } from 'heroicons-react'

const OnBoarding = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    function isDark() {
      return theme === 'dark'
    }
    
    useEffect(() => {
      localStorage.setItem('first_time', 'true')
    })
    
    return(
      <div className="relative h-screen bg-white dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 sm:pb-16 lg:max-w-2xl lg:w-full xl:pb-32">        
            <div className="mt-20 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold dark:text-gray-200 text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Clearly the best sound experience. </span>
                </h1>
                <p className="mt-3 text-base dark:text-gray-300 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
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
            </div>
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
        <div className="bg-gray-100 dark:bg-gray-900 w-full justify-bottom fixed">
        <div className="container mx-auto py-4 px-5 flex items-center flex-col sm:flex-row">
          <p className="text-gray-500 dark:text-gray-300 text-sm text-center sm:text-left">© 2021 eCast —
            <Link to=""  rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 ml-1" target="_blank">All rights reserved.</Link>
          </p>
          <button className="mr-3"
                onClick={() => { isDark() ? setTheme('light') : setTheme('dark')}}
            >
                { isDark() ?  <Sun className="text-yellow-500 mr-2 dark:bg-gray-900  transition delay-150 duration-300 p-1 h-8 w-8 rounded"/> 
                :  <Moon className="text-gray-500 mr-2  transition delay-150 duration-300 p-1 h-8 w-8 rounded"/> }
            </button>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            
            <Link to="" className="text-gray-500 dark:text-gray-300 dark:border-gray-700 border-r pr-3">
              Jobs
            </Link>
            <Link to="" className="text-gray-500 dark:text-gray-300 dark:border-gray-700 border-r pr-3 pl-3">
              Blog
            </Link><Link to="" className="text-gray-500 dark:text-gray-300 pl-3">
              Download
            </Link>
          </span>
        </div>
     </div>
    </div>
    )
}

export default OnBoarding