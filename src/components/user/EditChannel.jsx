/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import BG from '../../media/kit.jpg'
import { Camera } from 'heroicons-react'
import SubmitButton from '../SubmitButton'

export default function EditChannel() {

  const [open, setOpen] = useState(false)

  return (
      <div>
      <button
        onClick={() => { setOpen(!open) }}
        className="ml-4 py-2 bg-transparent text-blue-400 hover:text-blue-500">
         Edit channel details
        </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
        <Dialog.Overlay className="absolute inset-0 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-14 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-sm dark:bg-gray-800 bg-white text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full mt-16 flex flex-col py-6 bg-white dark:bg-gray-900 shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-gray-200">Edit channel details</Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full border-2 border-dashed border-gray-200 dark:border-gray-700" aria-hidden="true">
                        <div className="flex flex-col p-10">
                            <div className="border-4 border-blue-300 h-72 w-72 bg-cover rounded-full" style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/profile/${localStorage.getItem('channel_cover_art')}')` }}>
                               
                            </div>
                            <div className="flex flex-col">

                                <div className="flex flex-col items-center mt-2">
                                    
                                    <div className="w-full mt-2">
                                        <input 
                                        placeholder="Channel title"
                                        className="dark:text-gray-300 dark:bg-transparent dark:border-gray-700 appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1"/>
                                        
                                    </div>

                                    <div className="w-full mt-2">
                                        <textarea 
                                        placeholder="Channel description"
                                        className="dark:text-gray-300 dark:bg-transparent dark:border-gray-700 appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                        </textarea>
                                    </div>

                                    <div className="mt-2 w-full">
                                        <SubmitButton text="Update" onLoad={false} onClick={() => {}}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}
