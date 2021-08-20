import { QuestionMarkCircle } from "heroicons-react"

import { useState } from "react"

interface Props {
    title: string
}

const Item: React.FC<Props> = ({ title, children }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border dark:border-gray-600 shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium dark:text-gray-300">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 dark:border-gray-600 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 dark:text-gray-400">{children}</p>
        </div>
      )}
    </div>
  );
};

const HelpCenter = () => {
  return (
    <div className="dark:bg-black">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <div className="flex items-center mb-6 mx-auto justify-center w-12 h-12 rounded-full hover:bg-blue-400 dark:hover:bg-blue-700 transition delay-150 duration-300 bg-blue-50 dark:bg-blue-400">
              <QuestionMarkCircle className="dark:text-gray-300 hover:text-white dark:hover:text-gray-300"/>
            </div>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl md:mx-auto">
              Frequently asked questions
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
              Many people across the globe has asked the following questions frequently.
              Find a response that fits your question at hand.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="What payment methods do you accept?">
            <div className="flex items-center space-y-2">
                <p> <span className="font-semibold text-md text-blue-400 mr-2">eCast Team⭐</span>
                We currently accept Visa's for international transfers and Airtel Money & Mpamba for Local (Malawi) transactions. Thank you!
                </p>
            </div>
          </Item>
          <Item title="The first mate and his Skipper too will do?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Is the Space Pope reptilian!?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How much money you got on you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>

        <div className="mt-10">
        <p className="text-blue-400 font-semibold">
          Not what you're looking for?
        </p>
        <textarea
          placeholder="Ask a question"
          className="mt-4 dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
        />
        <button
                type="submit"
                className="mt-4 group w-full flex justify-center p-4 border border-transparent text-sm font-medium rounded-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              >
                Send
              </button>
        </div>

      </div>
    </div>
  </div>
  );
};

export default HelpCenter