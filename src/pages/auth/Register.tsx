/* eslint-disable jsx-a11y/anchor-is-valid */
import { ExclamationCircleOutline } from 'heroicons-react'
import { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector'
import { Link, useHistory } from 'react-router-dom'
import DatePicker from '../../components/DatePicker'
import SubmitButton from '../../components/SubmitButton'
import RegisterService from '../../services/auth/RegisterService'


const Register = () => {

  const [firstName, setFirstName] = useState('')

  const [lastName, setLastName] = useState('')

  const [email, setEmail] = useState('')

  const [phoneNumber, setPhoneNumber] = useState('')

  const [gender, setGender] = useState('M')

  const [dateOfBirth, setDateOfBirth] = useState('')

  const [country, setCountry] = useState('Malawi')

  const [city, setCity] = useState('')

  const [password, setPassword] = useState('')

  const [c_password, setCPassword] = useState('')

  const [registerStatus, setRegisterStatus] = useState('')

  async function handleRegister (email: string, phoneNumber: string, gender: string, firstName: string, lastName: string, dateOfBirth: string, country: string, city: string, password: string){
    
    const postData = {

      first_name: firstName,

      last_name: lastName,

      gender: gender,

      date_of_birth: dateOfBirth,

      country: country,

      city: city,

      email: email,

      phone_number: phoneNumber,

      password: password

    }

    const response = await RegisterService.processRegister(postData)

    setRegisterStatus(response)

  }

  let history = useHistory();
  
    return (
          <div className="min-h-screen px-5 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="max-w-md w-full mb-10">
              <div>
                <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300 mt-4">Join the eCast Community</h2>
                <button type="button" className="w-full mt-4 block bg-white dark:bg-gray-900 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 dark:text-gray-300 font-semibold rounded-none p-3 border border-gray-300 dark:border-gray-700">
                  <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                  <span className="ml-4"> Sign up with Google</span>
                  </div>
                </button>
                <p className="text-center mt-2 font-medium dark:text-gray-300">
                  Or, sign up with your email
                </p>
              </div>
              <form className="mt-2 space-y-6" onSubmit={(event) => {
                event.preventDefault()
                handleRegister(email, phoneNumber, gender, firstName, lastName, dateOfBirth, country, city, password)
              }} method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="space-y-2">
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">First name<span className="text-red-500">*</span></label>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value)
                      }}
                      autoComplete="name"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Last name<span className="text-red-500">*</span></label>
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      value={lastName}
                      onChange={(event) => {
                        setLastName(event.target.value)
                      }}
                      autoComplete="name"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Your last name"
                    />
                  </div>
                  <div className="mt-4">
                      <label className="block text-gray-700 dark:text-gray-300">Gender<span className="text-red-500">*</span></label>
                      <div className="inline-block relative w-full">
                          <select value={gender}
                            onChange={(event) => {
                              setGender(event.target.value)
                            }} id="gender" name="gender" className="appearance-none block w-full text-gray-700 text-md border border-gray-300 rounded-sm py-2 px-2 leading-tight focus:outline-none focus:ring-1">
                            <option>M</option>
                            <option>F</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                      </div>
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Date of birth<span className="text-red-500">*</span></label>
                    <DatePicker/>
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Country<span className="text-red-500">*</span></label>
                    <CountryDropdown
                    classes="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      value={country}
                      onChange={(val) => setCountry(val)} />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">City<span className="text-red-500">*</span></label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={city}
                      onChange={(event) => {
                        setCity(event.target.value)
                      }}
                      autoComplete="name"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Your City"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Phone number<span className="text-red-500">*</span></label>
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="phone"
                      value={phoneNumber}
                      onChange={(event) => {
                        setPhoneNumber(event.target.value)
                      }}
                      autoComplete="name"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Your Phone number"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Email<span className="text-red-500">*</span></label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                      autoComplete="email"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Password<span className="text-red-500">*</span></label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }}
                      autoComplete="current-password"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="block text-gray-700 dark:text-gray-300">Confirm password<span className="text-red-500">*</span></label>
                    <input
                      id="confirm-password"
                      name="c-password"
                      type="password"
                      value={c_password}
                      onChange={(event) => {
                        setCPassword(event.target.value)
                      }}
                      autoComplete="current-password"
                      required
                      className="dark:bg-transparent dark:border-gray-800 dark:text-gray-300 p-3 appearance-none rounded-none  block w-full border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm password"
                    />
                    {password === c_password ? <></> : <p className="text-red-500 text-sm font-semibold mt-2 flex items-center space-x-2 animate-pulse">
                    <ExclamationCircleOutline className="w-5 h-5 mr-3"/> Passwords do not match</p>}
                  </div>

                </div>

                <div className="flex items-center justify-between">
                  
                  <div>
                      <p className="text-center text-sm justify-center  dark:text-gray-300">
                        By continuing to sign up, you agree to eCast user <Link to="#" className="text-blue-500 underline font-medium">Privacy Policy</Link>
                      </p>
                  </div>

                </div>

                <div>
                  <SubmitButton text="Continue to sign up" onClick={() => {
                    
                  }}/>
                  <p className="text-green-400 p-2 text-center font-semibold">
                    {registerStatus}
                    {registerStatus === 'You have registered successfully!' ? history.push('/choose-category') : ''}
                  </p>
                </div>

                <div>
                    <p className="text-center justify-center text-sm  dark:text-gray-300">
                        Already a member? <span className="text-blue-500 hover:text-blue-700">
                            <Link to="/sign-in">Sign in</Link>
                        </span>
                    </p>
                </div>

              </form>
            </div>
        </div>
        )
    
}

export default Register
