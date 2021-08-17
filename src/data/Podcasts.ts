import Microphone from '../icons/microphone.png'
import Playlist from '../icons/playlist.png'
import User from '../icons/user.png'

const Podcasts = [
    {
        MenuTitle: 'Episodes',
        Icon: Microphone,
        LinkTo: '/dashboard/episodes'
    },
    {
        MenuTitle: 'Media',
        Icon: Playlist,
        LinkTo: '/dashboard/media'
    },
    {
        MenuTitle: 'Contacts',
        Icon: User,
        LinkTo: '/dashboard/contacts'
    },
]

export default Podcasts