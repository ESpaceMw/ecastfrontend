/*Refactoring required - Mobile view not optimized*/

import { Listbox, Transition } from "@headlessui/react"
import { BriefcaseIcon, CheckIcon, ColorSwatchIcon, SelectorIcon } from "@heroicons/react/outline"
import { AcademicCapOutline, CalculatorOutline, CodeOutline, DocumentText, GlobeOutline, HeartOutline, UserGroupOutline, UsersOutline } from "heroicons-react"
import { Fragment, useState } from "react"

const categories = [
  {
    id: 1,
    name: 'Finances',
  },
  {
    id: 2,
    name: 'Engineering',
  },
  {
    id: 3,
    name: 'Plumbing',
  },
  {
    id: 4,
    name: 'Web developer',
  },
  
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


const Jobs = () => {

    const [selected, setSelected] = useState(categories[3])

    return(
        <div className="bg-white dark:bg-gray-700">
            <div className="p-10 bg-cover" style={{ backgroundImage: `url(https://www.thealliancecenter.org/wp-content/uploads/2020/08/BlogPhoto-scaled.jpg)` }}>
          <div className="flex flex-col justify-center items-center">
              <p className="text-white uppercase text-sm">
                  Work with us
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                  Join the eCast workforce today
              </h3>
              <div className="w-2/3 flex p-20 items-center justify-center mx-auto">
                  <div className="w-1/3 flex space-x-3">
                      <GlobeOutline className="w-16 h-16 text-white"/>
                      <div>
                          <h1 className="text-white text-lg font-semibold">Work remotely</h1>
                          <h3 className='text-white'>All countries</h3>
                      </div>
                  </div>
                  <div className="w-1/3 flex space-x-3">
                      <UserGroupOutline className="w-16 h-16 text-white"/>
                      <div>
                          <h1 className="text-white text-lg font-semibold">23+</h1>
                          <h3 className='text-white'>Active employees</h3>
                      </div>
                  </div>
                  <div className="w-1/3 flex space-x-3">
                      <DocumentText className="w-16 h-16 text-white"/>
                      <div>
                          <h1 className="text-white text-lg font-semibold">Available</h1>
                          <h3 className='text-white'>Job opportunities</h3>
                      </div>
                  </div>
              </div>

              <div className="mt-2 rounded-sm  dark:border-gray-500 p-3 bg-white dark:bg-gray-700 w-full mr-15 ml-15">
                  <div className="w-full flex space-x-1">
                      <div className="w-3/4 border dark:border-gray-500 py-2 px-3 flex space-x-2 items-center">
                          <BriefcaseIcon className="w-5 h-5 text-gray-600 dark:text-gray-300"/>
                          <input className="focus:outline-none dark:text-gray-300 dark:bg-transparent dark:border-gray-500 truncate appearance-none rounded w-full text-gray-700 leading-tight" id="job" type="text" placeholder="E.g Graphic designer, Developer"></input>
                      </div>
                      <div className="w-1/4">
                          <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                            <div className="relative">
                                <Listbox.Button className="relative w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 rounded-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none sm:text-sm">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate dark:text-gray-300">{selected.name}</span>
                                </span>
                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                </Listbox.Button>

                                <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-700 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {categories.map((category) => (
                                    <Listbox.Option
                                        key={category.id}
                                        className={({ active }) =>
                                        classNames(
                                            active ? 'text-white bg-blue-600' : 'text-gray-900',
                                            'cursor-default select-none relative py-2 pl-3 pr-9'
                                        )
                                        }
                                        value={category}
                                    >
                                        {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">
                                            <span
                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                                {category.name}
                                            </span>
                                            </div>

                                            {selected ? (
                                            <span
                                                className={classNames(
                                                active ? 'text-white' : 'text-blue-600',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            ) : null}
                                        </>
                                        )}
                                    </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                        </Listbox>
                      </div>
                      <div className="w-1/4">
                          <button className="px-3 py-2 text-white bg-blue-400 w-full">
                              Search
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="w-full flex mt-4 p-20">
          <div className="w-1/6 border dark:border-gray-600 p-5 flex flex-col items-center space-y-2">
              <p className="text-md text-white">Website & Software</p>
              <CodeOutline className="w-12 h-12 text-gray-700 dark:text-white"/>
              <p className="text-blue-400 text-sm font-semibold">3+ positions available</p>
          </div>
          <div className="w-1/6 border dark:border-gray-600 p-5 flex flex-col items-center space-y-2">
              <p className="text-md text-white">Education</p>
              <AcademicCapOutline className="w-12 h-12 text-gray-700 dark:text-white"/>
              <p className="text-blue-400 text-sm font-semibold">0+ positions available</p>
          </div>
          <div className="w-1/6 border dark:border-gray-600 p-5 flex flex-col items-center space-y-2">
              <p className="text-md text-white">Designing</p>
              <ColorSwatchIcon className="w-12 h-12 text-gray-700 dark:text-white"/>
              <p className="text-blue-400 text-sm font-semibold">8+ positions available</p>
          </div>
          <div className="w-1/6 border dark:border-gray-600 p-5 flex flex-col items-center space-y-2">
              <p className="text-md text-white">Accounting</p>
              <CalculatorOutline className="w-12 h-12 text-gray-700 dark:text-white"/>
              <p className="text-blue-400 text-sm font-semibold">1+ positions available</p>
          </div>
          <div className="w-1/6 border dark:border-gray-600 p-5 flex flex-col items-center space-y-2">
              <p className="text-md text-white">Catering</p>
              <UsersOutline className="w-12 h-12 text-gray-700 dark:text-white"/>
              <p className="text-blue-400 text-sm font-semibold">0+ positions available</p>
          </div>
          <div className="w-1/6 border dark:border-gray-600 p-5 flex flex-col items-center space-y-2">
              <p className="text-md text-white">Health care</p>
              <HeartOutline className="w-12 h-12 text-gray-700 dark:text-white"/>
              <p className="text-blue-400 text-sm font-semibold">0+ positions available</p>
          </div>
      </div>
        </div>
    )
}

export default Jobs