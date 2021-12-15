import { Heart, ThumbUpOutline } from "heroicons-react"
// import Chippo from '../../media/FB_IMG_1639525012821.jpg'

/* eslint-disable jsx-a11y/anchor-is-valid */
const Blog = () => {
    return(
      <div className="w-full">
          <section className="text-gray-600 body-font">
            <div className="py-10 p-10 w-full bg-cover"  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1494883759339-0b042055a4ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjB3cml0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80)` }}>
                <div className="flex flex-wrap w-full mb-20 " >

                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">What's happening around eCast community? Check out our latest articles</h1>
                </div>

                <div className="lg:w-1/2 w-full flex flex-col items-center justify-center">
                    <div className="w-28 h-28 bg-white rounded-full items-center flex justify-center">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12 animate-pulse text-blue-400" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </div>
                    <div className="w-10 h-10 -mt-10 -ml-20 bg-white rounded-full items-center flex justify-center">
                        <Heart className="w-5 h-5 text-red-500"/>
                    </div>
                    <div className="w-10 h-10 -mt-20 -mr-32 bg-white rounded-full items-center flex justify-center">
                        <ThumbUpOutline className="w-5 h-5 text-yellow-500"/>
                    </div>
                    <p className="text-blue-400 text-2xl font-bold mt-20">#eCastHostingSite</p>
                </div>
                </div>
                <div className="w-full relative px-3 mb-6">
            </div>

            </div>
            
            </section>

            {/* <div className="mt-3 dark:bg-gray-700">
                
            </div> */}
      </div>
      )
}

export default Blog