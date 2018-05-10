//https://mobx.js.org/
//server para gerir o estado geral da aplicação
import { observable, action } from "mobx"
import axios from '../configs/axios';

class Organization {
    constructor(organization = {}) {
        this.name = organization.name || null;
        this.businessArea = organization.businessArea || null;
        this.logo = organization.logo || null;
        this.banner = organization.banner || null;
        this.addresses = organization.addresses || null;
        this.contacts = organization.contacts || null;
        this.informations = organization.informations || null;
    }
}

class ObservableOrganization {
    @observable organization = new Organization();

    @action organizationUpdate(org) {
        this.organization = org;
    }

    @action organizationReset() {
        this.organization = null;
    }
}

export default new ObservableOrganization();
