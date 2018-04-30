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
        this.nameComplete = this.firstName + " " + this.lastName;
        this.roles = user.roles || null;
        this.image = user.image || null;
        this._Roles = new Set(this.roles? this.roles.map(r => r.toLowerCase()) : null);
        this.organizations = [
            {id: 1, name: 'Softinsa', img: 'http://www.softinsa.pt/media/2017/12/85ad3272-460d-489f-bbbb-83a88a62892f-1513956143838.jpg'},
            {id: 2, name: 'Critical', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CSW_Gradiente_rgb.png/220px-CSW_Gradiente_rgb.png'}
        ];
    }
}

class ObservableUser{
    //para testes, deve ser null
    @observable user = {
        token: null,
        user_id: 1,
        email: "luisnunes111@hotmail.com",
        firstName: "Luis",
        lastName: "Nunes",
        nameComplete: "Luis Nunes",
        image: 'http://www.softinsa.pt/media/2017/12/85ad3272-460d-489f-bbbb-83a88a62892f-1513956143838.jpg',
        organizations: [
            {id: 1, name: 'Softinsa', img: 'http://www.softinsa.pt/media/2017/12/85ad3272-460d-489f-bbbb-83a88a62892f-1513956143838.jpg'},
            {id: 2, name: 'Critical', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/CSW_Gradiente_rgb.png/220px-CSW_Gradiente_rgb.png'}
        ]
    }
    @observable organization = null;

    @action async AutenticateUser(credentials) {
        try {
            const response = await axios.post('/login', credentials);

            console.log(response)
            if(response.status === 200){
                const {token, user} = response.data;
                this.user = new User({token: token, user_id: user});
                axios.defaults.headers.common['Authorization'] = token;
                return true;
            }
        } catch (error) {
            this.user = null;
            console.error(error);
        }
        return false;
    }

    @action organizationUpdate(org) {
        this.organization = org;
    }

    @action organizationReset() {
        this.organization = null;
    }
}

export default new ObservableUser();
