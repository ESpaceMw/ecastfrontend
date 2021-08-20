import { Fragment } from 'react'

import { 
  Popover, 
  Transition 
} from '@headlessui/react'

import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'

import { 
  BriefcaseOutline, 
  CloudDownloadOutline, 
  Moon, 
  NewspaperOutline, 
  UserGroupOutline 
} from 'heroicons-react'

import { Link } from 'react-router-dom'

import Icon from '../../logo.svg'

const landingPages = [
  {
    name: 'Jobs',
    href: '/jobs',
    icon: BriefcaseOutline,
  },
  {
    name: 'Download',
    href: '/download',
    icon: CloudDownloadOutline,
  },
  { name: 'Blog',
    href: '/blog', 
    icon: NewspaperOutline
  },
  {
    name: 'About us',
    href: '/about-us',
    icon: UserGroupOutline,
  }
]


export default function LandingPageHeader() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
             to="/" 
             className="font-bold text-md">
              <img className="h-8 w-auto" src={Icon} alt="favicon" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">

            <Link to="/jobs" href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Jobs
            </Link>
            <Link to="/download" href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Download
            </Link>
            <Link to="/blog" href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/about-us" href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About us
            </Link>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button>
                <Moon className="text-gray-500 mr-2 bg-white hover:bg-gray-100 transition delay-150 duration-300 p-1 h-8 w-8 rounded"/>
            </button>
            <Link 
            to="sign-in" 
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="sign-up"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-sm shadow-md border ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link
                  to="/" 
                  className="font-bold text-md">
                    <img className="h-8 w-auto" src={Icon} alt="favicon" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-sm p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {landingPages.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-sm hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-blue-400" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link 
                  to="#"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing a member?{' '}
                  <Link to="#" href="#" className="text-blue-400 hover:text-blue-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
