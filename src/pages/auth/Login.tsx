/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ExclamationCircleOutline } from 'heroicons-react'

import { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import PrimaryButton from '../../components/SubmitButton'

import LoginService from '../../services/auth/LoginService'

const Login  = () => {

  const history = useHistory()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [isChecked, setIsChecked] = useState(false)

  const [loginState, setLoginState] = useState('')

  const [onLoading, setOnLoading] = useState(false)

  const [showError, setShowError] = useState('')

  async function handleLogin (email: string, password: string){

    
    const postData = {

      email: email,

      password: password

    }

    const response = await LoginService.processLogin(postData)


    if(response.access_token){

      setOnLoading(false)
      setLoginState(response.access_token)
      
      LoginService.handleLoginSuccess(response, isChecked)
      history.push('/dashboard/overview')

    }else{
      if(response === false){
        setOnLoading(false)
        console.log(loginState)
        setShowError('Error validating your member details')
      }
    }
    

  }

  return (
    <>

    <div className="min-h-screen px-5 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full mb-10">
          <div>

            <h2 className="text-center text-3xl font-extrabold dark:text-gray-300 text-gray-900">Welcome back</h2>
            
            <button type="button" className="w-full mt-4 block bg-white dark:bg-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-300 text-gray-900 font-semibold rounded-none p-3 border border-gray-300 dark:border-gray-700">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                <span className="ml-4"> Log in with Google</span>
              </div>
            </button>

            <p className="text-center mt-2 font-medium dark:text-gray-300">
              Or, sign in with your email
            </p>

          </div>

          <form className="mt-2 space-y-6" onSubmit={(event) => {
            event.preventDefault()
            setOnLoading(true)
            handleLogin(email, password)
          }} method="POST">

            {showError !== "" ? <p className="text-red-500 text-sm font-semibold mt-2 flex items-center space-x-2">
                    <ExclamationCircleOutline className="w-5 h-5 mr-3"/>{showError}</p> : ''}

            <input type="hidden" name="remember" defaultValue="true" />

            <div className="rounded shadow-sm -space-y-px">
              <div className="mb-3">
                <label className="block text-gray-700 dark:text-gray-300">Email</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onChange={() => isChecked ? setIsChecked(false) : setIsChecked(true)}
                  className="h-4 w-4 dark:bg-transparent bg-white text-blue-400 focus:ring-blue-500 dark:border-gray-900 border-gray-300 rounded-none"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  Keep me signed in
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-blue-400 hover:text-blue-500">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div>
              <PrimaryButton 
              text="Continue to sign in"
              onLoad={onLoading}
              />
            </div>

            <div>
                <p className="text-center justify-center text-sm dark:text-gray-300">
                  Don’t you have an account? <span className="text-blue-500 hover:text-blue-700">
                  <Link to="/sign-up">Sign up</Link>
                  </span>
                </p>
            </div>
          </form>
        </div>
      </div>
    </>    
  )
}

export default Login