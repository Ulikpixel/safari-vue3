import axios from "axios"

export const request = axios.create({
    baseURL: 'http://212.113.119.205/api/v1',
    timeout: 1000,
});
