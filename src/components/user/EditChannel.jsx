import { Fragment, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { XIcon } from '@heroicons/react/outline'

import SubmitButton from '../SubmitButton'

import { useHistory } from 'react-router-dom'
import UrlService from '../../services/UrlService'

export default function EditChannel() {

  const [open, setOpen] = useState(false)

  const [channelName, setChannelName] = useState('')

  const [channelDescription, setChannelDescription] = useState('')

  const [channelImage, setChannelImage] = useState('')

  const [uploadImage, setUploadImage] = useState('')

  const [onLoad, setOnLoad] = useState(false)

  const [showAlert, setShowAlert] = useState(false)

  const history = useHistory()

  const handleSubmit = () => {

        const formData = new FormData();
        formData.append("cover_art", uploadImage);
        formData.append("name", channelName)
        formData.append('description', channelDescription)
        formData.append('user_id', localStorage.getItem('user_id')?.toString())

        const requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        };

        fetch(UrlService.updateChannel(), requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
            setShowAlert(true)
            setOnLoad(false)
            history.push('/dashboard/overview')
            })
        .catch(error => console.log('error', error));
  }

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
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      setOnLoad(true)
                      handleSubmit()
                    }}>
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full border-2 border-dashed border-gray-200 dark:border-gray-700" aria-hidden="true">
                        <div className="flex flex-col p-10">
                            {channelImage ? <div className="h-64 w-64 bg-cover rounded-full hover:opacity-95 transition duration-150" style={{ backgroundImage: `url('${channelImage}')` }}>
                               
                            </div>: <div className="h-64 w-64 bg-cover rounded-full hover:opacity-95 transition duration-150" style={{ backgroundImage: `url('http://ecast.espace.mw.com/storage/profile/${localStorage.getItem('channel_cover_art')}')` }}>
                               
                            </div>}
                            {showAlert ? <p className="text-green-500 font-semibold text-center m-2">Channel update success</p> : ''}
                            <div className="flex flex-col">

                                <div className="flex flex-col items-center mt-2">

                                    <div className="w-full mt-2">
                                      <label
                                          for="fileChannelInput"
                                          type="button"
                                          class="w-full cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-sm text-left text-gray-600 bg-white hover:bg-gray-100 dark:text-gray-300 dark:bg-transparent dark:hover:bg-gray-800 dark:border-gray-700 font-medium"
                                      >
                                          <svg xmlns="http://www.w3.org/2000/svg" class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                                              <circle cx="12" cy="13" r="3" />
                                          </svg>
                                          Browse Photo
                                      </label>
                                      <input type="file" onChange={(e) => {
                                          setChannelImage(URL.createObjectURL(e.target.files[0]))
                                          setUploadImage(e.target.files[0])
                                        }} hidden className="sr-only" id="fileChannelInput"/>
                                      </div>
                                    
                                    <div className="w-full mt-2">
                                        <input 
                                          placeholder={localStorage.getItem('channel_name')}
                                          value={channelName}
                                          onChange={(e) => {setChannelName(e.target.value)}}
                                          className="dark:text-gray-300 dark:bg-transparent dark:border-gray-700 appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1"/>
                                        
                                    </div>

                                    <div className="w-full mt-2">
                                        <textarea 
                                          placeholder={localStorage.getItem('channel_description')}
                                          value={channelDescription}
                                          onChange={(e) => {setChannelDescription(e.target.value)}}
                                          className="dark:text-gray-300 dark:bg-transparent dark:border-gray-700 appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                        </textarea>
                                    </div>

                                    <div className="mt-2 w-full">
                                        <SubmitButton text="Update" onLoad={onLoad} onClick={() => {}}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    </form>
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
