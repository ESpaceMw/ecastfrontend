import axios from "axios"
import UrlService from "../UrlService"

interface Credentials{

    first_name: string; last_name: string; gender: string; date_of_birth: string; country: string; city: string; email: string; phone_number: string; password: string

}

class RegisterService {
    

    async processRegister(credentials: Credentials){

        try {

            console.log(credentials)

            let response = await axios.post(UrlService.registerUrl(), credentials)

            if(response.data.error){
                return response.data.error
            }
            return 'You have registered successfully!'

        }catch(error){

            return false

        }

    }

}

export default new RegisterService()