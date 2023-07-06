import axios from "axios";


export const api = axios.create({
    baseURL: 'https://rocketexplorer-api.onrender.com'
})
