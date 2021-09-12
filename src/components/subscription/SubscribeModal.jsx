import { Transition } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";

import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import axios from "axios";

const SubscribeModal  = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const trigger = useRef(null);
  const searchContent = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!searchOpen || searchContent.current.contains(target) || trigger.current.contains(target)) return;
      setSearchOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!searchOpen || keyCode !== 27) return;
      setSearchOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const billingDetails = {
      name: '',
      email: '',
      address: {
        city: '',
        line1: '',
        state: '',
        postal_code: ''
      }
    }

    const cardElement = elements.getElement("card");

    try {
      const { data: clientSecret } = await axios.post("../../api/payment_intents", {
        amount: 4500 * 100
      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        console.log(paymentMethodReq.error.message);
        return;
      }

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        console.log(error);
        return;
      }
    } catch (err) {
      console.log(err);
    }

  };

  const cardElementOptions = {
    style: {
      base: {
        color: "white", "::placeholder" : {color: "white"}
      },
      invalid: {
        color: "red"
      }
    }
    ,hidePostalCode: true
  }

  return (
    <div>
      <button 
        ref={trigger}
        onClick={() => { setSearchOpen(!searchOpen) }}
        className="bg-green-400 hover:bg-green-500 text-md text-white py-2 px-8">
            Subscribe
        </button>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
        show={searchOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id="search-modal"
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={searchOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div className="bg-white dark:bg-gray-900 dark:text-gray-200 overflow-auto w-1/2 shadow-lg" ref={searchContent}>
          
          <form  onSubmit={handleSubmit}>
            <div/>
            <div className="bg-gray-100 dark:bg-gray-800 p-3">
                <h3 className="font-semibold text-md">Checkout</h3>
            </div>
            <div className="p-3">
                <label className="block text-gray-700 dark:text-gray-300">Name on card</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
                      placeholder="Enter the name on the card"
                    />
            </div>
            <div className="ml-3 mr-3 mb-3">
                <label className="block text-gray-700 dark:text-gray-300"> Credit card details</label>
                <div className="w-full p-4 dark:border-gray-700 border hover:border-blue-400">
                    <CardElement options={cardElementOptions}/>
                </div>
            </div>

            <div className="flex items-center pl-3">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onChange={() => {}}
                  className="h-4 w-4 dark:bg-transparent bg-white text-blue-400 focus:ring-blue-400 dark:border-gray-900 border-gray-300 rounded-none"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  I agree to eCast <span className="text-blue-400 underline">privacy policies</span> on visa net transactions.
                </label>
              </div>

            <div className="w-full p-3">
                <button className="bg-blue-400 hover:text-gray-100 hover:bg-blue-500 transition duration-150 w-full py-2 justify-center text-white rounded-sm  m-20text-white" type="submit" disabled={!stripe || !elements}>
                Pay MK5,000.00
            </button>
            </div>

            </form>
        </div>
      </Transition>
    </div>
  )
}

export default SubscribeModal