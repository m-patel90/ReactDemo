import Configuration from "../../Shared/Configuration";
import EndPointEntity from "../../Shared/endpointentity";
import API from "../../Shared/API";

export default class ClientRegistration {
    constructor() {
        this.config = new Configuration();
        this.endpoint = new EndPointEntity();
    }

    async SaveClientRegistration(param) {
        const myApi = new API({ url: this.config.CLIENT_URL });
        myApi.createEntity({ name: this.endpoint.SAVE_CLIENT_REGISTRATION });
        let itemArray = [];
        await myApi.endpoints[this.endpoint.SAVE_CLIENT_REGISTRATION].create(param)
            .then(({ data }) => {
                itemArray = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return Promise.resolve(itemArray);
    }

    async AddClientPackage(param) {
        const myApi = new API({ url: this.config.CLIENT_URL });
        myApi.createEntity({ name: this.endpoint.ADD_CLIENT_PACKAGTE });
        let itemArray = [];
        await myApi.endpoints[this.endpoint.ADD_CLIENT_PACKAGTE].create(param)
            .then(({ data }) => {
                itemArray = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return Promise.resolve(itemArray);
    }

    async GetUser(token) {
        const myApi = new API({ url: this.config.CLIENT_URL });
        myApi.createEntity({ name: this.endpoint.GET_USER });
        let itemArray = [];
        let param = 'token=' + token;
        await myApi.endpoints[this.endpoint.GET_USER].getById(param)
            .then(({ data }) => {
                itemArray = data;
            })
            .catch((err) => {
                console.log(err);
            });
        return Promise.resolve(itemArray);
    }

}

