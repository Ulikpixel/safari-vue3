import axios from "axios"

export const request = axios.create({
    baseURL: 'https://sino0on.pythonanywhere.com/api/v1',
    timeout: 1000,
});
