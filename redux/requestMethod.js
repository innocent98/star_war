import axios from "axios";

export const userRequest = axios.create({
    baseURL: 'https://swapi.dev/api/'
})