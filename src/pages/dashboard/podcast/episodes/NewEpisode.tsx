/* eslint-disable jsx-a11y/heading-has-content */
import { Folder, PencilAlt, Upload, User } from "heroicons-react"
import React from "react";
import DashboardMain from "../../../../components/layouts/DashboardMain"
import SubmitButton from "../../../../components/SubmitButton";

/* eslint-disable jsx-a11y/anchor-is-valid */
const NewEpisode = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color: string = 'blue'
    
    return(
        <div>
            <DashboardMain>
            <section className="text-gray-600 body-font bg-white shadow-sm hover:shadow-md rounded-sm">
                <div className="flex mx-auto flex-wrap mb-20  p-2 px-40">
                    <ul
                        className="flex mb-0 flex-wrap pt-3 pb-4"
                        role="tablist"
                    >
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 1
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  ")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            <Folder className="mr-1 "/> STEP 1 
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 2
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  ")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            <User className="mr-1"/> STEP 2 
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 3
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  ")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            <PencilAlt className="mr-1"/> STEP 3 
                        </a>
                        </li>

                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 4
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  ")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(4);
                            }}
                            data-toggle="tab"
                            href="#link4"
                            role="tablist"
                        >
                            <Upload className="mr-1"/> STEP 4 
                        </a>
                        </li>
                        
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-transparent w-full mb-6">
                        <div className="py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className="relative">
                                    
                                    <div className="container mx-auto max-w-screen-lg h-full">
                                    
                                    <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white">
                                
                                        <div className="h-full overflow-auto p-8 w-full flex flex-col">
                                            <div className="border-dashed border-2 border-gray-400 py-12 px-10 flex flex-col justify-center items-center">
                                                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                                    <span>Drag and drop your</span>&nbsp;<span>mp3 file anywhere or</span>
                                                </p>
                                                <input id="hidden-input" type="file" multiple className="hidden" />
                                                <button id="button" className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                                                    Upload a file
                                                </button>
                                                <svg className="fill-current w-12 h-12 mb-3 text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                                                </svg>
                                                
                                                <p className="text-lg text-blue-400">Drop files to upload</p>
                                            </div>

                                            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                                            Preview
                                            </h1>

                                            <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                            <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center">
                                                <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                <span className="text-small text-gray-500">No files selected</span>
                                            </li>
                                            </ul>
                                        </div>
                                   </article>
                                </div>

                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="relative">
                                    
                                <div className="container mx-auto max-w-screen-lg h-full">
                                    
                                    <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white">
                                
                                        <div className="h-full overflow-auto p-8 w-full flex flex-col">
                                            <div className="border-dashed border-2 border-gray-400 py-12 px-10 flex flex-col justify-center items-center">
                                                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                                    <span>Drag and drop your</span>&nbsp;<span>Clip art image anywhere or</span>
                                                </p>
                                                <input id="hidden-input" type="file" multiple className="hidden" />
                                                <button id="button" className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                                                    Upload a file
                                                </button>
                                                <svg className="fill-current w-12 h-12 mb-3 text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                                                </svg>
                                                
                                                <p className="text-lg text-blue-400">Drop files to upload</p>
                                            </div>

                                            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                                            Preview
                                            </h1>

                                            <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                            <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center">
                                                <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                <span className="text-small text-gray-500">No files selected</span>
                                            </li>
                                            </ul>
                                        </div>
                                   </article>
                                </div>
                            </div>
                            
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                <div className="relative">
                                    
                                    <p>Enter episode details</p>

                                    <div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-1/6">
                                                <p className="text-gray-400 mr-2 text-md">Title:</p>
                                            </div>
                                            <div className="w-full">
                                                <input className="appearance-none block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" value="The Dee Podcast" type="text"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-1/6">
                                                <p className="text-gray-400 mr-2 text-md">Series:</p>
                                            </div>
                                            <div className="inline-block relative w-full">
                                                <select className="appearance-none block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                <option>The Underdog </option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <div className="flex items-center mt-2 mr-10 w-1/2">
                                            <div className="w-2/6">
                                                <p className="text-gray-400 mr-2 text-md">Season:</p>
                                            </div>
                                            <div className="inline-block relative w-full ml-6">
                                                <select className="appearance-none block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2 w-1/2">
                                            <div className="w-2/6">
                                                <p className="text-gray-400 mr-2 text-md">Episode:</p>
                                            </div>
                                            <div className="inline-block relative w-full ml-2">
                                                <select className="appearance-none block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                <option>12</option>
                                                
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="flex items-center mt-2">
                                            <div className="w-1/6">
                                                <p className="text-gray-400 mr-2 text-md">Description:</p>
                                            </div>
                                            <div className="w-full">
                                                <textarea className="appearance-none h-20 block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">Hello Everyone, welcome to the Dee Podcast. Here you will be inspired to become the best version of yourself - the man/woman that God created you to be. So, subscribe and let's vibe together.
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="text-gray-400 mr-2 text-md">Privacy:</p>
                                    </div>
                                    <div className="inline-block relative w-full">
                                        <select className="appearance-none block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                        <option>Public</option>
                                        <option>Private</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className={openTab === 4 ? "block" : "hidden"} id="link4">

                                <div className="relative">
                                    
                                    <div className="flex items-center mt-2 mb-2">
                                            <div className="w-1/6">
                                                <p className="text-gray-400 mr-2 text-md">Upload date:</p>
                                            </div>
                                            <div className="w-full">
                                                <input className="appearance-none block w-full text-gray-400 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" type="datetime"/>
                                            </div>
                                    </div>

                                    <SubmitButton text="Upload Episode" onClick={() => {}}/>

                                </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
                </section>
                </DashboardMain>
        </div>
    )
}

export default NewEpisode