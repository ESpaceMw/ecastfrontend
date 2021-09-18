import { Link } from "react-router-dom"
import Icon from '../../icons/icon.png'

/* eslint-disable jsx-a11y/anchor-is-valid */
const LandingPageFooter = () => {
    return(
        <footer className="text-gray-600 dark:text-gray-200 body-font bg-gray-50 dark:bg-gray-800 dark:border-gray-700 border-t">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <img src={Icon} alt="icon"/>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">USEFUL LINKS</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">eSpace</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Register store</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Service countries</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">ABOUT</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Company</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Investors</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Partners</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Policies</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">PRIVACY POLICY</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">User agreement</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Privacy</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Cookies</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Accessibility</a>
                    </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">HELP & SUPPORT</h2>
                    <nav className="list-none mb-10">
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Resolution Center</a>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Seller Information Center</a>
                    </li>
                    <li>
                        <Link to="/faq" className="text-gray-600 dark:text-gray-200 hover:text-gray-800">FAQ's</Link>
                    </li>
                    <li>
                        <a className="text-gray-600 dark:text-gray-200 hover:text-gray-800">Support & Feedback</a>
                    </li>
                    </nav>
                </div>
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-400 dark:text-gray-200 text-sm text-center sm:text-left">© {new Date().getFullYear()} E-Cast — All rights reserved
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <a className="text-blue-400 hover:text-white hover:bg-blue-400 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2 rounded-full">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-blue-400 hover:text-white hover:bg-blue-400 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2 rounded-full">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-blue-400 hover:text-white hover:bg-blue-400 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2 rounded-full">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    </a>
                    <a className="ml-3 text-blue-400 hover:text-white hover:bg-blue-400 transition delay-150 duration-300 bg-gray-200 dark:bg-gray-900 p-2 rounded-full">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                    </a>
                </span>
                </div>
            </div>
            </footer>
    )
}

export default LandingPageFooter