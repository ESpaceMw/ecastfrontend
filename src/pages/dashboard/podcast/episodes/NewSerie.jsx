import DashboardMain from "../../../../components/layouts/DashboardMain"

import PrimaryButton from '../../../../components/SubmitButton'

import { useState, useEffect } from "react"

import { useHistory } from "react-router"

import UrlService from "../../../../services/UrlService"

const NewSeries = () => {

    const [uploadedImage, setUpLoadedImage] = useState('')

    const [selectedImage, setSelectedImage] = useState('')

    const [categories, setCategories] = useState([])

    const [onLoad, setOnLoad] = useState(false)

    const [title, setTitle] = useState('')

    const [getCategory, setGetCategory] = useState('Science')

    const [seasons, setSeasons] = useState('1')

    const [description, setDescription] = useState('')
    
    const history = useHistory()

    useEffect(() => {
        fetch(UrlService.seriesCategories(),{
            method: 'get',
            headers: {'Content-Type':'application/json'}
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setCategories(data.categories)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append("cover_art", uploadedImage);
        formData.append("title", title)
        formData.append("channels_id", localStorage.getItem('channel_id').toString())
        formData.append('description', description)
        formData.append('seasons', seasons)
        formData.append('subscription_type', 'Basic')
        formData.append('category', getCategory)

        const requestOptions = {
            method: 'POST',
            
            body: formData,
        };

        fetch(UrlService.createSeries(), requestOptions)
        .then(response => response.json())
        .then(result => {
            setOnLoad(false)
            if(result.message === "You have successfully created a new series"){
            history.push('/dashboard/episodes')
        }})
        .catch(error => {
            console.log('error', error)
            setOnLoad(false)
        });
    }

    return(
        <div className="dark:bg-gray-800">
        <DashboardMain>
            <div className="bg-white overflow-hidden dark:bg-gray-900 rounded-sm p-3 shadow-sm hover:shadow-mg">
                <h3 className="font-semibold text-lg dark:text-gray-200">Create a new podcast episode</h3>

                <div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        setOnLoad(true)
                        handleSubmit()
                    }}>
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
                                                            setUpLoadedImage(item.target.files[0])
                                                            setSelectedImage(URL.createObjectURL(item.target.files[0]))
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
                                                {uploadedImage ? <img className="object-cover w-64 h-64" src={selectedImage} alt="uploaded-img"/>
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
                    <div className="flex items-center mt-2">
                        <div className="w-1/6">
                            <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Title:</p>
                        </div>
                        <div className="w-full">
                            <input 
                            className="appearance-none block w-full dark:bg-transparent dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1" 
                            type="text"
                            value={title}
                            onChange={(event) => {
                                setTitle(event.target.value)
                            }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-1/6">
                            <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Description:</p>
                        </div>
                        <div className="w-full">
                            <textarea 
                            name="description" 
                            id="description" 
                            value={description}
                            onChange={(event) => {
                                setDescription(event.target.value)
                            }}
                            className="dark:text-gray-300 dark:bg-transparent dark:border-gray-700 appearance-none h-20 block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                            </textarea>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-1/6">
                            <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Category</p>
                        </div>
                        <div className="inline-block relative w-full">
                            <select
                             onChange={(event) => setGetCategory(event.target.value)}
                             id="category" name="category" className="appearance-none block w-full dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                            {
                                categories.map((category) => (
                                    <option key={category.id}>{category.name}</option>
                                ))
                            }
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="w-1/6">
                            <p className="text-gray-700 mr-2 text-md dark:text-gray-200">Seasons</p>
                        </div>
                        <div className="inline-block relative w-full">
                            <select
                            value={seasons}
                            onChange={(event) => {
                                setSeasons(event.target.value)
                            }}
                             className="appearance-none block w-full dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2 mt-2">
                        <PrimaryButton 
                        text="Submit"
                        onLoad={onLoad}
                        />
                    </div>
                    </form>
                </div>
            </div>
        </DashboardMain>
        </div>
    )
}

export default NewSeries