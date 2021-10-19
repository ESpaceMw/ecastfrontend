import { 
    CloudUploadOutline, 
    FolderOpenOutline, 
    MusicNoteOutline, 
    NewspaperOutline
 } from "heroicons-react"

import { 
    useState, 
    useEffect } from "react";

import DashboardMain from "../../../../components/layouts/DashboardMain"

import SubmitButton from "../../../../components/SubmitButton";

import ReactAudioPlayer from "react-audio-player";

import DatePicker from "react-datepicker";

import { useHistory } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const NewEpisode = () => {

    const [openTab, setOpenTab] = useState(1);

    const color = 'blue'

    const [audioFile, setAudioFile] = useState('');
    
    const [audioUploadFile, setAudioUploadFile] = useState();

    const [uploadedImage, setUpLoadedImage] = useState('')

    const [uploadImage, setUpLoadImage] = useState('')

    const [startDate, setStartDate] = useState(new Date());

    const [episodes, setEpisodes] = useState([])

    const [privacy, setPrivacy] = useState('Public')

    const [title, setTitle] = useState('')

    const [description, setDescription] = useState('')

    const [serie, setSerie] = useState('')

    const [season, setSeason] = useState('01')

    const [episode, setEpisode] = useState('01')

    const [onLoad, setOnLoad] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/podcasts/series/get',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channels_id: localStorage.getItem('channel_id')?.toString() })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setEpisodes(data.series)            
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const history = useHistory()

    const handleSubmit = () => {

        const formData = new FormData();

        formData.append("clip_art", uploadImage)
        formData.append("audio_file", audioUploadFile)
        formData.append("title", title)
        formData.append("privacy", privacy)
        formData.append("description", description)
        formData.append("uploaded_at", new Date(startDate).getFullYear().toString() + '-' + new Date(startDate).getMonth().toString() + '-' + new Date(startDate).getDay().toString())
        formData.append("season", season)
        formData.append("ePNumber", episode)
        formData.append("podcast_serie_id", serie)
        formData.append("channels_id", localStorage.getItem('channel_id').toString())

        const requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        }

        fetch("https://api.ecast.espacemw.com/api/v1/podcasts/episodes/create", requestOptions)
            .then(response => response.text())
            .then(result => {
                setOnLoad(false)
                history.push('/dashboard/episodes')
            })
            .catch(error => {
                console.log('error', error)
                setOnLoad(false)
            });
    }
    
    return(
        <div className="dark:bg-gray-900">
            <DashboardMain>
            <section className="body-font dark:bg-gray-900 bg-white shadow-sm hover:shadow-md rounded-sm">
                <div className="flex mx-auto flex-wrap mb-20  p-2 sm:px-40 px-5">
                    <ul
                        className="sm:flex mb-0 sm:flex-wrap pt-3 pb-4"
                        role="tablist"
                    >
                        <li className="mr-2 text-center">
                        <a
                            className={
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-full text-md sm:w-full justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 1
                                ? "text-" + color + "-400 dark:bg-gray-800 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300")
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
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-full text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 2
                                ? "text-" + color + "-400 dark:bg-gray-800 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white dark:bg-gray-900  text-gray-600 dark:text-gray-300")
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
                            "text-md  dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-full text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 3
                                ? "text-" + color + "-400 dark:bg-gray-800 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300")
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
                            "dark:hover:text-gray-300  font-medium inline-flex items-center sm:px-6 py-3 w-full text-md sm:w-auto justify-center sm:justify-start border-b-2 border-gray-300 title-font bg-gray-50 leading-none  tracking-wider rounded-t" +
                            (openTab === 4
                                ? "text-" + color + "-400 dark:bg-gray-800 dark:text-blue-400 text-blue-400 border-b-2 border-blue-400"
                                : "bg-white dark:bg-gray-900 text-gray-600  dark:text-gray-300")
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
                    <div className="relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-6">
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            setOnLoad(true)
                            handleSubmit()
                        }}>
                        <div className="py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className="relative">
                                    
                                    <div className="container mx-auto max-w-screen-lg h-full overflow-hidden">
                                    
                                    <article aria-label="File Upload Modal" className="relative overflow-hidden h-full flex flex-col bg-white dark:bg-gray-900">
                                
                                        <div className="h-full overflow-hidden p-8 w-full flex flex-col ">
                                            
                                            <div>
                                                <label className="block font-medium text-gray-700 dark:text-gray-200">Audio file</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed hover:border-green-400 transition duration-150 rounded-sm dropzone">
                                                <div className="space-y-1 text-center">
                                                    <MusicNoteOutline className="text-gray-400 w-12 h-12 mx-auto"/>
                                                    <div className="flex text-gray-600">
                                                    <label
                                                        htmlFor="audio-upload"
                                                        className="relative outline-none focus:ring-none cursor-pointer bg-white dark:bg-gray-900 rounded-sm font-medium text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >
                                                        <span>Upload an audio file</span>
                                                        <input id="audio-upload" name="audio-upload" type="file" className="sr-only outline-none focus:ring-none"  
                                                        onChange={(event) => {
                                                            setAudioUploadFile(event.target.files[0])
                                                            setAudioFile(URL.createObjectURL((event.target.files[0])))
                                                            }}/>
                                                    </label>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-300">MP3, OOG up to 10MB</p>
                                                </div>
                                                </div>
                                            </div>

                                            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900 dark:text-gray-300">
                                            Preview
                                            </h1>

                                            <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                            <ReactAudioPlayer
                                                    src={audioFile}
                                                    autoPlay={false}
                                                    controls
                                                    style={{ width: '100%' }}
                                                />
                                            
                                            </ul>
                                        </div>
                                   </article>
                                </div>

                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className="relative">
                                    
                                <div className="container mx-auto max-w-screen-lg h-full">
                                    
                                    <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white dark:bg-gray-900">
                                
                                        <div className="h-full overflow-hidden p-8 w-full flex flex-col">
                                            <div>
                                                <label className="block font-medium text-gray-700 dark:text-gray-200">Cover photo</label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 hover:border-green-500 transition duration-150 border-dashed rounded-sm">
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
                                                        className="relative cursor-pointer outline-none focus:ring=none bg-white dark:bg-gray-900 font-medium text-blue-400 hover:text-blue-500"
                                                    >
                                                        <span>Upload an image</span>
                                                        <input onChange={(item) => {
                                                            setUpLoadImage(item.target.files[0])
                                                            setUpLoadedImage(URL.createObjectURL(item.target.files[0]))
                                                            }} id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    </div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-300">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                                </div>
                                            </div>

                                            <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900 dark:text-gray-300">
                                            Preview
                                            </h1>

                                            <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                                {uploadedImage !== '' ? <img className="object-cover w-64 h-64" src={uploadedImage} alt="uploaded-img"/>
                                                 :
                                                 <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center">
                                                    <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                <span className="text-small text-gray-500 dark:text-gray-300">No cover art selected</span>
                                            </li>
                                                 }
                                            
                                            </ul>
                                        </div>
                                   </article>
                                </div>
                            </div>
                            
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">

                                <div className="relative dark:text-gray-300">
                                    
                                    <p>Enter episode details</p>

                                    <div>
                                        <div className="sm:flex items-center mt-2">
                                            <div className="sm:w-1/6">
                                                <p className="mr-2 text-md">Title:</p>
                                            </div>
                                            <div className="w-full">
                                                <input 
                                                value={title} onChange={(item) => {setTitle(item.target.value)}}
                                                className="appearance-none dark:bg-gray-900 dark:border-gray-700 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" type="text"/>
                                            </div>
                                        </div>
                                        <div className="sm:flex items-center mt-2">
                                            <div className="sm:w-1/6">
                                                <p className="mr-2 text-md">Series:</p>
                                            </div>
                                            <div className="inline-block relative w-full">
                                                <select 
                                                value={serie} onChange={(item) => {setSerie(item.target.value)}}
                                                className="appearance-none dark:bg-gray-900 dark:border-gray-700 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                
                                                {episodes.map((value) => (
                                                    <option key={value.id} value={value.id}>{value.title}</option>
                                                ))}

                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 sm:flex items-center px-2 text-gray-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:flex w-full">
                                            <div className="sm:flex items-center mt-2 mr-10 w-full">
                                            <div className="sm:w-2/6">
                                                <p className="mr-2 text-md">Season:</p>
                                            </div>
                                            <div className="inline-block relative w-full sm:ml-6">
                                                <select 
                                                value={season} onChange={(item) => {setSeason(item.target.value)}}
                                                className="appearance-none dark:bg-gray-900 dark:border-gray-700 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                 {
                                                    ['01','02','03','04','05','06','07','08','09','10']
                                                    .map(element => (
                                                        <option>{element}</option>
                                                    ))
                                                }
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 sm:flex items-center px-2 text-gray-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:flex items-center mt-2 w-full">
                                            <div className="w-2/6">
                                                <p className="mr-2 text-md">Episode:</p>
                                            </div>
                                            <div className="inline-block relative w-full ml-2">
                                                <select 
                                                value={episode} onChange={(item) => {setEpisode(item.target.value)}}
                                                className="appearance-none dark:bg-gray-900 dark:border-gray-700 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                
                                                {
                                                    ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20']
                                                    .map(element => (
                                                        <option>{element}</option>
                                                    ))
                                                }
                                                
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 sm:flex items-center px-2 text-gray-400">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="sm:flex items-center mt-2">
                                            <div className="sm:w-1/6">
                                                <p className="mr-2 text-md">Description:</p>
                                            </div>
                                            <div className="w-full">
                                                <textarea value={description} onChange={(item) => {setDescription(item.target.value)}} className="appearance-none dark:bg-gray-900 dark:border-gray-700 h-20 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:flex items-center mt-2">
                                    <div className="sm:w-1/6">
                                        <p className="mr-2 text-md">Privacy:</p>
                                    </div>
                                    <div className="inline-block relative w-full">
                                        <select 
                                        value={privacy} onChange={(item) => {setPrivacy(item.target.value)}}
                                        className="appearance-none dark:bg-gray-900 dark:border-gray-700 block w-full text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                                            <option>Public</option>
                                            <option>Private</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 sm:flex items-center px-2 text-gray-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className={openTab === 4 ? "block" : "hidden"} id="link4">

                                <div className="relative dark:text-gray-200">
                                    
                                    <div className="flex items-center mt-2 mb-2">
                                            <div className="sm:w-1/6">
                                                <p className="mr-2 text-md">Date:</p>
                                            </div>
                                            <div className="w-full">
                                                <DatePicker className="w-full py-2 dark:bg-gray-900 outline-none border dark:border-gray-700 pl-2" selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </div>
                                    </div>

                                    <SubmitButton text="Upload Episode" onLoad={onLoad} onClick={() => {}}/>

                                </div>
                            </div>
                            
                        </div>
                        </div>
                        </form>
                    </div>
                </div>
                </section>
                </DashboardMain>
        </div>
    )
}

export default NewEpisode