import { Link } from "react-router-dom"
import DashboardMain from "../../../components/layouts/DashboardMain"
import Spotify from '../../../icons/spotify.png'
import ApplePodcast from '../../../icons/podcast.png'
import GooglePodcast from '../../../icons/5f675b163b3c2a0004655704.png'

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
        <div>
            <DashboardMain>
                <div className="border mb-10 m-3">
                    <div className="bg-blue-500 w-full py-10 mb-10">
                        <p className="text-3xl w-72 text-white text-bold p-3">
                            Distribute your podcast to 
                            the most popular streaming 
                            platforms in the world.
                        </p>
                    </div>
                    <div className="mt-3 mb-3">
                        <p className="text-center">
                            Your RSS feed URL is:
                        </p>
                        <p className="text-blue-400 hover:text-blue-500 text-center mt-2">
                            <Link to="#">
                                https://dhakanhlanhlla.ecast.espace.com/rss2.xml
                            </Link>
                        </p>
                    </div>
                    <div className="p-3 px-20">
                        {integrations.map((item) => (
                            <div className="border-b mb-3 hover:bg-gray-50 transition duration-150 pb-3 border-gray-300">
                            <div className="flex">

                                <img src={item.icon} alt="spotify-icon" className="w-24 h-24" />
                                
                                <div className="ml-3">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="">{item.description}</p>
                                    <Link to={item.linkUrl} className=" text-blue-400">{item.linkText}</Link>
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