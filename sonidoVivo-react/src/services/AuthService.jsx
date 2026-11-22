import axios from "axios";

const BASE_URL='/api/auth/login';

class AuthService{
    
    login(user){
        return axios.post(BASE_URL, user)
    }
}

export default new AuthService();