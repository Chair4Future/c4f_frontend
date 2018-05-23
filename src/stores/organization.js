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
        this.information = organization.information || null;
    }
}

class ObservableOrganization {
    @observable organization = new Organization();

    @action organizationUpdate(data) {
        this.organization = {...this.organization, ...data};
        
        // this.name = this.organization.name = null ? this.organization.name : org.name;
        // this.businessArea = this.organization.businessArea = null ? this.organization.businessArea : org.businessArea;
        // this.logo = this.organization.logo = null ? this.organization.logo : org.logo;
        // this.banner = this.organization.banner = null ? this.organization.banner : org.banner;
        // this.addresses = this.organization.addresses = null ? this.organization.addresses : org.addresses;
        // this.contacts = this.organization.contacts = null ? this.organization.contacts : org.contacts;
        // this.informations = this.organization.informations = null ? this.organization.informations : org.informations;
    }

    @action organizationReset() {
        this.organization = null;
    }
}

export default new ObservableOrganization();
