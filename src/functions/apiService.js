import axios from 'axios';

const apiService = axios.create({
    baseURL: './json/offer.json'
});

export default apiService;