import axios from 'axios'

const API_URL_Admin='http://localhost:9999/api/admin'

class AdminService {
    getAllUser() {
        return axios.get(API_URL_Admin + '/all-user')
    }
    getUserById(id) {
        let URL = API_URL_Admin + '/user/' + id;
        return axios.get(URL);
    }
    updateUser(user) {
        let URL = API_URL_Admin + '/update-user/' + user.id
        return axios.post(URL, user)
    }
    deleteUser(id) {
        let URL = API_URL_Admin + '/delete-user/' + id;
        return axios.get(URL)
    }
}

export default new AdminService()
