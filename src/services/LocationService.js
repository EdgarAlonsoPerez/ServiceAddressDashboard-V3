import axios from 'axios'
import { FilterService, FilterMatchMode } from 'primevue/api';
import ENVIRONMENTS from './services_config'

export default class LocationService {
    BSLURL = ""
    cities = [];
    states = [];
    countries = [];

    constructor() {
        this.BSLURL = ENVIRONMENTS["PRODUCTION"].BSLURL
    }

    //example return axios.get('data/countries.json').then(res => res.data.data);
    async getCountries() {

    }

    async getCountry() {

    }

    async getStates() {

    }

    async getState() {

    }

    async getCities() {

        try {
            const { data, status, request } = await axios({
                method: 'GET',
                url: this.BSLURL + '&action=getCities',
                responseType: 'json',
                timeout: 30000
            })
            if (status != 200) {
                throw request;
            }
            if (["ok", "success", true, 200].indexOf(data.success) != -1) {
                this.cities = [...data.data];
                console.log(this.localitiesList)
            } else {
                throw data.success;
            }
        } catch (e) {
            console.error(e)
        }
        return this.cities;
    }

    async getCity() {

    }

    async getMunicipalities() {

    }

    async getMunicipality() {

    }

    searchLocationByCity = (query) => {
        let newFilteredItems = [];

        let filteredItems = FilterService.filter(this.cities, ['name'], query, FilterMatchMode.CONTAINS);
        if (filteredItems && filteredItems.length) {
            newFilteredItems.push({... { items: filteredItems } });
        }
        console.log(filteredItems)
        return newFilteredItems;
    }
    searchCity(query) {
        let newFilteredItems = [];
        if (this.cities.length == 0) {
            return [];
        }

        let filteredItems = FilterService.filter(this.cities, ['name'], query, FilterMatchMode.CONTAINS);
        if (filteredItems && filteredItems.length) {
            newFilteredItems.push(...filteredItems);
        }

        return newFilteredItems;
    }

}