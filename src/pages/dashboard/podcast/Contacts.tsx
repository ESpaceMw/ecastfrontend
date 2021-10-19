import { useState, useEffect, ChangeEvent } from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
import ContactListItem from "../../../components/ContactListItem"
import DashboardMain from "../../../components/layouts/DashboardMain"

const Contacts = () => {

    const [contacts, setContacts] = useState<any[]>([])

    const [filteredData,setFilteredData] = useState(contacts);

    const [name, setName] = useState('');

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.ecast.espacemw.com/api/v1/subscription/subscribers',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channel_id: 7 })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setIsLoading(false)
            setContacts(data.subscribers)
            setFilteredData(data.subscribers)
            console.log(data.subscribers);
            
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }, [])

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

        let value = event.target.value.toLowerCase();
        

        if (value !== '') {
        const results = contacts.filter((user) => {
            return user.first_name.toLowerCase().startsWith(value.toLowerCase());
        });
        setFilteredData(results);
        } else {
        setFilteredData(contacts);
        }

        setName(value);
    }

    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div>
                    <div className="w-full dark:bg-gray-900 dark:text-gray-300 bg-white shadow-sm hover:shadow-md rounded-sm">
                        <div className="sm:px-24 px-5 py-5">
                            <div className="flex border dark:border-gray-700 px-3 py-3">
                                <svg className="w-4 h-4 mt-1 flex-shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                    <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                                </svg>
                                <input
                                    id="modal-search" 
                                    className="w-full dark:bg-transparent rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                                    type="text"
                                    value={name}
                                    onChange={(event) =>handleSearch(event)}
                                    placeholder="Search contact by first name" />
                                {name !== '' ? <Link to="#" onClick={() => {
                                    setName('') 
                                    setFilteredData(contacts)}} className="font-semibold text-blue-400">Clear</Link> : ''}
                                </div>
                                
                            <div className="mt-3">
                                <h3 className="text-md uppercase">All contacts</h3>

                                {!isLoading ?
                                    filteredData.map((item) => (
                                    <ContactListItem 
                                        key={item.id}
                                        imageUrl={item.basic_info.clip_art} 
                                        contactName={item.first_name+' '+item.last_name}>
                                            <div className="flex-none h-12 pl-8 mb-4">
                                                <p className="mt-1 mb-1 text-blue-400 font-semibold">Say hello👋 to {item.first_name}</p>
                                                {/* <div className="flex border dark:border-gray-700 px-3 py-3 mb-5">
                                                    <div className="bg-gray-100 rounded-full w-8 h-8 mr-3 hover:bg-gray-200 dark:bg-gray-700 hover:text-gray-900 transition duration-150">
                                                        <Camera className="w-6 h-6 m-1 text-gray-600 dark:text-gray-400"/>
                                                    </div>
                                                    <input
                                                        className="w-full dark:bg-transparent dark:text-gray-200 rounded-sm focus:border-none outline-none focus:ring-none placeholder-gray-400 appearance-none pr-4" 
                                                        type="text" 
                                                        onChange={(e)=>{e.target.value.length !== 0 ? setIsTyping(true) : setIsTyping(false)}}                                                     
                                                        placeholder="Type your message here" 
                                                        />
                                                    {
                                                    !isTyping ? 
                                                    '' : <Link to="#" className="font-semibold text-blue-400">Send</Link>
                                                    }
                                                </div> */}
                                            </div>
                                    </ContactListItem>
                                )) : (
                                    Array(9)
                                    .fill(9)
                                    .map((index) => (
                                        <div key={index} className="flex justify-between">
                                        <div className="px-10 py-4 flex">
                                            <Skeleton height={40} width={40}
                                             style={{ borderRadius: 200 }}
                                            />
                                            <Skeleton height={20} width={100} className="ml-3"/>
                                        </div>
                                        <Skeleton style={{ borderRadius: 200 }} height={20} width={20} className="ml-3"/>
                                        </div>
                                    ))
                                )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Contacts