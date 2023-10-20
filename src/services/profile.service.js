import axios from 'axios'

const API_URL_Profile = 'http://localhost:9999/api/profile/';

class ProfileService {

    updateAddress(address, user){
        console.log('inside updateEmployee')
        console.log(user)
        let URL = API_URL_Profile + '/address';
        return axios.put(URL, address)
    }

}

export default new ProfileService()
