import SubmitButton from "../../components/SubmitButton"

const ForgotPassword = () => {
    return (
      <div className="min-h-screen px-5 flex items-center justify-center bg-gray-50 dark:bg-black">
        <div className="max-w-md w-full mb-10">
          <div className="items-center">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300">Forgot your password?</h2>
            <p className="text-center mt-2 font-medium dark:text-gray-300">
              We'll email you instructions on how to reset it.
            </p>
            </div>
          <form className="mt-2 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded shadow-sm -space-y-px">
              
              <div className="py-4">
                <label className="block text-gray-700 dark:text-gray-300">Email<span className="text-red-500">*</span></label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Your email address"
                />
              </div>
              </div>

            <div>
              <SubmitButton text="Reset password" onLoad={false}/>
            </div>

          </form>
        </div>
      </div>
      )
}

export default ForgotPassword