let apiDomain = ''

if(process.env.NODE_ENV === 'production'){

    apiDomain = 'https://api.ecast.espacemw.com/'

}else{

    apiDomain = 'http://127.0.0.1:8000/'

}

class UrlService {

    static loginUrl(){

        return apiDomain + 'api/v1/auth/login'

    }

    static registerUrl(){

        return apiDomain + 'api/v1/auth/register'
        
    }


    static mainUrl(){

        return apiDomain + 'api/v1/'
        
    }
    /* User information */
    static updateUserInformation(){

        return apiDomain + 'api/v1/profile/basic_info/update'
        
    }
    /*Podcast series */

    static createSeries(){

        return apiDomain + 'api/v1/podcasts/series/create'

    }

    static getSeries(){

        return apiDomain + 'api/v1/podcasts/series/get'
        
    }

    static seriesCategories(){

        return apiDomain + 'api/v1/category/categories'
        
    }

    static mediaPhotos(){

        return apiDomain + 'api/v1/podcasts/media/photos'

    }

    static mediaAudios(){

        return apiDomain + 'api/v1/podcasts/media/audios'

    }
    /* Podcast episodes */
    static createEpisode(){

        return apiDomain + 'api/v1/podcasts/episodes/create'

    }

    /*Overview */
    static popularEpisodes(){
        
        return apiDomain + 'api/v1/podcasts/episodes/popular-podcasts'
        
    }

    static listenersReviews(){

        return apiDomain + 'api/v1/channels/listener-review-get'

    }

    static newSubscribers(){

        return apiDomain + 'api/v1/subscription/new-subscribers'
        
    }
}

export default UrlService