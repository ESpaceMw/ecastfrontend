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

            console.log('====================================');
            console.log(response.data.access_token);
            console.log('====================================');

            localStorage.setItem('access_token', response.data.access_token)

            localStorage.setItem('username', response.data.user.first_name + ' ' + response.data.user.last_name)

            localStorage.setItem('user_id', response.data.user.id)

            localStorage.setItem('basic_info_id', response.data.basic_info.id)

            localStorage.setItem('basic_info', JSON.stringify(response.data.basic_info))

            localStorage.setItem('channel_id', response.data.channel.id)

            return response.data

        }catch(error){

            console.log(error)

            return false

        }

    }
}

export default new LoginService()