import { ExclamationCircleOutline } from "heroicons-react"
import { useState } from "react"
import SubmitButton from "../../components/SubmitButton"

const ResetPassword = () => {

    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    
    return(
        <div className="min-h-screen px-5 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full mb-10">
          <div className="items-center">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300">Create a new password</h2>
            <p className="text-center mt-2 font-medium dark:text-gray-300">
              Get a new password for your eCast membership
            </p>
            </div>
          <form className="mt-2 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded shadow-sm -space-y-px">
              
              <div className="py-4">
                <label className="block text-gray-700 dark:text-gray-300">Password<span className="text-red-500">*</span></label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Type in your new password"
                />
              </div>

              <div className="">
                <label className="block text-gray-700 dark:text-gray-300">Confirm password<span className="text-red-500">*</span></label>
                <input
                  id="c-password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Re-type new password"
                />
              </div>

              {password === confirmPassword ? <></> : <p className="text-red-500 text-sm font-semibold pt-3 flex items-center space-x-2">
                    <ExclamationCircleOutline className="w-5 h-5 mr-3"/> Passwords do not match</p>}
                    
              </div>

            <div>
              <SubmitButton text="Reset password" onLoad={false}/>
            </div>

          </form>
        </div>
      </div>
    )
}

export default ResetPassword