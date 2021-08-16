
/* eslint-disable jsx-a11y/anchor-is-valid */
const OnBoarding = () => {
    return(
        <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <main className="mt-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Clearly the best sound experience. </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Here we've got the best songs and podcasts in the country, and our podcast hosting service is no match with the rest!
              </p>
              <div className="mt-5 sm:mt-8sm:flex flex-col sm:justify-center lg:justify-start">
                <div className="rounded-md shadow mb-3 ">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-blue-400 hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
                  >
                    Web Player
                  </a>
                </div>
                <div className="sm:mt-0 mt-5">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-blue-400 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Podcast Hosting
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/* <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        /> */}
      </div>
      <div className="bg-gray-100 mb-0">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 eCast —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">All rights reserved.</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500 border-r pr-3">
          Jobs
        </a>
        <a className="text-gray-500 border-r pr-3 pl-3">
          Blog
        </a><a className="text-gray-500 pl-3">
          Download
        </a>
      </span>
    </div>
    </div>
    </div>
    )
}

export default OnBoarding