import axios from "axios"
import { LocalStorage } from "./localStorage";

const token = LocalStorage.get('isAuth')?.access;

export const request = axios.create({
    baseURL: 'http://212.113.119.205/api/v1',
    timeout: 1000,
    headers: {
       ...(token && { Authorization : `Bearer ${token}` })
    }
});
