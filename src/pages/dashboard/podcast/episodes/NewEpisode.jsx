/* eslint-disable jsx-a11y/heading-has-content */
import { CloudUploadOutline, FolderOpenOutline, MusicNoteOutline, NewspaperOutline } from "heroicons-react"
import React, { useEffect } from "react";
import DashboardMain from "../../../../components/layouts/DashboardMain"
import SubmitButton from "../../../../components/SubmitButton";
import { useDropzone } from "react-dropzone";
import ReactAudioPlayer from "react-audio-player";

/* eslint-disable jsx-a11y/anchor-is-valid */
const NewEpisode = () => {

    const [openTab, setOpenTab] = React.useState(1);

    const color = 'blue'

    const [files, setFiles] = React.useState([]);


    const {getRootProps, getInputProps} = useDropzone(
        {accept: 'audio/*', noClick: true, noKeyboard: true, onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        }},
        )

        useEffect(() => () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        }, [files]);
    
    return(
        <div>
            <DashboardMain>
            <section className="body-font bg-white shadow-sm hover:shadow-md rounded-sm">
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
                                : "bg-white text-gray-600")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            <FolderOpenOutline className="mr-1 "/> STEP 1 
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 2
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white  text-gray-600")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            <FolderOpenOutline className="mr-1"/> STEP 2 
                        </a>
                        </li>
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 3
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white text-gray-600")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            <NewspaperOutline className="mr-1"/> STEP 3 
                        </a>
                        </li>

                        <li className="mr-2 text-center">
                        <a
                            className={
                            "dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-1/2 text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 4
                                ? "text-" + color + "-400 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white text-gray-600 ")
                            }
                            onClick={e => {
                            e.preventDefault();
                            setOpenTab(4);
                            }}
                            data-toggle="tab"
                            href="#link4"
                            role="tablist"
                        >
                            <CloudUploadOutline className="mr-1"/> STEP 4 
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
                                            
                                            <div>
                                                <label className="block font-medium text-gray-700">Audio file</label>
                                                <div {...getRootProps({className: "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed hover:border-green-400 transition duration-150 rounded-sm dropzone"})}>
                                                <div className="space-y-1 text-center">
                                                    <MusicNoteOutline className="text-gray-400 w-12 h-12 mx-auto"/>
                                                    <div className="flex text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-sm font-medium text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload an audio file</span>
                                                        <input {...getInputProps()} />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">MP3, OOG up to 10MB</p>
                                                </div>
                                                </div>
                                            </div>

                                            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                                            Preview
                                            </h1>

                                            <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                            {/* <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center">
                                                <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                <span className="text-small text-gray-500">No file selected</span>
                                            </li> */}
                                            {files.map((file) => (
                                                <ReactAudioPlayer
                                                {...console.log(file.preview)}
                                                    src={file.preview}
                                                    autoPlay={false}
                                                    controls
                                                    style={{ width: '100%' }}
                                                />
                                            ))
                                            }
                                            
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
                                            <div>
                                                <label className="block font-medium text-gray-700">Cover photo</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-sm">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                    >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    </svg>
                                                    <div className="flex text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                                </div>
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
                                                <p className="mr-2 text-md">Title:</p>
                                            </div>
                                            <div className="w-full">
                                                <input className="appearance-none block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" value="The Dee Podcast" type="text"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="w-1/6">
                                                <p className="mr-2 text-md">Series:</p>
                                            </div>
                                            <div className="inline-block relative w-full">
                                                <select className="appearance-none block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
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
                                                <p className="mr-2 text-md">Season:</p>
                                            </div>
                                            <div className="inline-block relative w-full ml-6">
                                                <select className="appearance-none block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
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
                                                <p className="mr-2 text-md">Episode:</p>
                                            </div>
                                            <div className="inline-block relative w-full ml-2">
                                                <select className="appearance-none block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
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
                                                <p className="mr-2 text-md">Description:</p>
                                            </div>
                                            <div className="w-full">
                                                <textarea className="appearance-none h-20 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">Hello Everyone, welcome to the Dee Podcast. Here you will be inspired to become the best version of yourself - the man/woman that God created you to be. So, subscribe and let's vibe together.
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-2">
                                    <div className="w-1/6">
                                        <p className="mr-2 text-md">Privacy:</p>
                                    </div>
                                    <div className="inline-block relative w-full">
                                        <select className="appearance-none block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
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
                                                <p className="mr-2 text-md">Date:</p>
                                            </div>
                                            <div className="w-full">
                                                <input className="appearance-none block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" type="datetime"/>
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