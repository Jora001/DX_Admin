import axios from 'axios';

const api = axios.create({
    baseURL: ''
})

class Api {
    static getAllUser() {
        return api.get('/users');
    }
}

export default Api
