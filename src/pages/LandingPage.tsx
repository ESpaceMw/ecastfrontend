import Dude from '../media/dude.jpg'
import Girl from '../media/pexels-anna-nekrashevich-6802052.jpg'
import Brian from '../media/DrBrianMcGowanHeadshot-crop-1024x1024.jpg'
import Kit from '../media/kit.jpg'
import Currency from '../media/curreny.jpg'
import Chart from '../media/pexels-pixabay-265087.jpg'
import Windows from '../icons/windows.png'

const LandingPage = () => {
    return(
        <div className="dark:bg-gray-900">
          <section className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto flex px-24 py-10 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-gray-200">Starting a podcast has never been easier
                </h1>
                <p className="mb-8 leading-relaxed dark:text-gray-300">Get more customers, grow your ministry, touch more lives, increase trust, build brand loyalty, make money and do so much more through eCast.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-md">Get started</button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-sm" alt="hero" src={Dude}/>
              </div>
            </div>
          </section>

          <section className="body-font">
            <div className="container mx-auto flex py-5 px-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-sm" alt="hero" src={Girl}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-gray-200">Share and touch more lives. We've got everything it takes to help you live a more meaningful life
                </h1>
                <p className="mb-8 leading-relaxed dark:text-gray-300">Your ministry, movement or desire to transform the world is all possible. Your voice can make a difference, so why shouldn't we help you reach out to the world more?</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-md">Read more...</button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800">
            <div className="container px-24 py-10 mx-auto">
              <h3 className="text-3xl font-semibold text-center mb-5 dark:text-gray-200">The world is listening, Say something...</h3>
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Brian}/>
                    <p className="leading-relaxed dark:text-gray-300">Podcasting has helped me know more about my customer,  and it's no longer about how much I've gained in profit... it's about them, and it makes the whole difference because it's no longer just a business, we are serving!</p>
                    <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase dark:text-gray-200">Chikumbutso Thomas</h2>
                    <p className="text-gray-500 dark:text-gray-200">CEO @ Hype Productions</p>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Brian}/>
                    <p className="leading-relaxed dark:text-gray-300">Podcasting has helped me know more about my customer,  and it's no longer about how much I've gained in profit... it's about them, and it makes the whole difference because it's no longer just a business, we are serving!</p>
                    <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase dark:text-gray-200">Chikumbutso Thomas</h2>
                    <p className="text-gray-500 dark:text-gray-200">CEO @ Hype Productions</p>
                  </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div className="h-full text-center">
                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Brian}/>
                    <p className="leading-relaxed dark:text-gray-300">Podcasting has helped me know more about my customer,  and it's no longer about how much I've gained in profit... it's about them, and it makes the whole difference because it's no longer just a business, we are serving!</p>
                    <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase dark:text-gray-200">Chikumbutso Thomas</h2>
                    <p className="text-gray-500 dark:text-gray-200">CEO @ Hype Productions</p>
                  </div>
                </div>
              </div>
              <button className="bg-blue-400 hover:bg-blue-500 mt-5 px-2 py-2 text-md text-white">Read more...</button>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex py-10 px-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-sm" alt="hero" src={Kit}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-gray-200">You too your podcast can be on the world's biggest streaming services!
                </h1>
                <p className="mb-8 leading-relaxed dark:text-gray-300">Record a podcast today and we will help you get it on Spotify, Apple podcasts, Google podcasts and many other major podcast distributors to reach out to millions of more people worldwide!</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-md">Create your podcast</button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto flex py-10 px-24 md:flex-row flex-col items-center">
              
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-gray-200">Earn Revenue with eCast as you host your podcast with us 
                </h1>
                <p className="mb-8 leading-relaxed dark:text-gray-300">Every podcaster does it for the love of their craft, but love don't put food on the table! We get it, and that's why we've got a way to make you earn some cheddar!</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-md">Read more...</button>
                </div>
              </div>

              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-sm" alt="hero" src={Currency}/>
              </div>

            </div>
          </section>
          
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex py-10 px-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center transform hover:scale-105 transition delay-150 duration-300 rounded-sm" alt="hero" src={Chart}/>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900 dark:text-gray-200">Powerful podcast stats and effective promotion at your fingertips 
                </h1>
                <p className="mb-8 leading-relaxed dark:text-gray-300">Like for reals? Oh yes, we've got geographical data powerful insights on all your episodes, subscribers, likes, comments and so much more to give you a clear picture on how your podcast is performing. We also got mechanisms in place to promote your podcast, series and episodes.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-md">Read more...</button>
                </div>
              </div>
            </div>
          </section>

          <section className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800">
            <div className="container px-24 py-5 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900 dark:text-gray-200">Subscribe to eCast Newsletters</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base dark:text-gray-300">Get daily updates on new podcast releases, trends and many more from eCast right into your mail inbox.</p>
              </div>
              <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          
                <div className="relative flex-grow w-full">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:border-transparent dark:text-gray-200">Email address</label>
                  <input type="email" id="email" name="email" className="w-full dark:border-gray-700 dark:bg-transparent dark:text-gray-300 bg-gray-50 bg-opacity-50 rounded-sm border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-sm text-md">Subscribe</button>
              </div>
            </div>
          </section>


          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
              <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <h2 className="text-xs text-blue-400 tracking-widest font-semibold title-font mb-1">GET THE MOBILE APP</h2>
                <h1 className="md:text-3xl text-2xl font-semibold title-font text-gray-900 dark:text-gray-300">Download eCast App</h1>
              </div>
              <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                <button className="bg-gray-100 dark:bg-gray-800 inline-flex py-3 px-5 rounded-sm items-center hover:bg-gray-200 focus:outline-none">
                  <img src={Windows} className="w-6 h-6" alt="windows"/>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1 dark:text-gray-200">Download on </span>
                    <span className="title-font font-medium dark:text-gray-300">Windows Store</span>
                  </span>
                </button>
                <button className="bg-gray-100 dark:bg-gray-800 inline-flex py-3 px-5 rounded-sm items-center hover:bg-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1 dark:text-gray-200">GET IT ON</span>
                    <span className="title-font font-medium dark:text-gray-300">Google Play</span>
                  </span>
                </button>
                <button className="bg-gray-100 dark:bg-gray-800 inline-flex py-3 px-5 rounded-sm items-center hover:bg-gray-200 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-600 mb-1 dark:text-gray-200">Download on the</span>
                    <span className="title-font font-medium dark:text-gray-300">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
    )
}

export default LandingPage

