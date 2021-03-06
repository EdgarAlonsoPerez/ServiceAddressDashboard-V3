import axios from 'axios'
import ENVIRONMENTS from './services_config'

export default class ServiceAddressesService {
    BSLURL = ""
    serviceAddresses = [];

    constructor() {
        this.BSLURL = ENVIRONMENTS["PRODUCTION"].BSLURL
            // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    }

    async getServiceAddresses(filters) {
        // return filters;
        try {
            const { data, status, request } = await axios({
                method: 'GET',
                url: this.BSLURL + "&action=getServiceAddresses-vue&cityId=" + filters.cityId,
                responseType: 'json',
                timeout: 30000,
                // data: {
                //     'action': "getServiceAddresses-vue",
                //     filters
                // }
            })
            if (status != 200) {
                throw request;
            }
            if (["ok", "success", true, 200].indexOf(data.success) != -1) {
                this.serviceAddresses = [...data.data];
                console.log(this.serviceAddresses)
            } else {
                throw data.success;
            }
        } catch (e) {
            console.error(e)
        }
        return this.serviceAddresses;
    }

    async getServiceAddress(internalId) {
        return internalId;
    }

    async saveServiceAddress(record) {
        return record
    }

}