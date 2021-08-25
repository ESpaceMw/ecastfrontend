/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { PaperClipIcon } from "@heroicons/react/outline"
import { Trash } from "heroicons-react"
import DashboardMain from "../../../components/layouts/DashboardMain"
import DeactivateAccount from "../../../components/user/DeactivateAccount"

const Settings = () => {
    return(
    <div className="dark:bg-gray-800">
        <DashboardMain>
            <div className="bg-white dark:bg-gray-900 rounded-sm p-3 shadow-sm hover:shadow-md">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-200">Application settings</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-300">Change and edit your eCast privacy settings</p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    <dl>
                    <div className="dark:bg-gray-800  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Show tagline in message heads</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                            <p></p><input type="checkbox" name="" id="" />
                        </dd>
                    </div>
                    <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Allow file uploads</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                            <p></p><input type="checkbox" checked name="" id="" />
                        </dd>
                    </div>
                    <div className="dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Allow file downloads</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                            <p></p><input type="checkbox" checked name="" id="" />
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Usage on multipe devices</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                            <p></p><input type="checkbox" checked name="" id="" />
                        </dd>
                    </div>
                    <div className="dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">Save recent searches</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">
                            <p></p><input type="checkbox" checked name="" id="" />
                        </dd>
                    </div>
                    <div className="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Account deactivation</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul role="list" className="border border-red-400 rounded-md divide-y divide-gray-200">
                            
                            <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                                <Trash className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                                <span className="ml-2 flex-1 w-0 truncate dark:text-gray-300">Deactive my acount</span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <DeactivateAccount/>
                            </div>
                            </li>
                        </ul>
                        </dd>
                    </div>
                    </dl>
                </div>
            </div>
        </DashboardMain>
    </div>)
}

export default Settings