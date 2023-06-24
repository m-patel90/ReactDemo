//import { authHeader } from "../services/auth-header";
const axios = require("axios");

function kebabCaseToCamel(str) {
    return str.replace(/(\-\w)/g, (matches) => matches[1].toUpperCase());
}

class API {
    constructor({ url }) {
        this.url = url;
        this.endpoints = {};
        this.auth_header = true
    }
    /**
     * Create and store a single entity's endpoints
     * @param {A entity Object} entity
     */
    createEntity(entity) {
        const name = kebabCaseToCamel(entity.name);
        this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
    }

    createEntities(arrayOfEntity) {
        arrayOfEntity.forEach(this.createEntity.bind(this));
    }
    /**
     * Create the basic endpoints handlers for CRUD operations
     * @param {A entity Object} entity
     */
    createBasicCRUDEndpoints({ name }) {
        var endpoints = {};
        // let auth_header = authHeader();
      //  let auth_header = true;
        const resourceURL = `${this.url}/${name}`;

        endpoints.postAllWithoutToken = (params = {}, config = {}) =>
            axios.post(resourceURL, params, config);

            endpoints.getAllWIthoutToken = (params = {}, config = {}) => {
                return  axios.get(resourceURL)
            };

        endpoints.getAll = (params = {}, config = {}) => {
            return this.auth_header
                ? axios.get(resourceURL, {
                    headers: this.auth_header, params
                })
                : false;
        };

        endpoints.getByIdWithToken = (id, config = {}) =>
            axios.get(`${resourceURL}${id}`, { headers: this.auth_header, ...config })

        endpoints.getAllPost = (toCreate, config = {}) => {
            let { headers, ...rest } = config;
            let sendHeaders = { ...this.auth_header, ...headers };
            return this.auth_header
                ? axios.post(resourceURL, toCreate, {
                    headers: sendHeaders,
                    ...rest,
                })
                : false;
        };

        endpoints.getById = (id, config = {}) =>
            this.auth_header
                ? axios.get(`${resourceURL}${id}`, { headers: { ...this.auth_header, ...config } })
                : false;

        endpoints.getOne = (id, config = {}) =>
            this.auth_header
                ? axios.get(`${resourceURL}/${id}`, { headers: { ...this.auth_header, ...config } })
                : false;

        endpoints.create = (toCreate, config = {}) =>
            this.auth_header
                ? axios.post(resourceURL, toCreate, { headers: { ...this.auth_header, ...config } })
                : false;
        endpoints.createByqueryString = (id, config = {}) =>
            this.auth_header
                ? axios.post(`${resourceURL}/${id}`, { headers: { ...this.auth_header, ...config } })
                : false;

        endpoints.update = (toUpdate, config = {}) =>
            this.auth_header
                ? axios.put(`${resourceURL}/${toUpdate.userId}`, toUpdate , { headers: { ...this.auth_header, ...config }})
                : false;

        endpoints.delete = ({ id }, config = {}) =>
            this.auth_header
                ? axios.delete(`${resourceURL}/${id}`,  { headers: { ...this.auth_header, ...config }})
                : false;

        endpoints.deleteById = (id, config = {}) =>
            this.auth_header
                ? axios.post(`${resourceURL}${id}`, { headers: { ...this.auth_header, ...config } })
                : false;

        endpoints.getDropdown = (config = {}) =>
            this.auth_header
                ? axios.get(`${resourceURL}`, { headers: { ...this.auth_header, ...config } })
                : false;
        return endpoints;
    }
}

export default API;
