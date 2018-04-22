//https://mobx.js.org/
//server para gerir o estado geral da aplicação

import { observable, action } from "mobx"

@observable user = null;

class User {
    constructor(user = {}){
        this.token = user.token || null;
        this.user_id = user.user_id || null;
        this.username = user.user_id || null;
        this.firstName = user.user_id || null;
        this.lastName = user.user_id || null;
        this.roles = user.roles || null;
        this._Roles = new Set(this.roles.map(r => r.toLowerCase()));
    }
}

export default user;
// @action AuthUser() {


// }