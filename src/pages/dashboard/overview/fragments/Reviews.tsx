import { Star } from "heroicons-react"
import moment from "moment"
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import DashboardMain from "../../../../components/layouts/DashboardMain"

const Reviews = () => {

    const [reviews, setReviews] = useState<any[]>([])

    const [reviewsLoading, setReviewsLoading] = useState(false)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/channels/listener-review-get',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ channels_id: localStorage.getItem('channel_id')?.toString() })
            }
        ).then(async (response) => {
            return response.json()
        }).then((data) => {
            setReviewsLoading(false)
            setReviews(data.reviews)
        }).catch((err) => {
            setReviewsLoading(false)
            console.log(err)
        })
    }, [])
    
    return (
        <div>
            <DashboardMain>
                <div className="rounded-sm p-3 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md">
                    <div>
                        <h3 className="text-md font-semibold">
                            Listeners reviews
                        </h3>
                        <div>
                        {!reviewsLoading ?
                                    reviews.map((index) => (
                                        <div key={index.id} className="w-full flex justify-between p-3 dark:hover:bg-gray-800 hover:bg-gray-100 transition duration-150 rounded-sm">
                                    <div className="flex">
                                        <img src={"http://127.0.0.1:8000/storage/profile/"+index.reviewer_avatar} alt="reviewer" className="rounded-full object-cover w-12 h-12" />
                                        <div className="ml-2">
                                            <div className="flex flex-row">
                                                {
                                                    Array(index.stars).fill(index.stars).map((item) => (
                                                        <div key={item} className="flex flex-row">
                                                            <Star className="w-4 h-4 text-yellow-400"/>
                                                        </div>
                                                    ))
                                                }
                                                <p className="text-xs bg-blue-400 p-1 text-white rounded-sm">{index.stars} Rated</p>
                                            </div>
                                            <p className="mt-2 text-sm dark:text-gray-300">
                                                {index.reviewer_name}: "{index.review}"
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-36 right-0 text-sm dark:text-gray-300">
                                        {moment.utc(index.created_at).local().fromNow()}
                                    </div>
                                </div>
                                    ))
                                    : (
                                            Array(3).fill(3).map((index) => (
                                            <div key={index} className="w-full flex justify-between p-3 dark:hover:bg-gray-800 hover:bg-gray-100 transition duration-150 rounded-sm">
                                            <div className="flex">
                                                <Skeleton style={{ borderRadius: 200 }} height={40} width={40}/>
                                                <div className="ml-2">
                                                    <Skeleton height={20} width={50}/>
                                                    <p className="mt-2 text-sm dark:text-gray-300">
                                                        <Skeleton height={40} width={200}/>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="w-36 right-0 text-sm dark:text-gray-300">
                                                <Skeleton height={20} width={50}/>
                                            </div>
                                        </div>
                                            ))
                                    )
                                }
                        </div>
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Reviews