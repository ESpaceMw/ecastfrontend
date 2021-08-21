import { Link } from "react-router-dom"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Spotify from '../../../icons/spotify.png'
import ApplePodcast from '../../../icons/podcast.png'
import GooglePodcast from '../../../icons/5f675b163b3c2a0004655704.png'
import Rakh from '../../../media/dude.jpg'

const integrations = [
    {
        title: 'Spotify',
        icon: Spotify,
        description: "Spotify is a monster in music and podcast distribution. With Spotify, you can be assured that you have access to millions of potential world listeners.",
        linkText: 'Submit to Spotify ',
        linkUrl: '#'
    },
    {
        title: 'Apple Podcasts',
        icon: ApplePodcast,
        description: "Apple podcasts is the best way to have you podcast distributed to all Apple devices' users. Integrating to Apple podcasts is integrating to Apple lovers.",
        linkText: 'Submit to Podcasts',
        linkUrl: '#'
    },
    {
        title: 'Google Podcasts',
        icon: GooglePodcast,
        description: "Finally catching up to its competitors, Google podcasts is Must! (Seeing that they dominate on Android)",
        linkText: 'Submit to Google Podcasts',
        linkUrl: '#'
    },
]

const Integrations = () => {
    return(
        <div className="dark:bg-gray-800">
            <DashboardMain>
                <div className="border dark:border-gray-700 mb-10 m-3 bg-white dark:bg-gray-900">
                    <div className="w-full py-10 mb-10 bg-cover bg-gradient-to-r from-gray-600 via-gray-300 to-white bg-opacity-10" style={{ backgroundImage: `url(${Rakh})` }}>
                        <p className="text-3xl sm:w-72 text-white text-bold p-3">
                            Distribute your podcast to 
                            the most popular streaming 
                            platforms in the world.
                        </p>
                    </div>
                    <div className="mt-3 mb-3 p-3">
                        <p className="text-center dark:text-gray-200">
                            Your RSS feed URL is:
                        </p>
                        <p className="text-blue-400 hover:text-blue-500 text-center mt-2 truncate">
                            <Link to="#">
                                https://dhakanhlanhlla.ecast.espace.com/rss2.xml
                            </Link>
                        </p>
                    </div>
                    <div className="p-3 sm:px-20 px-3">
                        {integrations.map((item) => (
                            <div className="border-b dark:border-gray-700 mb-3 dark:hover:bg-gray-800 hover:bg-gray-50 transition duration-150 pb-3 border-gray-300">
                            <div className="flex p-3">

                                <img src={item.icon} alt="spotify-icon" className="w-24 h-24" />
                                
                                <div className="ml-3">
                                    <h3 className="font-bold dark:text-gray-200">{item.title}</h3>
                                    <p className="dark:text-gray-300">{item.description}</p>
                                    <Link to={item.linkUrl} className="text-blue-400 hover:text-blue-500">{item.linkText}</Link>
                                </div>

                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </DashboardMain>
        </div>
    )
}

export default Integrations