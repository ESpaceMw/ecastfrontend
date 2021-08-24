import { Link, useHistory } from 'react-router-dom'

import { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'

import { Oval } from 'react-loading-icons'

import { ExclamationCircleOutline } from 'heroicons-react'

const Category = () => {

    const [clicked, setClicked] = useState(false)

    const [categories, setCategories] = useState<any[]>([])

    const [categoryId, setCategoryId] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const [isProcessing, setIsProcessing] = useState(false)

    const [error, setError] = useState('')

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/category/categories',{
            method: 'get',
            headers: {'Content-Type':'application/json'}
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setCategories(data.categories)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }, [])

    const history = useHistory()

    const createUserCategory = (categoryId: string | number, userId: string | number) => {
        
        fetch('http://127.0.0.1:8000/api/v1/category/user-create',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ 
                user_id: userId,
                category_id: categoryId
            })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            if(data.message === 'success'){
                setIsProcessing(false)
                history.push('/sign-in')
            }   
        }).catch((err) => {
            setIsProcessing(false)
            console.log(err)
            setError('Oops! Something went wrong, try again')
        })
    }
    
    return (
      <div className="bg-white dark:bg-gray-900 px-32 py-10 min-h-screen">
          <div className="m-4">
              <div className="w-full rounded-full h-3 flex bg-gray-300 dark:bg-gray-700">
                  <div className="w-4/5 h-3 animate-pulse bg-blue-400 rounded-full">

                  </div>
                  <div className="w-1/5 h-3 bg-gray-300 dark:bg-gray-700 rounded-full">

                  </div>
              </div>
          </div>
          <div className="rounded-sm border dark:border-gray-700 shadow hover:shadow-md">
              <div className="bg-gray-100 dark:text-gray-200 dark:bg-gray-800 p-3 text-lg font-semibold">
                  One last step - Choose your category of interest
              </div>
              <div className="flex flex-wrap p-3">
                    {
                        !isLoading ? categories.map((category) => (
                            <div style={{ backgroundImage: `url('http://127.0.0.1:8000/storage/categories/${category.covert_art}')` }} className="w-1/4 mb-3 mr-2 h-60 hover:opacity-90 transition duration-150 bg-cover">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    onChange={() => {
                                        clicked ? setClicked(false) : setClicked(true)
                                        setCategoryId(category.id)
                                    }}
                                    className="h-3 w-4 dark:bg-transparent m-3 bg-white text-blue-600 focus:ring-blue-500 dark:border-gray-900 border-gray-300 rounded-none"
                                    />
                                    <p className="ml-3 text-white text-md font-medium">{category.name}</p>
                            </div>
                        )) : Array(6).fill(6).map((index) => (
                            <div className="w-1/4 mr-2 h-60 hover:opacity-90 transition duration-150 bg-cover">
                                <Skeleton height={10} width={40}/>
                                <p className="text-white text-md font-medium">
                                    <Skeleton height={20} width={80}/>
                                </p>
                            </div>
                        ))
                    }
                    
                    {error !== '' ? <p className="text-red-500 mb-2 text-sm font-semibold mt-2 flex items-center space-x-2">
                    <ExclamationCircleOutline className="w-5 h-5 mr-3"/>{error}</p> : ''
                    }
                    
                    {
                        clicked === true ?
                        
                        <button
                        onClick={() => {
                            setIsProcessing(true)
                            createUserCategory(categoryId, '2e')
                        }}
                        className="group w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-none text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                         > {isProcessing  ? <Oval className="w-5 h-5"/> : 'Continue'}</button>
                        
                        : <Link to="#" className="justify-end w-full mt-3 text-right text-white font-semibold bg-blue-400 hover:bg-blue-500 transition duration-150 rounded-sm py-3 px-8">
                            Skip
                        </Link>
                    }
                </div>
                
          </div>
      </div>
      )
}

export default Category