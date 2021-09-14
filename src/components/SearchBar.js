import { useState, useEffect } from "react"

import { SearchIcon } from "@heroicons/react/outline"

import { X } from "heroicons-react"

import { Link } from "react-router-dom"


const SearchBar = ({
    placeholder
}) => {

    const [filtered, setFiltered] = useState([])

    const [wordEntered, setWordEntered] = useState("")

    const [podcasts, setPodcasts] = useState([])

    const handleFilter = (event) => {

    const searchQuery = event.target.value

    setWordEntered(searchQuery)

    const newFilter = podcasts.filter((value) => {
        
        return value.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    if (searchQuery === ""){
        setFiltered([])
    }else{
        setFiltered(newFilter)
    }

    }

    const clearText = () => {
        setFiltered([])
        setWordEntered("")
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/podcasts/episodes/all',{
            method: 'get',
            headers: {'Content-Type':'application/json'}
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setPodcasts(data.podcasts)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
      <div className="relative border-r border-l border-b dark:border-gray-900">
          <input 
            type="text"
            className="flex-1 appearance-none block w-full text-gray-500 border border-gray-300 dark:text-gray-300 dark:bg-transparent dark:border-gray-900 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
            placeholder={placeholder}
            onChange={handleFilter}
            value={wordEntered}
            />
            {
                filtered.length !== 0 && (
                    <div className="top-0 shadow p-2">
                        {
                            filtered.map((value, key) => {
                                return(
                                    <div className="hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 p-2 justify-between">
                                        <Link to="#">{value.title}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                {
                    filtered.length === 0 ? <SearchIcon className="text-gray-500 w-6 h-6"/>
                    : <X className="text-gray-500 w-6 h-6 transition delay-150 duration-300"
                    onClick={(e) => {
                        e.preventDefault()
                        clearText()
                    }}
                      />
                }
            </button>
      </div>
    )
}

export default SearchBar

