const AboutUs = () => {
    return(
      <div>
          <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-800 opacity-60">
                <iframe width="100%" height="100%" frameBorder="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Blantyre,Malawi&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 rounded-sm p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-900 text-lg mb-1 font-semibold dark:text-gray-200">Feedback</h2>
                <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">Tell us what's on your mind. Query? Question? Send us a message</p>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-md text-gray-600 dark:text-gray-200">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-transparent dark:text-gray-200 rounded-sm border border-gray-300 focus:border-blue-500 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="message" className="leading-7 text-md text-gray-600 dark:text-gray-300">Message</label>
                    <textarea id="message" name="message" className="w-full bg-transparent rounded-sm border border-gray-300 focus:border-blue-500 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <button className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded-sm text-lg">Send message</button>
                <p className="text-xs text-gray-500 mt-3 dark:text-gray-300">We are happy to hear from you❤.</p>
                </div>
            </div>
            </section>
      </div>)
}

export default AboutUs