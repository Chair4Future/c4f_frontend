//https://mobx.js.org/
//server para gerir o estado geral da aplicação
import { observable, action } from "mobx";
import axios, { configs } from "../configs/axios";

class User {
  constructor(user = {}) {
    this.token = user.token || null;
    this.user_id = user.user_id || null;
    this.email = user.email || null;
    this.name = user.name;
    this.image =
      user.image ||
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
    this.organizations = user.organizations;
  }
}

class ObservableUser {
  @observable user = loadUser();
  @observable organization = null;

  @action
  async AutenticateUser(credentials) {
    try {
      const response = await axios.post("/login", credentials);

      console.log(response);
      if (response.status === 200) {
        const token = response.data.token;
        const { id, name, email, photo, companies } = response.data.user;
        const user = {
          token: token,
          user_id: id,
          email: email,
          name: name,
          image: photo,
          organizations: companies
        };
        this.user = new User(user);
        saveUser(user);
        return true;
      }
    } catch (error) {
      this.user = null;
      console.error(error);
    }
    return false;
  }

  @action
  userReset() {
    this.user = null;
  }

  @action
  organizationUpdate(org) {
    this.organization = org;
  }

  @action
  organizationReset() {
    this.organization = null;
  }
}
export default new ObservableUser();

export const saveUser = user => {
  sessionStorage.setItem("user", JSON.stringify(user));
  axios.defaults.headers.common["Authorization"] = user.token;
};

export const loadUser = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    axios.defaults.headers.common["Authorization"] = user.token;
    return new User(user);
  } else return null;
};

export const removeUser = () => {
  sessionStorage.removeItem("user");
  axios.defaults.headers.common["Authorization"] = null;
};
