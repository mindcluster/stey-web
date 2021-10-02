import axios from "./axios";

const url = 'http://localhost:8080'

/*
    Auth
*/
export const auth = (params) => {
    return axios.post(`${url}/auth`, params);
};
