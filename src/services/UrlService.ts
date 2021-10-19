let apiDomain = ''

if(process.env.NODE_ENV === 'production'){

    apiDomain = 'https://api.ecast.espacemw.com'

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
}

export default UrlService