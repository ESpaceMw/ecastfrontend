import UrlService from "../UrlService"
import axios from "axios"

interface Credentials{

    email: string,

    password: string

}


class LoginService{

    async processLogin(credentials: Credentials){

        try {

            let response = await axios.post(UrlService.loginUrl(), credentials)

            localStorage.setItem('access_token', response.data.access_token)

            localStorage.setItem('username', response.data.user.first_name + ' ' + response.data.user.last_name)

            localStorage.setItem('user_id', response.data.user.id)

            localStorage.setItem('basic_info_id', response.data.basic_info[0].id)

            localStorage.setItem('basic_info', JSON.stringify(response.data.basic_info))

            localStorage.setItem('channel_id', response.data.channel[0].id)

            localStorage.setItem('channel_name', response.data.channel[0].name)

            localStorage.setItem('channel_description', response.data.channel[0].description)

            localStorage.setItem('channel_cover_art', response.data.channel[0].cover_art)

            return response.data

        }catch(error){

            console.log(error)

            return false

        }

    }
}

export default new LoginService()