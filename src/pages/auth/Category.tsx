import Growth from './../../media/business-success-growing-growth-increase-up-concept-wooded-cube-block-with-word-growth_20693-206.jpg'
import Engage from './../../media/s2e9-engaging-influencers-LJnEWBfbpMj-sta84Bz7q3b.500x500.png'
import Currency from './../../media/curreny.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const categories = [
    {
        name: 'Science',
        image: Growth
    },
    {
        name: 'Humanitarian',
        image: Engage
    }
    ,
    {
        name: 'Finance',
        image: Currency
    }
]

const Category = () => {

    const [clicked, setClicked] = useState(false)
    
    return (
      <div className="bg-white px-32 py-10 min-h-screen">
          <div className="m-4">
              <div className="w-full rounded-full h-3 flex bg-gray-300">
                  <div className="w-4/5 h-3 animate-pulse bg-blue-400 rounded-full">

                  </div>
                  <div className="w-1/5 h-3 bg-gray-300 rounded-full">

                  </div>
              </div>
          </div>
          <div className="rounded-sm border shadow hover:shadow-md">
              <div className="bg-gray-100 p-3 text-lg font-semibold">
                  One last step
              </div>
              <div className="flex flex-wrap p-3">
                    {
                        categories.map((category) => (
                            <div style={{ backgroundImage: `url(${category.image})` }} className="w-1/4 mr-2 h-60 hover:opacity-90 transition duration-150 bg-cover">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    onChange={() => {
                                        clicked ? setClicked(false) : setClicked(true)
                                    }}
                                    className="h-3 w-4 dark:bg-transparent m-3 bg-white text-blue-600 focus:ring-blue-500 dark:border-gray-900 border-gray-300 rounded-none"
                                    />
                                    <p className="ml-3 text-white text-md font-medium">{category.name}</p>
                            </div>
                        ))
                    }
                    {
                        clicked === true ? <Link to="#" className="justify-end w-full mt-3 text-right text-white font-semibold bg-blue-400 hover:bg-blue-500 transition duration-150 rounded-sm py-3 px-8">
                            Continue
                        </Link> : <Link to="#" className="justify-end w-full mt-3 text-right text-white font-semibold bg-blue-400 hover:bg-blue-500 transition duration-150 rounded-sm py-3 px-8">
                            Skip
                        </Link>
                    }
                </div>
                
          </div>
      </div>
      )
}

export default Category