//https://mobx.js.org/
//server para gerir o estado geral da aplicação
import { observable, action } from "mobx"
import axios from '../configs/axios';

class User {
    constructor(user = {}){
        this.token = user.token || null;
        this.user_id = user.user_id || null;
        this.email = user.email || null;
        this.firstName = user.firstName || null;
        this.lastName = user.lastName || null;
        this.roles = user.roles || null;
        this._Roles = new Set(this.roles? this.roles.map(r => r.toLowerCase()) : null);
    }
}

class ObservableUser{
    @observable user = null;

    @action async AutenticateUser(credentials) {
        try {
            const response = await axios.post('/login', credentials);

            console.log(response)
            if(response.status === 200){
                const {token, user} = response.data;
                this.user = new User({token: token, user_id: user});
                return true;
            }
        } catch (error) {
            this.user = null;
            console.error(error);
        }
        return false;
    }
}

export default new ObservableUser();
