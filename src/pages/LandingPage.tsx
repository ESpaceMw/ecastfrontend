const LandingPage = () => {
    return(
        <div>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-24 py-10 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Starting a podcast has never been easier
                </h1>
                <p className="mb-8 leading-relaxed">Get more customers, grow your ministry, touch more lives, increase trust, build brand loyalty, make money and do so much more through eCast.</p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-lg">Get started</button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div style={{ backgroundImage: `url('https://dummyimage.com/720x600')` }}>

                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default LandingPage

