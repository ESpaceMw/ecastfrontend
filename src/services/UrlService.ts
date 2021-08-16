let apiDomain = ''

if(process.env.NODE_ENV === 'production'){

    apiDomain = 'https://ecastmalawi.com'

}else{

    apiDomain = 'http://127.0.0.1:8000'

}

class UrlService {

    static loginUrl(){

        return apiDomain + 'api/v1/auth/login'

    }
}

export default UrlService