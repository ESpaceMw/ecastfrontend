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

            return response

        }catch(error){

            console.log(error)

            return false

        }

    }
}

export default new LoginService()